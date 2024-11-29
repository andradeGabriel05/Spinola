import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import "../exercice.scss";
import LanguageFile from "../../../../../../language";

export default function Exercice5() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices
        progressExercice="71.42%"
        prevProgressExercice="57.14%"
      />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].completeSentence}</p>
      </div>


      <VideoInputExercices
        sentenceText1="Nous nous "
        sentenceText2=" "
        sentenceText3=" "
        answer_1="sont"
        answer_2="promené"
        answer_3="sommes"
        answer_4="promenés"
        correctAnswer="sommes"
        correctAnswer2="promenés"
        nextExercise={"/learning/exercices/a2/1/1_4/exercice6"}
      />
    </div>
  );
}
