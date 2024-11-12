import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";

import "../exercice.scss";

export default function Exercice4() {
  return (
    <div className="container_execice bigger_page">
      <HeaderExercices progressExercice="44.44%" prevProgressExercice={"33.33%"} />

      <div className="exercice_title page_exercice_text">
        <p>Today Mounia is...</p>
      </div>

      <VideoExercices
        miniature="https://cdn.busuu.com/media-resources/image/a/pr:exercise_l/plain/s3://busuu-logos-service-media-production/media-resources/image/96e45005-2bdf-4290-9cf5-78122d689086.jpg@jpg"
        audio="https://cdn.busuu.com/media/resized/audio/a1l1021662480100_1662480100.mp3"
      />

      <VideoBoolExercices
          answer_1="True"
          answer_2="False"
          title="Vous êtes américains ?"
          correctAnswer="False"
          question={`We pronounce the final -s of "américains".`}
          nextExercise="/learning/exercices/first-lessons/4/4_1/exercice5"
          last=""
      />
    </div>
  );
}
