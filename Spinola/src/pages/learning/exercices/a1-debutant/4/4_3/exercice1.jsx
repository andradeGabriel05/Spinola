import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";

export default function Exercice1() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="14.28%" prevProgressExercice={"0%"} />

      <div className="exercice_title page_exercice_text">
        <p>New word!</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices
          audio={
            "https://cdn.busuu.com/media-resources/audio/d69b5976-273a-4ac9-899f-c63b9c91ca12.mp3"
          }
          miniature={
            "https://cdn.busuu.com/media/resized/entity/1440/addasubheading31662481693_1662481693_1440.jpg"
          }
        />
      </div>

      <ExerciceWithoutVideo
        answer_1="mexicain"
        answer_2="américain"
        answer_3="anglais"
        correctAnswer="mexicain"
        nextExercise="/learning/exercices/first-lessons/4/4_3/exercice2"
      />
    </div>
  );
}
