import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import "../exercice.scss";
import LanguageFile from "../../../../../../language";

export default function Exercice6() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices
        progressExercice="100%"
        prevProgressExercice="85.71%"
      />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].completeSentence}</p>
      </div>

      <VideoInputExercices
        sentenceText1="Ils "
        sentenceText2=" regardé la télé et je me "
        sentenceText3="reposé au lit. "
        answer_1="ai"
        answer_2="sont"
        answer_3="suis"
        answer_4="ont"
        correctAnswer="ont"
        correctAnswer2="suis"
        nextExercise={"/learning/exercices/a2/1/1_2/exercice7"}
        last={true}
        exercise={3}
        chapter={1}
        level={"A2"}
      />
    </div>
  );
}
