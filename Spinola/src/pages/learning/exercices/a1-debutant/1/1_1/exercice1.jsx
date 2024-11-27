import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import { exerciceCounter } from "../../../../../../global";
import LanguageFile from "../../../../../../language.json"
import "../exercice.scss";

export default function Exercice1() {
  exerciceCounter.length = 0;
  exerciceCounter.push("correct1");

  console.log(exerciceCounter);

  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="12.5%" prevProgressExercice="0%" />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].newWord}</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/85f20432-442d-482f-af59-7ad987f152c2_small.mp4" />

        <div className="exercice_text page_exercice_text">
          <p>Bonjour</p>
          <p>{LanguageFile.exercise1_1[language].e1.text}</p>
        </div>
      </div>
      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/1/1_1/exercice2"}
        correct={"true"}
      />
    </div>
  );
}
