import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import "../exercice.scss";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";

export default function Exercice11() {
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="100%" prevProgressExercice="90.90%"/>

      <div className="exercice_title page_exercice_text">
        <p>Select the sentence you hear. </p>
      </div>
      <div className="wrapper_video_enunciate">
        <VideoExercices miniature={" "}
          audio={
            "https://cdn.busuu.com/media/resized/audio/a1l741661505195_1661505195.mp3"
          }
        />
      </div>

      <ExerciceWrite
        sentenceText1=""
        sentenceText2="contente ?"
        correctAnswer="Tu es"
        nextExercise="/premiere-lecon"
        last={true}
        chapter={2}
        exercise={3}
      />

      {/*     Elle est contente mais tu es fatigué !

    She is happy but you are tired!

In spoken French, we pronounce "elle est" like "el-è".  */}
    </div>
  );
}
