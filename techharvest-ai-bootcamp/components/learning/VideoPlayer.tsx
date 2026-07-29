
"use client";

import { useEffect, useRef } from "react";

import ReactPlayer from "react-player";

import { useLearning } from "@/hooks/useLearning";

export default function VideoPlayer() {

  console.log("VideoPlayer Mounted");

useEffect(() => {

  console.log("VideoPlayer Mounted");

  return () => {

    console.log("VideoPlayer Unmounted");

  };

}, []);

  const {

    selectedLesson,

    saveProgress,

    completeCurrentLesson,

  } = useLearning();

  const playerRef = useRef<ReactPlayer>(null);

  const durationRef = useRef(0);

  const lastSavedRef = useRef(0);

  const completedRef = useRef(false);

  const resumedRef = useRef(false);

  /**
   * Reset state whenever lesson changes
   */
  useEffect(() => {

    lastSavedRef.current = 0;

    completedRef.current = false;

    resumedRef.current = false;

  }, [selectedLesson?._id]);

  if (!selectedLesson) return null;

  console.log("Video URL:", selectedLesson.video.url)
  return (

    <div className="overflow-hidden rounded-xl">

      <ReactPlayer

        ref={playerRef}

        url={selectedLesson.video.url}

        controls

        width="100%"

        height="500px"

        onReady={() => {

          /**
           * Resume only once
           */

          if (

            !resumedRef.current &&

            selectedLesson.progress?.currentTime

          ) {

            playerRef.current?.seekTo(

              selectedLesson.progress.currentTime,

              "seconds"

            );

            resumedRef.current = true;

          }

        }}

        onDuration={(duration) => {

          durationRef.current = duration;

        }}

        onProgress={async (state) => {

          if (durationRef.current === 0) return;

          const currentTime = state.playedSeconds;

          /**
           * Save every 10 seconds
           */

          if (

            currentTime - lastSavedRef.current >= 10

          ) {

            lastSavedRef.current = currentTime;

            await saveProgress(

              currentTime,

              durationRef.current

            );

          }

          /**
           * Auto complete lesson
           */

          const percentage =

            (currentTime /

              durationRef.current) *

            100;

          if (

            percentage >= 95 &&

            !completedRef.current

          ) {

            completedRef.current = true;

            await completeCurrentLesson();

          }

        }}

      />

    </div>

  );

}