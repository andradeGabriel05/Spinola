import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import { exerciceCounter } from "../../../../../../global";
import { useEffect } from "react";
import LanguageFile from "../../../../../../language.json";

export default function Exercice8() {
  useEffect(() => {
    exerciceCounter.push("correct");
    console.log(exerciceCounter);
  }, []);
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="100%" prevProgressExercice={"87.5%"} />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].newWord}</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices
          videoSrc="https://static.memrise.com/uploads/items/videos/medium/86609__m__1528469383_normalized.mp4#t=0.1"
          position="top"
        />

        <div className="exercice_text page_exercice_text">
          <p>Non</p>
          <p>{LanguageFile.exercise1_1[language].e8.text}</p>
        </div>
      </div>
      <FooterExercices
        nextExercise={"/exercise-finish"}
        last={true}
        chapter={1}
        exercise={1}
      />
    </div>
  );
}

// https://cdn.busuu.com/media-resources/video/mp4/03bd6c72-fcbc-4431-b0c5-44dfc488432b_small.mp4
