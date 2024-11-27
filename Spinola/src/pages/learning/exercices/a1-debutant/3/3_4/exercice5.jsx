import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import "../exercice.scss";

import LanguageFile from "../../../../../../Language";

export default function Exercice5() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices
        progressExercice="55.55%"
        prevProgressExercice={"44.44%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].completeSentence}</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices
          miniature={"https://cdn.busuu.com/media-resources/image/a/pr:exercise_m/plain/s3://busuu-logos-service-media-production/media-resources/image/dcd124f4-544e-4b1d-b82b-20bb6b670a3a.jpg@jpg"}
          audio="https://cdn.busuu.com/media/resized/audio/a1l1161662477361_1662477361.mp3"
        />
      </div>

      <VideoInputExercices
        answer_1="sont"
        answer_2="sommes"
        sentenceText1="Nous "
        sentenceText2="fatigués aujourd’hui."
        correctAnswer="sommes"
        nextExercise={"/learning/exercices/first-lessons/3/3_4/exercice6"}
      />
    </div>
  );
}
