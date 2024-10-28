import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";

export default function Exercice5() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="55.55%" prevProgressExercice="44.44%"/>

      <div className="exercice_title page_exercice_text">
        <p>Choose the translation that matches what’s in the video</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://static.memrise.com/uploads/items/videos/medium/86606__m__1528476179_normalized.mp4#t=0.1" position="top"/>

        <ExerciceWithoutVideo 
          answer_1="I'm good, and you?"
          answer_2="Good morning"
          answer_3="I'm good"
          answer_4="How are you?"
          correctAnswer="I'm good, and you?"
          nextExercise="/learning/exercices/premiere-lessons/2/2_2/exercice6"
        />
      </div>
    </div>
  );
}
