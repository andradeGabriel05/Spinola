import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import "../exercice.scss";


export default function Exercice7() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="100%" />

      <div className="exercice_title page_exercice_text">
        <p>Complete the sentence.</p>
      </div>

      <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/0aa32cdc-b7e5-41b9-8844-815cdc56e618_small.mp4" />

      <VideoInputExercices
        answer_1="et vous"
        answer_2="et yo"
        sentenceText1="Bien merci"
        sentenceText2="?"
        correctAnswer="et vous"
        nextExercise={"/premiere-lecon"}
      />
    </div>
  );
}
