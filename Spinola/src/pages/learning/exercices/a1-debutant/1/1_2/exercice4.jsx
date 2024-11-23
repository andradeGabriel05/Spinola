import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import "../exercice.scss";


export default function Exercice4() {
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="44.44%" prevProgressExercice="33.33%" />

      <div className="exercice_title page_exercice_text">
        <p>Complete the sentence.</p>
      </div>

      <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/ec3bf57e-928b-4626-944f-74befa345046_small.mp4" />

      <VideoInputExercices
        answer_1="Merci"
        answer_2="Mersi"
        correctAnswer="Merci"
        nextExercise={"/learning/exercices/first-lessons/1/1_2/exercice5"}
      />
    </div>
  );
}
