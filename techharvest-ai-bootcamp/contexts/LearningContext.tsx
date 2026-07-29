"use client";

import {

  createContext,

  useContext,

  useEffect,

  useState,

  ReactNode,

} from "react";

import { getLearningCourse } from "@/lib/learning";

import {

  updateVideoProgress,

  completeLesson,

} from "@/services/progress.service";

import {

  LearningLesson,

  LearningModule,

  LearningResponse,

} from "@/types/learning";

interface LearningContextType {

  loading: boolean;

  course: LearningResponse | null;

  selectedLesson: LearningLesson | null;

  setSelectedLesson: (

    lesson: LearningLesson

  ) => void;

  goToNextLesson: () => void;

  goToPreviousLesson: () => void;

  saveProgress: (

    currentTime: number,

    duration: number

  ) => Promise<void>;

  completeCurrentLesson: () => Promise<void>;

  refreshCourse: () => Promise<void>;

}

const LearningContext =

  createContext<LearningContextType | null>(

    null

  );

interface Props {

  children: ReactNode;

  courseId: string;

}

export function LearningProvider({

  children,

  courseId,

}: Props) {

  const [

    course,

    setCourse,

  ] = useState<LearningResponse | null>(

    null

  );

  const [

    loading,

    setLoading,

  ] = useState(true);

  const [

    selectedLesson,

    setSelectedLesson,

  ] =

    useState<LearningLesson | null>(

      null

    );

  const loadCourse = async () => {

    const data =

      await getLearningCourse(
        
        courseId
        
      );

    setCourse(data);

    let lessonToResume:

      LearningLesson | null =

      null;

    for (const module of data.modules) {

      const lesson =

        module.lessons.find(

          lesson =>

            !lesson.progress?.completed

        );
      
      if (lesson) {

        lessonToResume =

          lesson;

        break;

      }

    }

    if (!lessonToResume) {

      const lastModule =

        data.modules[

          data.modules.length - 1

        ];

      lessonToResume =

        lastModule?.lessons[

          lastModule.lessons.length -

            1

        ] ?? null;

    }

setSelectedLesson(lessonToResume);

  };

  useEffect(() => {

    loadCourse().finally(() => {

      setLoading(false);

    });

  }, [courseId]);

  const allLessons =

    course?.modules.flatMap(

      (

        module: LearningModule

      ) => module.lessons

    ) ?? [];

  const currentIndex =

    allLessons.findIndex(

      lesson =>

        lesson._id ===

        selectedLesson?._id

    );

  const goToNextLesson = () => {

    if (

      currentIndex >= 0 &&

      currentIndex <

        allLessons.length - 1

    ) {

      setSelectedLesson(

        allLessons[currentIndex + 1]

      );

    }

  };

  const goToPreviousLesson = () => {

    if (currentIndex > 0) {

      setSelectedLesson(

        allLessons[currentIndex - 1]

      );

    }

  };

  const saveProgress = async (

    currentTime: number,

    duration: number

  ) => {

    if (!selectedLesson) return;

    await updateVideoProgress({

      lessonId:

        selectedLesson._id,

      currentTime,

      duration,

    });

  };

  const completeCurrentLesson =

    async () => {

      if (!selectedLesson)

        return;

      await completeLesson(

        selectedLesson._id

      );

      await loadCourse();

      goToNextLesson();

    };

  return (

    <LearningContext.Provider

      value={{

        loading,

        course,

        selectedLesson,

        setSelectedLesson,

        goToNextLesson,

        goToPreviousLesson,

        saveProgress,

        completeCurrentLesson,

        refreshCourse:

          loadCourse,

      }}

    >

      {children}

    </LearningContext.Provider>

  );

}

export function useLearning() {

  const context =

    useContext(

      LearningContext

    );

  if (!context) {

    throw new Error(

      "useLearning must be used inside LearningProvider"

    );

  }

  return context;

}