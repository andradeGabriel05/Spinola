import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import "../exercice.scss";

export default function Exercice7() {
  return (
    <div className="container_execice">
      <HeaderExercices
        progressExercice="100%"
        prevProgressExercice={"85.71%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>Complete the sentence.</p>
      </div>

      <VideoExercices
        miniature={
          "https://cdn.busuu.com/media-resources/image/a/pr:exercise_l/plain/s3://busuu-logos-service-media-production/media-resources/image/7b81a128-a67f-4129-bbd0-5b9b051a5816.jpg@jpg"
        }
        audio={
          "https://cdn.busuu.com/media/resized/audio/a1l9ac81662474292_1662474292.mp3"
        }
      />
      <ExerciceWrite
        sentenceText1="Elle est "
        sentenceText2="."
        correctAnswer="americaine"
        nextExercise={"/premiere-lecon"}
      />
    </div>
  );
}

// https://cdn.busuu.com/media-resources/audio/e4e29037-b7f6-4bf0-bab6-9ee081ddbf8f.mp3
