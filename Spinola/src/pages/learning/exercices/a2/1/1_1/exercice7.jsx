import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import { exerciceCounter } from "../../../../../../global";
import { useEffect } from "react";
import LanguageFile from "../../../../../../language.json";

export default function Exercice7() {
  useEffect(() => {
    exerciceCounter.push("correct");
    console.log(exerciceCounter);
  }, []);
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="87.5%" prevProgressExercice={"75%"} />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].newWord}</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices
          videoSrc="https://cdn.busuu.com/media-resources/video/mp4/68660a1c-e1db-4783-aabf-8d26cbabe21f_small.mp4"
        />

        <div className="exercice_text page_exercice_text">
          <p>J'ai regardé la télé. </p>
          <p>I watched TV. </p>
        </div>
      </div>
      <FooterExercices
        nextExercise={"/learning/exercices/a2/1/1_1/exercice8"}
      />
    </div>
  );
}

// https://cdn.busuu.com/media-resources/video/mp4/03bd6c72-fcbc-4431-b0c5-44dfc488432b_small.mp4
