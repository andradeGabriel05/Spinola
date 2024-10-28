import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";

import "../exercice.scss";

export default function Exercice4() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="57.14%" />

      <div className="wrapper_video_enunciate">
        <VideoExercices miniature="https://cdn.busuu.com/media/resized/entity/1440/shutterstock_188106838011661531134_1661531134_1440.jpg" audio="https://cdn.busuu.com/media/resized/audio/a1l611661427689_1661427689.mp3" />

        <div className="exercice_text page_exercice_text">
          <p>Je suis content.</p>
        </div>
      </div>

      <VideoBoolExercices
        answer_1="True"
        answer_2="False"
        question='"Je suis content" means "I am happy".'
        correctAnswer="True"
        nextExercise={"/learning/exercices/a1-debutant/2/2_3/exercice5"}
      />
    </div>
  );
}
