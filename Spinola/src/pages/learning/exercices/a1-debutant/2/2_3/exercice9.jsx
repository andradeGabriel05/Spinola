import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import "../exercice.scss";

export default function Exercice7() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="81.81%" prevProgressExercice="72.72"/>

      <div className="exercice_title page_exercice_text">
        <p>Complete the sentence.</p>
      </div>
      <div className="wrapper_video_enunciate">
        <VideoExercices
          miniature={
            "https://cdn.busuu.com/media/resized/entity/1440/shutterstock_166281927711661806250_1661806250_1440.jpg"
          }
          audio={
            "https://cdn.busuu.com/media/resized/audio/a1l771661428130_1661428130.mp3"
          }
        />
      </div>

      <ExerciceWrite
        sentenceText1="Elle"
        sentenceText2="fatiguée. Et je suis fatigué aussi."
        correctAnswer="est"
        nextExercise={"/learning/exercices/first-lessons/2/2_3/exercice10"}
      />
    </div>
  );
}
