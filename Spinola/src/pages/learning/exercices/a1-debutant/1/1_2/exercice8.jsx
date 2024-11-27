import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import { exerciceCounter } from "../../../../../../global";
import { useEffect } from "react";
import LanguageFile from "../../../../../../language";
export default function Exercice8() {
  useEffect(() => {
    exerciceCounter.push("correct");
    console.log(exerciceCounter);
  }, []);

  const language = localStorage.getItem("language");

  return (
    <div className="container_exercise">
      <HeaderExercices
        progressExercice="88.88%"
        prevProgressExercice="77.77%"
      />

      <div className="exercice_title page_exercice_text">
        <p> {LanguageFile.exerciseTitles[language].newWord}</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/2b1dbefc-1b50-428c-a699-d26cae7061f3_small.mp4" />

        <div className="exercice_text page_exercice_text">
          <p>Pardon</p>
          <p>{LanguageFile.exercise1_2[language].e6.text}</p>
        </div>
      </div>
      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/1/1_2/exercice9"}
      />
    </div>
  );
}
