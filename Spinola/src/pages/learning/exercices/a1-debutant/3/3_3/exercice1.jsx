import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";

export default function Exercice1() {
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="14.28%" prevProgressExercice={"0%"}/>

      <div className="exercice_title page_exercice_text">
        <p>New word!</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/8287fd6e-7f52-4f5f-9730-ea9cfb9aa796_small.mp4" />
      </div>

    <VideoInputExercices 
      answer_1="quelle"
      answer_2="es"
      answer_3="est"
      answer_4="quel"
      sentenceText1="Tu "
      sentenceText2=" de "
      sentenceText3="nationalité ?"
      correctAnswer="es"
      correctAnswer2="quelle"
      nextExercise="/learning/exercices/first-lessons/3/3_3/exercice2"
    />
      
    </div>
  );
}
