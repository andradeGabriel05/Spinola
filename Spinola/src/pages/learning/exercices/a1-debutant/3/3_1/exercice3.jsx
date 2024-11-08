import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";

export default function Exercice3() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="33.33%" prevProgressExercice={"22.22%"}/>

      <div className="exercice_title page_exercice_text">
        <p>👋 Bonjour or salut? 👋</p>
      </div>

      <VideoExercices miniature={" "} audio="https://cdn.busuu.com/media/resized/audio/a1l841662459982_1662459982.mp3" />

      <VideoInputExercices 
        answer_1="Ça"
        answer_2="va"
        answer_3="sa"
        answer_4="vas"
        sentenceText1="Salut, Monia!"
        sentenceText2=""
        sentenceText3="? Tu es fatiguée ?"
        correctAnswer="Ça"
        correctAnswer2="va"
        nextExercise="/learning/exercices/first-lessons/3/3_1/exercice4"
      />
    </div>
  );
}
