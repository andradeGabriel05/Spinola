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
        progressExercice="66.66%"
        prevProgressExercice="55..55%"
      />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].completeSentence}</p>
      </div>

      <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/1553e539-f2ba-4d06-84dd-485938067956_small.mp4" />

      <VideoInputExercices
        sentenceText1="Je  "
        sentenceText2="  au resto avec ma famille."
        answer_1="suis allé"
        answer_2="suis allée"
        correctAnswer="suis allé"
        nextExercise={"/learning/exercices/a2/1/1_2/exercice7"}
      />
    </div>
  );
}
