import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import ExplainWord from "../../../../../../components/Exercices/ExplainWord/explainWord";
import "../exercice.scss";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";

export default function Exercice10() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="100%" />


      <div className="exercice_title page_exercice_text">
        <p>Listen and choose the correct answer.</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices
          miniature="https://cdn.busuu.com/media-resources/image/a/pr:exercise_l/plain/s3://busuu-logos-service-media-production/media-resources/image/278c0dab-e906-40fc-8527-23c43e526f9f.jpg@jpg"
          audio="https://cdn.busuu.com/media-resources/audio/4d0f024d-f5fa-4df7-8e02-d7ea91f3cc5a.mp3"
        />
      </div>

      
      <ExerciceWithoutVideo
        answer_1="Rachid dit 'enchantée'."
        answer_2="Rachid dit 'enchanté'."
        answer_3="Mathilde dit 'enchantée'."
        answer_4="Sophie dit 'enchanté'."
        correctAnswer="Rachid dit 'enchanté'."
        nextExercise={"/premiere-lecon"}
      />
    </div>
  );
}
