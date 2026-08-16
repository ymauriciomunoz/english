"use client";

import {
  useCallback,
  useMemo,
  useState,
  useSyncExternalStore,
  type Dispatch,
  type SetStateAction,
} from "react";

type Parser<T> = (storedValue: unknown) => T;

const localStorageEvent = "brightup-local-storage";

function readStoredValue(key: string) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function parseStoredValue<T>(stored: string | null, fallback: T, parser?: Parser<T>) {
  if (stored === null) return fallback;

  let parsed: unknown = stored;
  try {
    parsed = JSON.parse(stored) as unknown;
  } catch {
    // Los valores de versiones anteriores podían guardarse como texto plano.
  }

  return parser ? parser(parsed) : parsed as T;
}

function subscribeToStoredValue(key: string, onStoreChange: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === key || event.key === null) onStoreChange();
  };
  const handleLocalStorage = (event: Event) => {
    if (event instanceof CustomEvent && event.detail === key) onStoreChange();
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener(localStorageEvent, handleLocalStorage);
  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(localStorageEvent, handleLocalStorage);
  };
}

const getServerStoredValue = () => null;
const subscribeToHydration = () => () => undefined;
const getClientReady = () => true;
const getServerReady = () => false;

export function usePersistentState<T>(
  key: string,
  initialValue: T,
  parser?: Parser<T>,
): [T, Dispatch<SetStateAction<T>>, boolean] {
  const [fallbackValue] = useState(initialValue);
  const subscribe = useCallback(
    (onStoreChange: () => void) => subscribeToStoredValue(key, onStoreChange),
    [key],
  );
  const getSnapshot = useCallback(() => readStoredValue(key), [key]);
  const storedValue = useSyncExternalStore(subscribe, getSnapshot, getServerStoredValue);
  const ready = useSyncExternalStore(subscribeToHydration, getClientReady, getServerReady);
  const value = useMemo(
    () => parseStoredValue(storedValue, fallbackValue, parser),
    [fallbackValue, parser, storedValue],
  );

  const setValue = useCallback<Dispatch<SetStateAction<T>>>((nextValue) => {
    const currentValue = parseStoredValue(readStoredValue(key), fallbackValue, parser);
    const resolvedValue = typeof nextValue === "function"
      ? (nextValue as (current: T) => T)(currentValue)
      : nextValue;

    window.localStorage.setItem(key, JSON.stringify(resolvedValue));
    window.dispatchEvent(new CustomEvent(localStorageEvent, { detail: key }));
  }, [fallbackValue, key, parser]);

  return [value, setValue, ready];
}
