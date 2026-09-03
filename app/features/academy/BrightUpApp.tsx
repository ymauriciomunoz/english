"use client";

import A1LessonPage from "../../a1-lesson-page";
import { courseRoadmaps } from "../../course-content";
import { allLessons } from "./course-data";
import { getStudentInitials } from "./course-utils";
import { useAcademyState } from "./hooks/use-academy-state";
import { useEnglishSpeech } from "./hooks/use-english-speech";
import { AppSidebar } from "./components/AppSidebar";
import { AppTopbar } from "./components/AppTopbar";
import { HomeView } from "./components/HomeView";
import { LearningRoute } from "./components/LearningRoute";
import { PracticeView } from "../practice/PracticeView";
import { AdSenseLoader } from "../adsense/AdSenseSlot";

export function BrightUpApp() {
  const academy = useAcademyState();
  const speech = useEnglishSpeech();
  const studentInitials = getStudentInitials(academy.studentName);
  const activeLesson = academy.activeLesson;

  if (activeLesson) {
    const level = activeLesson.level;
    const courseEntries = courseRoadmaps[level];
    if (!academy.activeCourseEntry) return <main className="a1-lesson-page"><section className="course-lesson-loading"><span>{academy.courseLessonError ? "!" : "B"}</span><h1>{academy.courseLessonError ? "No se pudo abrir la lección" : "Preparando tu lección…"}</h1><p>{academy.courseLessonError || `${level} · Lección ${activeLesson.number} · ${activeLesson.title}`}</p>{academy.courseLessonError && <button onClick={academy.exitCourseLesson}>Volver a mi ruta</button>}</section></main>;
    return <A1LessonPage
      key={activeLesson.id}
      level={level}
      entry={academy.activeCourseEntry}
      courseEntries={courseEntries}
      lessonNumber={activeLesson.number}
      totalLessons={courseEntries.length}
      onExit={academy.exitCourseLesson}
      onComplete={academy.completeCourseLesson}
      onNextLesson={academy.nextCourseLesson}
      onSpeak={speech.speakEnglish}
    />;
  }

  return <main className="app-shell">
    <AdSenseLoader />
    <AppSidebar
      activeView={academy.activeView}
      menuOpen={academy.menuOpen}
      studentName={academy.studentName}
      studentInitials={studentInitials}
      onHome={academy.showHome}
      onRoute={academy.showRoute}
      onPractice={academy.showPractice}
      onEditName={academy.startEditingName}
    />

    <section className="content" id="inicio">
      <AppTopbar studentName={academy.studentName} studentInitials={studentInitials} onMenu={() => academy.setMenuOpen((open) => !open)} />
      {academy.activeView === "home" && <HomeView
        studentName={academy.studentName}
        studentInitials={studentInitials}
        nameDraft={academy.nameDraft}
        editingName={academy.editingName}
        completedCount={academy.completed.length}
        totalLessons={allLessons.length}
        totalProgress={academy.totalProgress}
        courseCompleted={academy.courseCompleted}
        onNameDraft={academy.setNameDraft}
        onStartEditingName={academy.startEditingName}
        onCancelEditingName={academy.cancelEditingName}
        onSaveName={academy.saveStudentName}
        onRoute={() => academy.showRoute("ruta")}
        onPractice={academy.showPractice}
      />}
      {academy.activeView === "practice" && <PracticeView
        voiceAccent={speech.voiceAccent}
        speechMessage={speech.speechMessage}
        onAccentChange={speech.setVoiceAccent}
        onSpeechMessage={speech.setSpeechMessage}
        onSpeak={speech.speakEnglish}
      />}
      {academy.activeView === "route" && <LearningRoute
        completed={academy.completed}
        selectedLevel={academy.selectedLevel}
        onSelectLevel={academy.setSelectedLevel}
        onOpenLesson={academy.openLesson}
        onPractice={academy.showPractice}
      />}
    </section>

    {academy.menuOpen && <button className="menu-overlay" onClick={() => academy.setMenuOpen(false)} aria-label="Cerrar menú" />}
  </main>;
}
