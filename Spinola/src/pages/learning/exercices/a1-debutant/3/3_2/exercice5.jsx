  import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import "../exercice.scss";

import LanguageFile from "../../../../../../language";

export default function Exercice5() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices
        progressExercice="45.45%"
        prevProgressExercice={"36.36%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].whatSaying}</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices
          videoSrc={"https://cdn.busuu.com/media-resources/video/mp4/20ec6b6f-e426-4168-a984-e0aa9b2f47af_small.mp4"}
        />
      </div>

      <VideoInputExercices
        answer_1="français"
        answer_2="française"
        answer_3="fançai"
        answer_4="franssais"
        sentenceText1="Thomas ? Il est "
        sentenceText2="."
        correctAnswer="français"
        nextExercise={"/learning/exercices/first-lessons/3/3_2/exercice6"}
      />
    </div>
  );
}
