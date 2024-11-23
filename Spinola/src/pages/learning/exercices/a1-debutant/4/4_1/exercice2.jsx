import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";

export default function Exercice2() {
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="33.33%" prevProgressExercice={"22.22%"}/>

      <div className="exercice_title page_exercice_text">
        <p>What is he saying to Monia?</p>
      </div>

      <VideoExercices videoSrc={"https://cdn.busuu.com/media-resources/video/mp4/95d515a0-7a6c-40fc-8c11-2c515f84c9b2_small.mp4"} />

      <VideoInputExercices 
        answer_1="anglais"
        answer_2="anglaises"
        sentenceText1="Nous sommes "
        sentenceText2="."
        sentenceText3="? Tu es fatiguée ?"
        correctAnswer="anglaises"
        nextExercise="/learning/exercices/first-lessons/4/4_1/exercice3"
      />
    </div>
  );
}
