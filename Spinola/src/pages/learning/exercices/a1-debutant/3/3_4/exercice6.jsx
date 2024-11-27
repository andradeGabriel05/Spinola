import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import "../exercice.scss";

import LanguageFile from "../../../../../../Language";

export default function Exercice6() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices
        progressExercice="66.66%"
        prevProgressExercice={"55.55%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].completeSentence}</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices
          miniature={"https://cdn.busuu.com/media-resources/image/a/pr:exercise_m/plain/s3://busuu-logos-service-media-production/media-resources/image/2c4299ed-ad0c-42a8-9276-f0d316968221.jpg@jpg"}
          audio="https://cdn.busuu.com/media/resized/audio/a1l1181662477433_1662477433.mp3"
        />
      </div>

      <VideoInputExercices
        answer_1="êtes"
        answer_2="est"
        sentenceText1="Vous "
        sentenceText2="toujours contents !"
        correctAnswer="êtes"
        nextExercise={"/learning/exercices/first-lessons/3/3_4/exercice7"}
      />
    </div>
  );
}
