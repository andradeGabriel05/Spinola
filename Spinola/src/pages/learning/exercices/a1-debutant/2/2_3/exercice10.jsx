import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import "../exercice.scss";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";


export default function Exercice7() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="90.90%" prevProgressExercice="81.81" />

      <div className="exercice_title page_exercice_text">
        <p>Select the sentence you hear. </p>
      </div>
      <div className="wrapper_video_enunciate">
        <VideoExercices miniature={" "} audio={"https://cdn.busuu.com/media/resized/audio/a1l7_audio1_mcq1662459650_1662459650.mp3"} />

      </div>

      <ExerciceWithoutVideo
        answer_1="Tu es contente ?"
        answer_2="Tu es content ?"
        answer_3="Tout est contente ?"
        answer_4="Tout es contente ?"
        correctAnswer="Tu es content ?"
        nextExercise={"/learning/exercices/premiere-lessons/2/2_3/exercice11"}
      />

      {/*     Elle est contente mais tu es fatigué !

    She is happy but you are tired!

In spoken French, we pronounce "elle est" like "el-è".  */}
    </div>
  );
}
