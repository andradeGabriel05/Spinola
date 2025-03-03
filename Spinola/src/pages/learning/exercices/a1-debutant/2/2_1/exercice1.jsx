import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import { exerciceCounter } from "../../../../../../global";
import LanguageFile from "../../../../../../language";
export default function Exercice1() {
  exerciceCounter.length = 0;
  exerciceCounter.push("correct");

  console.log(exerciceCounter);

  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="10%" />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].newWord}</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/cc49ca87-c4dd-46a5-beec-f92b70041941_small.mp4" />

        <div className="exercice_text page_exercice_text">
          <p>Salut !</p>
          <p>{LanguageFile.exercise2_1[language].e1.text}</p>
        </div>
      </div>
      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/2/2_1/exercice2"}
      />
    </div>
  );
}
