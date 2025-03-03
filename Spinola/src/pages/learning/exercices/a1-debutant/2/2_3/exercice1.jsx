import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import { exerciceCounter } from "../../../../../../global";
import "../exercice.scss";
import LanguageFile from "../../../../../../language";

export default function Exercice1() {
  exerciceCounter.length = 0;
  exerciceCounter.push("correct");

  console.log(exerciceCounter);

  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="9.09%" prevProgressExercice="0%" />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].newWord}</p>
      </div>

      <VideoExercices miniature="https://cdn.busuu.com/media/resized/entity/1440/shutterstock_213459924511661528323_1661528323_1440.jpg" />


      <div className="exercice_text page_exercice_text">
        <p>être</p>
        <p>{LanguageFile.exercise2_3[language].e1.text}</p>
      </div>

      <FooterExercices nextExercise={"/learning/exercices/first-lessons/2/2_3/exercice2"} />
    </div>
  );
}
