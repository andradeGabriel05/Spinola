import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import "../exercice.scss";

export default function Exercice6() {
  return (
    <div className="container_exercise">
      <HeaderExercices
        progressExercice="66.66%"
        prevProgressExercice={"55.55%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>What is he saying?</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices
          videoSrc={"https://cdn.busuu.com/media-resources/video/mp4/65705997-7624-4f58-bddf-5d64ee5cd57c_small.mp4"}
        />
      </div>

      <VideoInputExercices
        answer_1="mexican"
        answer_2="mexicaine"
        sentenceText1="Je suis "
        sentenceText2=", et toi ?"
        correctAnswer="mexican"
        nextExercise={"/learning/exercices/first-lessons/4/4_4/exercice7"}
      />
    </div>
  );
}
