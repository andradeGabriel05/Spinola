import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import "../exercice.scss";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";

export default function Exercice6() {
  return (
    <div className="container_exercise">
      <HeaderExercices
        progressExercice="85.71%"
        prevProgressExercice={"71.42%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>Select the nationalities in the order you hear them. </p>
      </div>

      <VideoExercices
        miniature={" "}
        audio={
          "https://cdn.busuu.com/media/resized/audio/a1l9ac71662474246_1662474246.mp3"
        }
      />

      <ExerciceWithoutVideo
        answer_1="anglais / mexicain / américain"
        answer_2="mexicain / américain / anglais"
        answer_3="américain / anglaise / mexicain"
        correctAnswer="américain / anglaise / mexicain"
        nextExercise="/learning/exercices/first-lessons/3/3_3/exercice7"
      />
    </div>
  );
}
