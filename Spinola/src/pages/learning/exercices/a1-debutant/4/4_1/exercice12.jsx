import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import "../exercice.scss";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";

export default function Exercice12() {
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="66.66%" prevProgressExercice={"55.55%"} />

      <div className="exercice_title page_exercice_text">
        <p>True or false?</p>
      </div>

      <VideoExercices
        miniature={
          "https://cdn.busuu.com/media-resources/image/a/pr:exercise_l/plain/s3://busuu-logos-service-media-production/media-resources/image/ebba3df9-502f-40ea-98e7-29bcf3652a16.jpg@jpg"
        }
        audio="https://cdn.busuu.com/media/resized/audio/a1l1081662480153_1662480153.mp3"
      />

      <VideoInputExercices
        answer_1="américains"
        answer_2="américaines"
        sentenceText1="Nous sommes"
        sentenceText2="."
        correctAnswer="américaines"
        nextExercise="/learning/exercices/first-lessons/4/4_1/exercice7"
      />
    </div>
  );
}
