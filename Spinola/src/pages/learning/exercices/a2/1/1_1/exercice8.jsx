import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import { exerciceCounter } from "../../../../../../global";
import { useEffect } from "react";
import LanguageFile from "../../../../../../language.json";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";

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
          videoSrc="https://cdn.busuu.com/media-resources/video/mp4/534188e2-3a75-4ee5-96bd-2d6e7ba58bbe_small.mp4"
          position="top"
        />

        <VideoInputExercices
          answer_1="ai regardé"
          answer_2="ai regardés"
          sentenceText1="Hier soir, j’"
          sentenceText2=" la télé. "
          correctAnswer="ai regardé"
          nextExercise={"/learning/exercices/a2/1/1_1/exercice7"}
          last={true}
          chapter={1}
          exercise={1}
          level={"A2"}
        />
      </div>
    </div>
  );
}

// https://cdn.busuu.com/media-resources/video/mp4/03bd6c72-fcbc-4431-b0c5-44dfc488432b_small.mp4
