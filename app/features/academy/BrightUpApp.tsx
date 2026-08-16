"use client";

import A1LessonPage from "../../a1-lesson-page";
import { a1Roadmap } from "../../a1-expanded-course";
import { allLessons, a1Lessons } from "./course-data";
import { getStudentInitials } from "./course-utils";
import { useAcademyState } from "./hooks/use-academy-state";
import { useEnglishSpeech } from "./hooks/use-english-speech";
import { AppSidebar } from "./components/AppSidebar";
import { AppTopbar } from "./components/AppTopbar";
import { HomeView } from "./components/HomeView";
import { LearningRoute } from "./components/LearningRoute";
import { LegacyLessonModal } from "./components/LegacyLessonModal";
import { PracticeView } from "../practice/PracticeView";

export function BrightUpApp() {
  const academy = useAcademyState();
  const speech = useEnglishSpeech();
  const studentInitials = getStudentInitials(academy.studentName);

  if (academy.activeLesson?.level === "A1" && academy.activeA1Entry) {
    return <A1LessonPage
      key={academy.activeLesson.id}
      entry={academy.activeA1Entry}
      courseEntries={a1Roadmap}
      lessonNumber={academy.activeLesson.number}
      totalLessons={a1Lessons.length}
      onExit={academy.exitA1Lesson}
      onComplete={academy.completeA1Lesson}
      onNextLesson={academy.nextA1Lesson}
      onSpeak={speech.speakEnglish}
    />;
  }

  return <main className="app-shell">
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
    {academy.activeLesson && academy.activeContent && <LegacyLessonModal
      lesson={academy.activeLesson}
      content={academy.activeContent}
      activity={academy.activeActivity}
      step={academy.lessonStep}
      answer={academy.selectedAnswer}
      feedback={academy.feedback}
      options={academy.displayedOptions}
      onAnswer={academy.setSelectedAnswer}
      onFeedback={academy.setFeedback}
      onCheck={academy.checkLegacyAnswer}
      onContinue={academy.continueLegacyLesson}
      onClose={academy.closeLesson}
    />}
  </main>;
}
