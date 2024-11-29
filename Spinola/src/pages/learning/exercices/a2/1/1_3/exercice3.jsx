import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import LanguageFile from "../../../../../../language";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
export default function Exercice3() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise bigger_page">
      <HeaderExercices progressExercice="42.85%" />

      <div className="exercice_title page_exercice_text">
        <p> {LanguageFile.exerciseTitles[language].trueOrFalse}</p>
      </div>

      <div className="wrapper_video_enunciate">
        <div className="wrapper_video_enunciate">
          <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/da54e21c-53e2-4432-a2b9-70796c0c88fe_small.mp4" />

          <VideoInputExercices
            sentenceText1="Je suis  "
            sentenceText2=" à la maison."
            answer_1="resté"
            answer_2="restée"
            correctAnswer="restée"
            nextExercise={"/learning/exercices/a2/1/1_3/exercice4"}
          />
        </div>
      </div>
    </div>
  );
}
