import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";

export default function Exercice8() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="88.88%" prevProgressExercice="77.77%"/>

      <div className="exercice_title page_exercice_text">
        <p>Choose the translation that matches what’s in the video</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices
          videoSrc="https://static.memrise.com/uploads/things/video/medium/1000091193_161125_1359_29.mp4#t=0.1"
        />

        <ExerciceWithoutVideo
          answer_1="I'm good"
          answer_2="Good morning"
          answer_3="Very well"
          answer_4="How are you?"
          correctAnswer="Very well"
          nextExercise="/learning/exercices/first-lessons/2/2_2/exercice9"
        />
      </div>
    </div>
  );
}
