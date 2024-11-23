import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import "../exercice.scss";

export default function Exercice12() {
  return (
    <div className="container_exercise">
      <HeaderExercices
        progressExercice="90.90%"
        prevProgressExercice={"81.81%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>Complete the sentence.</p>
      </div>

      <VideoExercices
      miniature={"https://cdn.busuu.com/media-resources/image/a/pr:exercise_l/plain/s3://busuu-logos-service-media-production/media-resources/image/7849c382-786d-4c73-ad64-78257c71ac26.jpg@jpg"}
        audio={
          "https://cdn.busuu.com/media-resources/audio/bf0abf2f-84a1-4973-b1fb-d2902f40f1ec.mp3"
        }
      />

      <VideoInputExercices
        answer_1="sommes"
        answer_2="sont"
        sentenceText1="Nous"
        sentenceText2="français."
        correctAnswer="sommes"
        nextExercise=""
      />
    </div>
  );
}

// https://cdn.busuu.com/media-resources/audio/e4e29037-b7f6-4bf0-bab6-9ee081ddbf8f.mp3
