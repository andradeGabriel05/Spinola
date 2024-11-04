import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import "../exercice.scss";


export default function Exercice1() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="9.09%" prevProgressExercice="0%" />

      <div className="exercice_title page_exercice_text">
        <p>Complete the sentence.</p>
      </div>

      <VideoExercices miniature="https://cdn.busuu.com/media/resized/entity/1440/shutterstock_213459924511661528323_1661528323_1440.jpg" />


      <div className="exercice_text page_exercice_text">
        <p>être</p>
        <p>to be</p>
      </div>

      <FooterExercices nextExercise={"/learning/exercices/premiere-lessons/2/2_3/exercice2"} />
    </div>
  );
}
