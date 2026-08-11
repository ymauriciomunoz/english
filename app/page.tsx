"use client";

import { useEffect, useMemo, useState } from "react";
import { a1Course } from "./a1-course";
import { a2Course } from "./a2-course";
import { b1Course } from "./b1-course";
import { b2Course } from "./b2-course";
import { c1Course } from "./c1-course";

type Level = "A1" | "A2" | "B1" | "B2" | "C1";
type Lesson = { id: string; level: Level; number: number; title: string; summary: string; icon: string };

const levelData: Record<Level, { label: string; color: string; topics: string[] }> = {
  A1: { label: "Primeros pasos", color: "#6c5ce7", topics: [
    "Hello, world!", "Mi nombre y mi edad", "Colores por todas partes", "Números en acción", "Mi familia",
    "En el salón de clase", "Días de la semana", "Mi rutina diaria", "Comida que me encanta", "Animales increíbles",
    "Mi casa", "Ropa y accesorios", "El clima de hoy", "Partes del cuerpo", "Mis pasatiempos", "En el parque",
    "¿Qué hora es?", "Mi ciudad", "Plan de fin de semana", "Misión A1"] },
  A2: { label: "Explorador", color: "#00a896", topics: [
    "Mi último viaje", "Una historia divertida", "Compras inteligentes", "Direcciones en la ciudad", "Planes futuros",
    "Mis mejores amigos", "Deportes y movimiento", "Salud y bienestar", "Tecnología cotidiana", "En el restaurante",
    "Música y artistas", "El mundo natural", "Comparar y elegir", "Normas y consejos", "Experiencias geniales",
    "En el aeropuerto", "Celebraciones", "Trabajos del futuro", "Historias del pasado", "Misión A2"] },
  B1: { label: "Aventurero", color: "#f59e0b", topics: [
    "Cuenta tu historia", "Noticias sorprendentes", "Sueños y objetivos", "Cuidemos el planeta", "Cine y personajes",
    "Problemas y soluciones", "Viajar con confianza", "Una vida saludable", "El poder de internet", "Cultura alrededor del mundo",
    "Expresar opiniones", "Tomar decisiones", "Relatos de misterio", "Ciencia en acción", "Aprender a aprender",
    "Trabajo en equipo", "Inventos que cambiaron todo", "Debates amistosos", "Proyecto: mi podcast", "Misión B1"] },
  B2: { label: "Comunicador", color: "#ef476f", topics: [
    "Ideas que inspiran", "Comunicación sin fronteras", "El futuro de las ciudades", "Historias entre líneas", "Decisiones difíciles",
    "Arte que provoca", "Medios y mensajes", "Hábitos sostenibles", "Liderazgo positivo", "Ciencia ficción",
    "Defender una postura", "Humor en inglés", "Cambios sociales", "Mitos y leyendas", "Pensamiento crítico",
    "Presentaciones memorables", "Escritura creativa", "Entrevistas y reportajes", "Proyecto: charla TED", "Misión B2"] },
  C1: { label: "Maestro del inglés", color: "#118ab2", topics: [
    "Matices del lenguaje", "Persuadir con ideas", "Voces de la literatura", "Retos globales", "Innovación y ética",
    "Lenguaje de los medios", "Historias complejas", "Debate avanzado", "Comunicación intercultural", "Argumentos sólidos",
    "Expresiones naturales", "Análisis de discursos", "Narrativa y estilo", "Ideas abstractas", "Ironía y tono",
    "Investigación en inglés", "Negociación", "Ensayo de opinión", "Proyecto final", "Gran misión C1"] }
};

const levels = Object.keys(levelData) as Level[];
const levelVisuals: Record<Level, { icon: string; motto: string; stage: string; secondary: string }> = {
  A1: { icon: "🌱", motto: "Empieza a hablar", stage: "BASE", secondary: "#9b8cf6" },
  A2: { icon: "🧭", motto: "Explora situaciones reales", stage: "EXPLORA", secondary: "#38d1bd" },
  B1: { icon: "🏔️", motto: "Conecta y desarrolla tus ideas", stage: "AVANZA", secondary: "#f7bd52" },
  B2: { icon: "🎙️", motto: "Argumenta con confianza", stage: "COMUNICA", secondary: "#ff7b9a" },
  C1: { icon: "💎", motto: "Domina cada matiz", stage: "DOMINIO", secondary: "#3dcae8" }
};
const icons = ["👋", "🎧", "🎨", "⚡", "🌟", "🧩", "🎯", "🚀"];
const summaries: Record<Level, string> = {
  A1: "Construye una base sólida con palabras y frases cotidianas.",
  A2: "Habla de experiencias, planes y situaciones conocidas.",
  B1: "Conversa con seguridad y entiende ideas más amplias.",
  B2: "Expresa opiniones con fluidez y argumenta tus ideas.",
  C1: "Domina matices, estilos y conversaciones complejas."
};
const allLessons: Lesson[] = levels.flatMap((level) => levelData[level].topics.map((title, index) => ({
  id: `${level.toLowerCase()}-${index + 1}`, level, number: index + 1, title,
  summary: summaries[level], icon: icons[index % icons.length]
})));
const courseByLevel = { A1: a1Course, A2: a2Course, B1: b1Course, B2: b2Course, C1: c1Course };

const practiceCardBank = [
  { word: "Curious", translation: "Curioso/a", example: "I'm curious about how things work.", emoji: "🔎" },
  { word: "Brave", translation: "Valiente", example: "She was brave enough to try again.", emoji: "🦁" },
  { word: "Improve", translation: "Mejorar", example: "A little practice every day will help you improve.", emoji: "📈" },
  { word: "Journey", translation: "Viaje / recorrido", example: "Learning English is an exciting journey.", emoji: "🗺️" },
  { word: "Challenge", translation: "Reto", example: "This challenge looks difficult, but I can do it.", emoji: "🎯" },
  { word: "Discover", translation: "Descubrir", example: "We discover new words in every lesson.", emoji: "✨" },
  { word: "Confident", translation: "Seguro/a", example: "I feel more confident when I speak English.", emoji: "🚀" },
  { word: "Practice", translation: "Practicar", example: "Let's practice this sentence together.", emoji: "🎧" },
  { word: "Achievement", translation: "Logro", example: "Completing A1 is a great achievement.", emoji: "🏆" },
  { word: "Keep going", translation: "Sigue adelante", example: "Keep going — you're making great progress!", emoji: "⚡" },
  { word: "Kind", translation: "Amable", example: "It is important to be kind to other people.", emoji: "💛" },
  { word: "Healthy", translation: "Saludable", example: "A healthy breakfast gives you energy.", emoji: "🍎" },
  { word: "Explore", translation: "Explorar", example: "We love to explore new places together.", emoji: "🧭" },
  { word: "Friendly", translation: "Amigable", example: "Our new teacher is friendly and helpful.", emoji: "👋" },
  { word: "Imagine", translation: "Imaginar", example: "Imagine what cities will look like in the future.", emoji: "💭" },
  { word: "Choose", translation: "Elegir", example: "You can choose the activity you like most.", emoji: "✅" },
  { word: "Remember", translation: "Recordar", example: "I always remember to bring my notebook.", emoji: "🧠" },
  { word: "Amazing", translation: "Increíble", example: "The view from the mountain was amazing.", emoji: "🏔️" },
  { word: "Helpful", translation: "Servicial / útil", example: "This guide is helpful for new students.", emoji: "🤝" },
  { word: "Create", translation: "Crear", example: "Let's create a story with these new words.", emoji: "🎨" },
  { word: "Careful", translation: "Cuidadoso/a", example: "Be careful when you cross the street.", emoji: "🚦" },
  { word: "Decide", translation: "Decidir", example: "We need to decide where to go this weekend.", emoji: "🛤️" },
  { word: "Believe", translation: "Creer", example: "Believe in yourself and keep practising.", emoji: "🌟" },
  { word: "Different", translation: "Diferente", example: "Every person learns in a different way.", emoji: "🌈" },
  { word: "Together", translation: "Juntos", example: "We can solve the problem together.", emoji: "🧩" },
  { word: "Possible", translation: "Posible", example: "With practice, anything is possible.", emoji: "🚀" },
  { word: "Knowledge", translation: "Conocimiento", example: "Reading is a great way to build knowledge.", emoji: "📚" },
  { word: "Support", translation: "Apoyar", example: "Good friends support each other.", emoji: "🙌" },
  { word: "Opportunity", translation: "Oportunidad", example: "This course is an opportunity to learn something new.", emoji: "🚪" },
  { word: "Progress", translation: "Progreso", example: "Your progress grows with every small step.", emoji: "🌱" }
];

const usefulPhraseBank = [
  { phrase: "How are you doing today?", translation: "¿Cómo estás hoy?", emoji: "👋" },
  { phrase: "Could you say that again, please?", translation: "¿Podrías repetir eso, por favor?", emoji: "🔁" },
  { phrase: "I don't understand this word yet.", translation: "Todavía no entiendo esta palabra.", emoji: "🤔" },
  { phrase: "What does this expression mean?", translation: "¿Qué significa esta expresión?", emoji: "💬" },
  { phrase: "Can you speak a little more slowly?", translation: "¿Puedes hablar un poco más despacio?", emoji: "🐢" },
  { phrase: "I'd like to practise my English.", translation: "Me gustaría practicar mi inglés.", emoji: "🎧" },
  { phrase: "A little practice every day will help you improve.", translation: "Un poco de práctica diaria te ayudará a mejorar.", emoji: "📈" },
  { phrase: "Learning English is an exciting journey.", translation: "Aprender inglés es un viaje emocionante.", emoji: "🗺️" },
  { phrase: "This challenge looks difficult, but I can do it.", translation: "Este reto parece difícil, pero puedo hacerlo.", emoji: "🎯" },
  { phrase: "I'm ready to learn something new.", translation: "Estoy listo para aprender algo nuevo.", emoji: "✨" },
  { phrase: "Let me think about it for a moment.", translation: "Déjame pensarlo un momento.", emoji: "💭" },
  { phrase: "That's a really interesting idea.", translation: "Esa es una idea muy interesante.", emoji: "💡" },
  { phrase: "What are you going to do this weekend?", translation: "¿Qué vas a hacer este fin de semana?", emoji: "📅" },
  { phrase: "I usually get up at seven o'clock.", translation: "Normalmente me levanto a las siete.", emoji: "⏰" },
  { phrase: "The weather is perfect for a walk.", translation: "El clima está perfecto para caminar.", emoji: "☀️" },
  { phrase: "Could you help me find the station?", translation: "¿Podrías ayudarme a encontrar la estación?", emoji: "🚉" },
  { phrase: "I'd like a glass of water, please.", translation: "Quisiera un vaso de agua, por favor.", emoji: "🥤" },
  { phrase: "In my opinion, this is the best option.", translation: "En mi opinión, esta es la mejor opción.", emoji: "⭐" },
  { phrase: "I've never tried that before.", translation: "Nunca he intentado eso antes.", emoji: "🆕" },
  { phrase: "It was great talking to you.", translation: "Fue genial hablar contigo.", emoji: "😊" },
  { phrase: "Don't worry, we can try again.", translation: "No te preocupes, podemos intentarlo otra vez.", emoji: "💪" },
  { phrase: "I agree with you up to a point.", translation: "Estoy de acuerdo contigo hasta cierto punto.", emoji: "⚖️" },
  { phrase: "There are several ways to solve this problem.", translation: "Hay varias formas de resolver este problema.", emoji: "🧩" },
  { phrase: "The more you practise, the easier it becomes.", translation: "Cuanto más practicas, más fácil se vuelve.", emoji: "🌱" }
];

function shuffledWithSeed<T>(items: T[], seed: number) {
  const result = [...items];
  let value = Math.abs(seed) + 1;
  for (let index = result.length - 1; index > 0; index -= 1) {
    value = (value * 9301 + 49297) % 233280;
    const target = Math.floor((value / 233280) * (index + 1));
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
}

const listeningChallenges = [
  { phrase: "I usually have breakfast before school.", options: ["I usually have breakfast before school.", "I always have dinner after school.", "I rarely walk to school."], translation: "Normalmente desayuno antes de la escuela." },
  { phrase: "Could you tell me where the library is?", options: ["Can you open the library?", "Could you tell me where the library is?", "Do you work at the library?"], translation: "¿Podrías decirme dónde está la biblioteca?" },
  { phrase: "We are going to visit our grandparents this weekend.", options: ["We visited our grandparents last weekend.", "Our grandparents are visiting today.", "We are going to visit our grandparents this weekend."], translation: "Vamos a visitar a nuestros abuelos este fin de semana." },
  { phrase: "Learning a language takes time and patience.", options: ["Learning a language takes time and patience.", "Speaking quickly is always important.", "Languages are easy to forget."], translation: "Aprender un idioma requiere tiempo y paciencia." },
  { phrase: "In my opinion, the book was better than the film.", options: ["The film and the book were the same.", "In my opinion, the book was better than the film.", "I haven't watched the film yet."], translation: "En mi opinión, el libro fue mejor que la película." },
  { phrase: "Although it was raining, we decided to continue.", options: ["We stopped because it started raining.", "It rained after we arrived.", "Although it was raining, we decided to continue."], translation: "Aunque estaba lloviendo, decidimos continuar." }
];
export default function Home() {
  const [completed, setCompleted] = useState<string[]>([]);
  const [progressReady, setProgressReady] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<Level>("A1");
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [lessonStep, setLessonStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedback, setFeedback] = useState<"idle" | "correct" | "wrong">("idle");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeView, setActiveView] = useState<"home" | "route" | "practice">("home");
  const [studentName, setStudentName] = useState("Explorador");
  const [nameDraft, setNameDraft] = useState("Explorador");
  const [editingName, setEditingName] = useState(false);
  const [practiceCardIndex, setPracticeCardIndex] = useState(0);
  const [cardFlipped, setCardFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState<string[]>([]);
  const [practiceXp, setPracticeXp] = useState(0);
  const [practiceReady, setPracticeReady] = useState(false);
  const [listeningIndex, setListeningIndex] = useState(0);
  const [listeningAnswer, setListeningAnswer] = useState("");
  const [listeningResult, setListeningResult] = useState<"correct" | "wrong" | null>(null);
  const [speechMessage, setSpeechMessage] = useState("Toca el botón para escuchar");
  const [voiceAccent, setVoiceAccent] = useState<"US" | "UK">("US");
  const [cardMixSeed, setCardMixSeed] = useState(1);
  const [phraseMixSeed, setPhraseMixSeed] = useState(11);

  useEffect(() => {
    const saved = window.localStorage.getItem("brightup-progress-v2");
    if (saved) { try { setCompleted(JSON.parse(saved)); } catch { /* empieza desde cero */ } }
    setProgressReady(true);
  }, []);
  useEffect(() => {
    if (progressReady) window.localStorage.setItem("brightup-progress-v2", JSON.stringify(completed));
  }, [completed, progressReady]);
  useEffect(() => {
    const savedName = window.localStorage.getItem("brightup-student-name");
    if (savedName) { setStudentName(savedName); setNameDraft(savedName); }
  }, []);
  useEffect(() => {
    const savedCards = window.localStorage.getItem("brightup-mastered-cards");
    const savedXp = window.localStorage.getItem("brightup-practice-xp");
    if (savedCards) { try { setMasteredCards(JSON.parse(savedCards)); } catch { /* empieza sin tarjetas */ } }
    if (savedXp) setPracticeXp(Number(savedXp) || 0);
    setPracticeReady(true);
  }, []);
  useEffect(() => {
    const today = new Date();
    const dailySeed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    setCardMixSeed(dailySeed);
    setPhraseMixSeed(dailySeed + 41);
  }, []);
  useEffect(() => {
    if (!practiceReady) return;
    window.localStorage.setItem("brightup-mastered-cards", JSON.stringify(masteredCards));
    window.localStorage.setItem("brightup-practice-xp", String(practiceXp));
  }, [masteredCards, practiceXp, practiceReady]);

  const visibleLessons = useMemo(() => allLessons.filter((lesson) => lesson.level === selectedLevel), [selectedLevel]);
  const totalProgress = Math.round((completed.length / allLessons.length) * 100);
  const a1Completed = completed.filter((id) => id.startsWith("a1-")).length;
  const selectedLevelCompleted = completed.filter((id) => id.startsWith(selectedLevel.toLowerCase())).length;
  const studentInitials = studentName.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]?.toUpperCase()).join("") || "BU";
  const activePracticeCards = useMemo(() => shuffledWithSeed(practiceCardBank, cardMixSeed).slice(0, 10), [cardMixSeed]);
  const activeUsefulPhrases = useMemo(() => shuffledWithSeed(usefulPhraseBank, phraseMixSeed).slice(0, 3), [phraseMixSeed]);
  const activeListeningChallenges = useMemo(() => shuffledWithSeed(listeningChallenges, phraseMixSeed + 19), [phraseMixSeed]);
  const currentPracticeCard = activePracticeCards[practiceCardIndex];
  const currentListening = activeListeningChallenges[listeningIndex];
  const courseCompleted = allLessons.every((lesson) => completed.includes(lesson.id));
  const nextLesson = allLessons.find((lesson) => !completed.includes(lesson.id)) ?? null;
  const activeContent = activeLesson ? courseByLevel[activeLesson.level][activeLesson.number - 1] : null;
  const activeActivity = activeContent && lessonStep > 0 ? activeContent.activities[lessonStep - 1] : null;
  const displayedOptions = activeActivity && activeLesson
    ? (() => {
        const offset = (activeLesson.number * 2 + lessonStep + levels.indexOf(activeLesson.level)) % activeActivity.options.length;
        return [...activeActivity.options.slice(offset), ...activeActivity.options.slice(0, offset)];
      })()
    : [];
  const levelUnlocked = (level: Level) => {
    const index = levels.indexOf(level);
    if (index === 0) return true;
    const previous = levels[index - 1].toLowerCase();
    return Array.from({ length: 20 }, (_, i) => `${previous}-${i + 1}`).every((id) => completed.includes(id));
  };
  const lessonUnlocked = (lesson: Lesson) => lesson.number === 1
    ? levelUnlocked(lesson.level)
    : levelUnlocked(lesson.level) && completed.includes(`${lesson.level.toLowerCase()}-${lesson.number - 1}`);
  const openLesson = (lesson: Lesson) => {
    if (!lessonUnlocked(lesson)) return;
    setActiveLesson(lesson); setLessonStep(0); setSelectedAnswer(""); setFeedback("idle");
  };
  const checkAnswer = () => {
    if (!activeLesson || !activeContent || !activeActivity || !selectedAnswer) return;
    const isCorrect = selectedAnswer === activeActivity.answer;
    setFeedback(isCorrect ? "correct" : "wrong");
    const isFinalActivity = lessonStep === activeContent.activities.length;
    if (isCorrect && isFinalActivity && !completed.includes(activeLesson.id)) {
      setCompleted((current) => [...current, activeLesson.id]);
    }
  };
  const continueLesson = () => {
    if (!activeLesson || !activeContent) return;
    if (lessonStep === 0 || lessonStep < activeContent.activities.length) {
      setLessonStep((step) => step + 1); setSelectedAnswer(""); setFeedback("idle"); return;
    }
    const lessonIndex = allLessons.findIndex((lesson) => lesson.id === activeLesson.id);
    const following = allLessons[lessonIndex + 1];
    if (following) { setSelectedLevel(following.level); setActiveLesson(following); setLessonStep(0); setSelectedAnswer(""); setFeedback("idle"); }
    else setActiveLesson(null);
  };
  const saveStudentName = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cleanName = nameDraft.trim().slice(0, 24);
    if (!cleanName) return;
    setStudentName(cleanName);
    setNameDraft(cleanName);
    window.localStorage.setItem("brightup-student-name", cleanName);
    setEditingName(false);
  };
  const showHome = () => {
    setActiveView("home"); setMenuOpen(false);
    window.history.replaceState(null, "", "#inicio");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const showRoute = (section = "ruta") => {
    setActiveView("route"); setMenuOpen(false);
    window.history.replaceState(null, "", `#${section}`);
    window.setTimeout(() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" }), 0);
  };
  const showPractice = () => {
    setActiveView("practice"); setMenuOpen(false);
    window.history.replaceState(null, "", "#practica");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const speakEnglish = (text: string, mode: "word" | "sentence" = "sentence") => {
    if (!("speechSynthesis" in window)) { setSpeechMessage("El audio no está disponible en este navegador"); return; }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = voiceAccent === "US" ? "en-US" : "en-GB";
    utterance.rate = mode === "word" ? 0.72 : 0.84;
    utterance.pitch = 1;
    const voices = window.speechSynthesis.getVoices().filter((voice) => voice.lang.toLowerCase().startsWith(voiceAccent === "US" ? "en-us" : "en-gb"));
    const preferredNames = voiceAccent === "US"
      ? [/Aria/i, /Jenny/i, /Ava/i, /Samantha/i, /Google US English/i, /Zira/i]
      : [/Sonia/i, /Libby/i, /Ryan/i, /Daniel/i, /Google UK English/i, /Hazel/i];
    let naturalVoice: SpeechSynthesisVoice | undefined;
    for (const pattern of preferredNames) { naturalVoice = voices.find((voice) => pattern.test(voice.name)); if (naturalVoice) break; }
    if (naturalVoice ?? voices[0]) utterance.voice = naturalVoice ?? voices[0];
    utterance.onstart = () => setSpeechMessage(mode === "word" ? `Escuchando “${text}”…` : "Escuchando la frase completa…");
    utterance.onend = () => setSpeechMessage("Puedes escucharlo otra vez");
    window.speechSynthesis.speak(utterance);
  };
  const movePracticeCard = (direction: number) => {
    setPracticeCardIndex((index) => (index + direction + activePracticeCards.length) % activePracticeCards.length);
    setCardFlipped(false);
  };
  const mixPracticeCards = () => {
    setCardMixSeed((seed) => seed + 97);
    setPracticeCardIndex(0); setCardFlipped(false); setSpeechMessage("Nueva colección preparada");
  };
  const mixUsefulPhrases = () => {
    setPhraseMixSeed((seed) => seed + 53);
    setListeningIndex(0); setListeningAnswer(""); setListeningResult(null); setSpeechMessage("Nuevas frases preparadas");
  };
  const toggleMasteredCard = () => {
    setMasteredCards((cards) => cards.includes(currentPracticeCard.word)
      ? cards.filter((word) => word !== currentPracticeCard.word)
      : [...cards, currentPracticeCard.word]);
  };
  const chooseListeningAnswer = (option: string) => {
    setListeningAnswer(option);
    const correct = option === currentListening.phrase;
    if (correct && listeningResult !== "correct") setPracticeXp((xp) => xp + 5);
    setListeningResult(correct ? "correct" : "wrong");
  };
  const nextListeningChallenge = () => {
    setListeningIndex((index) => (index + 1) % activeListeningChallenges.length);
    setListeningAnswer(""); setListeningResult(null); setSpeechMessage("Toca el botón para escuchar");
  };

  return (
    <main className="app-shell">
      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <a className="brand" href="#inicio" onClick={(event) => { event.preventDefault(); showHome(); }} aria-label="BrightUp inicio">
          <span className="brand-mark">B</span><span>Bright<span>Up</span></span>
        </a>
        <nav className="main-nav" aria-label="Navegación principal">
          <button className={activeView === "home" ? "active" : ""} onClick={showHome}><span>⌂</span> Inicio</button>
          <button className={activeView === "route" ? "active" : ""} onClick={() => showRoute("ruta")}><span>♢</span> Mi ruta</button>
          <button className={activeView === "practice" ? "active" : ""} onClick={showPractice}><span>◎</span> Práctica</button>
          <button onClick={() => showRoute("logros")}><span>☆</span> Logros</button>
        </nav>
        <div className="sidebar-card"><span className="mini-label">RACHA ACTUAL</span><strong><span className="flame">🔥</span> 5 días</strong><p>¡Una lección más y rompes tu récord!</p></div>
        <div className="profile"><div className="avatar">{studentInitials}</div><div><strong>{studentName}</strong><span>Nivel A1 · Liga Sol</span></div><button onClick={() => setEditingName(true)} aria-label="Editar nombre">•••</button></div>
      </aside>

      <section className="content" id="inicio">
        <header className="topbar">
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">☰</button>
          <div className="welcome"><span>TU ACADEMIA DE INGLÉS</span><h1>¡Hola, {studentName}! <i>👋</i></h1></div>
          <div className="top-actions"><button className="streak-pill" aria-label="Racha de 5 días">🔥 <strong>5</strong></button><button className="notification" aria-label="Notificaciones">♢<span /></button><div className="avatar small">{studentInitials}</div></div>
        </header>

        {activeView === "home" ? <>
        <section className="academy-home" aria-labelledby="academy-title">
          <div className="academy-copy">
            <span className="eyebrow">BIENVENIDO A BRIGHTUP</span>
            <h2 id="academy-title">Tu academia de inglés, simple y a tu ritmo.</h2>
            <p>Practica con lecciones cortas, supera retos y guarda cada paso de tu avance. Puedes cerrar y volver cuando quieras: tu ruta te estará esperando.</p>
            <div className="academy-benefits"><span>✓ 100 lecciones</span><span>✓ Práctica guiada</span><span>✓ Progreso guardado</span></div>
            <button className="academy-link" onClick={() => showRoute("ruta")}>Explorar mi ruta <span>→</span></button>
          </div>
          <div className="name-card">
            <div className="name-card-top"><div className="avatar name-avatar">{studentInitials}</div><div className="mini-progress"><strong>{completed.length}</strong><span>de 100</span></div></div>
            <span className="name-label">TU NOMBRE EN BRIGHTUP</span>
            {editingName ? <form onSubmit={saveStudentName}>
              <label htmlFor="student-name">¿Cómo quieres que te llamemos?</label>
              <input id="student-name" value={nameDraft} onChange={(event) => setNameDraft(event.target.value)} maxLength={24} autoFocus placeholder="Escribe tu nombre" />
              <div><button type="submit">Guardar</button><button type="button" onClick={() => { setNameDraft(studentName); setEditingName(false); }}>Cancelar</button></div>
            </form> : <>
              <h3>{studentName}</h3>
              <button className="edit-name" onClick={() => setEditingName(true)}>✎ Editar nombre</button>
              <small>Tu nombre y progreso se guardan en este dispositivo.</small>
            </>}
          </div>
        </section>

        <section className="home-overview" aria-label="Cómo funciona BrightUp">
          <article className="how-card">
            <div className="home-section-title"><span className="eyebrow dark">EMPIEZA EN TRES PASOS</span><h2>Aprender aquí es muy fácil</h2></div>
            <div className="how-steps">
              <div><span>1</span><i>🎯</i><strong>Elige tu lección</strong><p>Tu ruta te muestra siempre cuál sigue.</p></div>
              <div><span>2</span><i>💬</i><strong>Practica jugando</strong><p>Aprende con ejemplos y retos cortos.</p></div>
              <div><span>3</span><i>🌟</i><strong>Mira cómo avanzas</strong><p>Cada logro queda guardado automáticamente.</p></div>
            </div>
          </article>
          <article className="home-progress-card">
            <div className="progress-orb" style={{ background: `conic-gradient(#6c5ce7 ${totalProgress * 3.6}deg, #eceaf8 0deg)` }}><span><strong>{totalProgress}%</strong><small>completado</small></span></div>
            <div><span className="eyebrow dark">TU AVANCE</span><h3>{completed.length === 0 ? "Tu aventura empieza hoy" : courseCompleted ? "¡Completaste BrightUp!" : "¡Sigue con esa energía!"}</h3><p>{courseCompleted ? "Terminaste las 100 lecciones. Sigue practicando para mantener tu inglés activo." : `${completed.length} de 100 lecciones completadas`}</p></div>
            <button onClick={() => courseCompleted ? showPractice() : showRoute("ruta")}>{completed.length === 0 ? "Comenzar A1" : courseCompleted ? "Seguir practicando" : "Continuar mi ruta"} <span>→</span></button>
          </article>
        </section>
        </> : activeView === "practice" ? <>
        <section className="practice-page" id="practica">
          <div className="practice-hero">
            <div>
              <span className="eyebrow">LABORATORIO DE INGLÉS</span>
              <h2>Escucha, juega y haz que el inglés se quede.</h2>
              <p>Practica sin presión con tarjetas, pronunciación y pequeños retos de oído. Cada sesión suma confianza.</p>
              <div className="practice-stats"><span><strong>{masteredCards.length}</strong> tarjetas dominadas</span><span><strong>{practiceXp}</strong> XP de práctica</span><span><strong>{practiceCardBank.length}</strong> palabras en el banco</span></div>
              <div className="voice-selector"><span>Elige pronunciación</span><button className={voiceAccent === "US" ? "active" : ""} onClick={() => setVoiceAccent("US")}>🇺🇸 Natural US</button><button className={voiceAccent === "UK" ? "active" : ""} onClick={() => setVoiceAccent("UK")}>🇬🇧 British</button></div>
            </div>
            <div className="sound-world" aria-hidden="true"><span>🎧</span><i className="wave w1" /><i className="wave w2" /><i className="wave w3" /><b>Hello!</b></div>
          </div>

          <div className="practice-grid">
            <article className="flashcard-lab">
              <header><div><span className="eyebrow dark">TARJETAS EN INGLÉS</span><h3>Palabra del momento</h3></div><div className="bank-actions"><span>{practiceCardIndex + 1} / {activePracticeCards.length}</span><button onClick={mixPracticeCards}>↻ Mezclar</button></div></header>
              <div className="card-stage">
                <div className={`english-card ${cardFlipped ? "flipped" : ""}`} role="button" tabIndex={0} onClick={() => setCardFlipped(!cardFlipped)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") setCardFlipped(!cardFlipped); }} aria-label="Voltear tarjeta">
                  {!cardFlipped ? <div className="card-front"><span>{currentPracticeCard.emoji}</span><small>ENGLISH</small><h2>{currentPracticeCard.word}</h2><p>Toca para descubrir el significado</p></div> : <div className="card-back"><small>EN ESPAÑOL</small><h2>{currentPracticeCard.translation}</h2><p>“{currentPracticeCard.example}”</p><button className="example-audio" onKeyDown={(event) => event.stopPropagation()} onClick={(event) => { event.stopPropagation(); speakEnglish(currentPracticeCard.example, "sentence"); }}>🔊 Escuchar frase completa</button><span>Toca fuera del botón para volver</span></div>}
                </div>
              </div>
              <div className="card-controls"><button onClick={() => movePracticeCard(-1)} aria-label="Tarjeta anterior">←</button><button className="listen-word" onClick={() => speakEnglish(currentPracticeCard.word, "word")}>🔊 Escuchar “{currentPracticeCard.word}”</button><button onClick={() => movePracticeCard(1)} aria-label="Tarjeta siguiente">→</button></div>
              <button className={`master-card ${masteredCards.includes(currentPracticeCard.word) ? "mastered" : ""}`} onClick={toggleMasteredCard}>{masteredCards.includes(currentPracticeCard.word) ? "✓ Ya la dominas" : "☆ Marcar como aprendida"}</button>
            </article>

            <article className="listening-lab">
              <header><div><span className="eyebrow dark">RETO DE ESCUCHA</span><h3>¿Qué frase escuchaste?</h3></div><span>+5 XP</span></header>
              <div className="listen-zone"><button className={speechMessage.startsWith("Escuchando") ? "playing" : ""} onClick={() => speakEnglish(currentListening.phrase)} aria-label="Reproducir frase en inglés">🔊<i /><i /><i /></button><p>{speechMessage}</p><small>Escúchala las veces que necesites</small></div>
              <div className="listening-options">{currentListening.options.map((option, index) => <button key={option} onClick={() => chooseListeningAnswer(option)} className={`${listeningAnswer === option ? "selected" : ""} ${listeningResult && option === currentListening.phrase ? "correct" : ""}`}><span>{index + 1}</span>{option}</button>)}</div>
              {listeningResult && <div className={`listening-feedback ${listeningResult}`}><span>{listeningResult === "correct" ? "✓" : "↻"}</span><p><strong>{listeningResult === "correct" ? "¡Lo escuchaste muy bien!" : "Casi. Escucha una vez más."}</strong>{listeningResult === "correct" ? currentListening.translation : "Presta atención al inicio y al final de la frase."}</p></div>}
              {listeningResult === "correct" && <button className="next-listening" onClick={nextListeningChallenge}>Siguiente audio →</button>}
            </article>
          </div>

          <section className="quick-phrases">
            <div className="quick-phrases-head"><div className="home-section-title"><span className="eyebrow dark">PRONUNCIA CONMIGO</span><h2>Tres frases útiles para hoy</h2></div><button onClick={mixUsefulPhrases}>↻ Cambiar frases</button></div>
            <div>{activeUsefulPhrases.map((item) => <article key={item.phrase}><span>{item.emoji}</span><div><strong>{item.phrase}</strong><small>{item.translation}</small></div><button onClick={() => speakEnglish(item.phrase)} aria-label={`Escuchar ${item.phrase}`}>🔊</button></article>)}</div>
          </section>
        </section>
        </> : <>

        <section className="hero-grid">
          <div className={`mission-card ${courseCompleted ? "course-complete" : ""}`} style={{ background: courseCompleted ? "linear-gradient(125deg,#008f7e,#32c6ad)" : nextLesson ? `linear-gradient(125deg,${levelData[nextLesson.level].color},${levelVisuals[nextLesson.level].secondary})` : undefined }}>
            {courseCompleted ? <div className="mission-copy"><span className="eyebrow">RUTA COMPLETADA</span><h2>¡Dominaste las 100 lecciones!</h2><p>Terminaste los niveles A1, A2, B1, B2 y C1. Mantén lo aprendido fresco con una sesión de práctica.</p>
              <div className="mission-meta"><span>✓ 5 niveles</span><span>⚡ 2000 XP</span><span>◆ 100 lecciones</span></div>
              <button className="primary-button" onClick={showPractice}>Ir a Práctica <span>→</span></button>
            </div> : nextLesson && <div className="mission-copy"><span className="eyebrow">TU SIGUIENTE MISIÓN</span><h2>{nextLesson.title}</h2><p>{nextLesson.summary}</p>
              <div className="mission-meta"><span>◷ 8 min</span><span>⚡ +20 XP</span><span>◆ Lección {nextLesson.number}</span></div>
              <button className="primary-button" onClick={() => { setSelectedLevel(nextLesson.level); openLesson(nextLesson); }}>Continuar aprendiendo <span>→</span></button>
            </div>}
            <div className="mission-art" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="planet">🌍</div><div className="rocket">🚀</div><span className="star s1">✦</span><span className="star s2">✦</span><span className="star s3">✦</span></div>
          </div>
          <aside className="daily-card" id="practica">
            <div className="daily-head"><span><i>⚡</i><strong>Meta diaria</strong></span><b>60%</b></div><div className="daily-progress"><span /></div><div className="xp-row"><span>60 XP</span><span>100 XP</span></div>
            <div className="week-row">{["L","M","X","J","V","S","D"].map((day, index) => <div key={day}><span className={index < 3 ? "done" : index === 3 ? "today" : ""}>{index < 3 ? "✓" : day}</span><small>{day}</small></div>)}</div>
            <p>¡Vas genial! Completa una lección para alcanzar tu meta.</p>
          </aside>
        </section>

        <section className="ruta-section" id="ruta">
          {/* ── Encabezado ── */}
          <div className="ruta-head">
            <div>
              <span className="eyebrow dark">TU CAMINO</span>
              <h2>Ruta de aprendizaje</h2>
            </div>
            <div className="ruta-progress-row">
              <span className="ruta-progress-label">{completed.length}/100</span>
              <div className="ruta-bar" role="progressbar" aria-valuenow={totalProgress} aria-valuemin={0} aria-valuemax={100}>
                <i style={{ width: `${totalProgress}%` }} />
              </div>
              <span className="ruta-progress-pct">{totalProgress}%</span>
            </div>
          </div>

          {/* ── Selector de nivel ── */}
          <div className="level-rail" role="tablist" aria-label="Niveles de inglés">
            {levels.map((level) => {
              const unlocked = levelUnlocked(level);
              const count = completed.filter((id) => id.startsWith(level.toLowerCase())).length;
              const pct = Math.round((count / 20) * 100);
              return (
                <button
                  key={level}
                  className={`lrail-item ${selectedLevel === level ? "active" : ""} ${!unlocked ? "locked" : ""}`}
                  onClick={() => unlocked && setSelectedLevel(level)}
                  style={{ "--lc": levelData[level].color, "--ls": levelVisuals[level].secondary } as React.CSSProperties}
                  role="tab"
                  aria-selected={selectedLevel === level}
                  aria-label={`${level}, ${levelData[level].label}${!unlocked ? ", bloqueado" : ""}`}
                >
                  <span className="lrail-badge">{unlocked ? levelVisuals[level].icon : "◆"}</span>
                  <div className="lrail-meta">
                    <strong>{level}</strong>
                    <small>{levelData[level].label}</small>
                  </div>
                  <div className="lrail-count">{unlocked ? `${count}/20` : "—"}</div>
                  <div className="lrail-bar"><i style={{ width: `${pct}%` }} /></div>
                </button>
              );
            })}
          </div>

          {/* ── Banner del nivel seleccionado ── */}
          <div
            className="level-banner"
            style={{ "--lc": levelData[selectedLevel].color, "--ls": levelVisuals[selectedLevel].secondary } as React.CSSProperties}
          >
            <div className="lb-deco" aria-hidden="true">{levelVisuals[selectedLevel].icon}</div>
            <div className="lb-emblem">{selectedLevel}</div>
            <div className="lb-copy">
              <span className="lb-stage">{levelVisuals[selectedLevel].stage} · NIVEL {selectedLevel}</span>
              <h3>{levelData[selectedLevel].label}</h3>
              <em>{levelVisuals[selectedLevel].motto}</em>
              <p>{summaries[selectedLevel]}</p>
            </div>
            <div className="lb-stats">
              <div className="lb-stat">
                <div className="lb-orb" style={{ background: `conic-gradient(rgba(255,255,255,.9) ${selectedLevelCompleted * 18}deg, rgba(255,255,255,.18) 0deg)` }}>
                  <span><strong>{selectedLevelCompleted}</strong><small>/20</small></span>
                </div>
                <p>lecciones</p>
              </div>
              <div className="lb-divider" />
              <div className="lb-kpi">
                <strong>{selectedLevelCompleted * 20}</strong>
                <span>XP ganados</span>
              </div>
              <div className="lb-kpi">
                <strong>{20 - selectedLevelCompleted}</strong>
                <span>restantes</span>
              </div>
            </div>
          </div>

          {/* ── Tarjetas de lección ── */}
          <div className="lesson-deck">
            {visibleLessons.map((lesson, index) => {
              const done = completed.includes(lesson.id);
              const unlocked = lessonUnlocked(lesson);
              const current = unlocked && !done && (index === 0 || completed.includes(visibleLessons[index - 1].id));
              return (
                <article
                  key={lesson.id}
                  className={`lesson-tile ${done ? "done" : ""} ${current ? "current" : ""} ${!unlocked ? "locked" : ""}`}
                  style={{ "--lc": levelData[selectedLevel].color, "--ls": levelVisuals[selectedLevel].secondary } as React.CSSProperties}
                >
                  <div className="lt-accent" />

                  <div className="lt-header">
                    <div className={`lt-num ${done ? "done" : current ? "cur" : ""}`}>
                      {done ? "✓" : !unlocked ? "◆" : lesson.number}
                    </div>
                    <span className="lt-label">LECCIÓN {String(lesson.number).padStart(2, "0")}</span>
                    {done && <span className="xp-tag">+20 XP</span>}
                    {current && <span className="current-badge">EN CURSO</span>}
                  </div>

                  <div className="lt-icon-row">
                    <div className="lt-icon">{unlocked ? lesson.icon : "·"}</div>
                    <div className="lt-text">
                      <h3>{lesson.title}</h3>
                      <p>{lesson.summary}</p>
                    </div>
                  </div>

                  <div className="lt-foot">
                    <button
                      onClick={() => openLesson(lesson)}
                      disabled={!unlocked}
                      className={`lt-btn ${current ? "primary" : done ? "review" : "default"}`}
                      aria-label={`${done ? "Repasar" : "Empezar"} ${lesson.title}`}
                    >
                      {done ? "Repasar" : current ? "Empezar" : unlocked ? "Ver" : "Bloqueado"}
                      {unlocked && <span className="lt-arrow">→</span>}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="achievements" id="logros"><div><span className="eyebrow dark">TUS LOGROS</span><h2>Pequeños pasos, grandes victorias</h2></div><div className="achievement-grid"><article><span>🔥</span><div><strong>En llamas</strong><p>5 días de práctica</p></div></article><article><span>⚡</span><div><strong>Con energía</strong><p>140 XP esta semana</p></div></article><article className={a1Completed >= 20 ? "" : "muted"}><span>🏆</span><div><strong>Maestro A1</strong><p>{a1Completed}/20 lecciones</p></div></article></div></section>
        </>}
      </section>

      {menuOpen && <button className="menu-overlay" onClick={() => setMenuOpen(false)} aria-label="Cerrar menú" />}
      {activeLesson && activeContent && <div className="lesson-overlay" role="dialog" aria-modal="true" aria-labelledby="lesson-title"><section className="lesson-modal">
        <header>
          <button onClick={() => setActiveLesson(null)} aria-label="Cerrar lección">×</button>
          <div className="modal-progress"><span style={{ width: `${((lessonStep + 1) / (activeContent.activities.length + 1)) * 100}%` }} /></div>
          <strong>{lessonStep + 1} / {activeContent.activities.length + 1}</strong>
        </header>
        <div className="modal-body">
          <div className="modal-kicker"><span>{activeLesson.icon}</span> LECCIÓN {activeLesson.number} · {activeLesson.level}</div>
          {lessonStep === 0 ? <>
            <h2 id="lesson-title">{activeLesson.title}</h2>
            <p className="lesson-objective">{activeContent.objective}</p>
            <div className="learn-card"><span>💡</span><div><small>EJEMPLO</small><strong>{activeContent.example}</strong></div></div>
            <div className="vocabulary-block"><small>PALABRAS CLAVE</small><div>{activeContent.vocabulary.map((word) => <span key={word}>{word}</span>)}</div></div>
          </> : activeActivity && <>
            <span className="challenge-count">RETO {lessonStep} DE {activeContent.activities.length}</span>
            <h2 id="lesson-title">{activeActivity.prompt}</h2>
            <div className="phrase-card"><button aria-label="Escuchar frase">🔊</button><strong>{activeActivity.phrase}</strong></div>
            <div className="answers">{displayedOptions.map((option, index) => <button key={option} onClick={() => { setSelectedAnswer(option); setFeedback("idle"); }} className={`${selectedAnswer === option ? "selected" : ""} ${feedback !== "idle" && option === activeActivity.answer ? "right" : ""}`}><span>{index + 1}</span>{option}</button>)}</div>
            {feedback === "wrong" && <p className="lesson-tip">💡 {activeActivity.tip}</p>}
          </>}
        </div>
        <footer className={feedback}>
          <div>
            {feedback === "correct" && <><span>✓</span><p><strong>¡Excelente!</strong>{lessonStep === activeContent.activities.length ? " Lección completada: +20 XP." : " Primer reto superado. Sigue así."}</p></>}
            {feedback === "wrong" && <><span>↻</span><p><strong>Casi lo tienes.</strong> Usa la pista y prueba otra opción.</p></>}
          </div>
          {lessonStep === 0
            ? <button className="primary-button" onClick={continueLesson}>Empezar práctica →</button>
            : feedback === "correct"
              ? <button className="primary-button" onClick={continueLesson}>{lessonStep === activeContent.activities.length ? activeLesson.number === 20 ? activeLesson.level === "C1" ? "Finalizar curso →" : `Desbloquear ${levels[levels.indexOf(activeLesson.level) + 1]} →` : "Siguiente lección →" : "Siguiente reto →"}</button>
              : <button className="primary-button" onClick={checkAnswer} disabled={!selectedAnswer}>Comprobar</button>}
        </footer>
      </section></div>}
    </main>
  );
}
