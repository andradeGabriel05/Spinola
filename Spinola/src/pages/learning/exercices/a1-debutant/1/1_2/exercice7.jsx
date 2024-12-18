import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import "../exercice.scss";
import LanguageFile from "../../../../../../language";

export default function Exercice7() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices
        progressExercice="77.77%"
        prevProgressExercice="66.66%"
      />

      <div className="exercice_title page_exercice_text">
        <p> {LanguageFile.exerciseTitles[language].completeSentence}</p>
      </div>

      <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/343b53a0-71fa-4ec3-9c4a-d6e89cf0f523_small.mp4" />

      <VideoInputExercices
        answer_1="bien"
        answer_2="rien"
        sentenceText1="De"
        correctAnswer="rien"
        nextExercise={"/learning/exercices/first-lessons/1/1_2/exercice8"}
      />
    </div>
  );
}
