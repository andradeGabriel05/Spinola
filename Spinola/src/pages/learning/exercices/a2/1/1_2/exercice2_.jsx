import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import "../exercice.scss";
import LanguageFile from "../../../../../../language";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
export default function Exercice2() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise bigger_page">
      <HeaderExercices
        progressExercice="22.22%"
        prevProgressExercice="11.11%"
      />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].TrueOrFalse}</p>
      </div>

      <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/00b2c573-b6d0-4200-9610-4b3792692c16_small.mp4" />

      <VideoInputExercices
        answer_1="suis sorti"
        answer_2="suis sortie"
        sentenceText1="Je "
        sentenceText2=" avec des amis."
        correctAnswer="suis sorti"
        nextExercise={"/learning/exercices/a2/1/1_3/exercice3"}
      />
    </div>
  );
}
