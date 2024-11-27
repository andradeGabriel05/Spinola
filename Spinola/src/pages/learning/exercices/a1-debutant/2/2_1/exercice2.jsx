import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import "../exercice.scss";
import LanguageFile from "../../../../../../language";


export default function Exercice2() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice= "20%" />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].completeSentence}</p>
      </div>

      <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/48262a07-4eb1-4ad1-a2f3-bee381b9dfe3_small.mp4" />

      <VideoInputExercices
        answer_1="Salut"
        answer_2="Salu"
        sentenceText2="!"
        correctAnswer="Salut"
        nextExercise={"/learning/exercices/first-lessons/2/2_1/exercice3"}
      />
    </div>
  );
}
