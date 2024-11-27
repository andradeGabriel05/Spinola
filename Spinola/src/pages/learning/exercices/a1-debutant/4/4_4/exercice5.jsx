import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import "../exercice.scss";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";

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
        <p>{LanguageFile.exerciseTitles[language].trueOrFalse} </p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices
          miniature={" "}
          audio="https://cdn.busuu.com/media/resized/audio/a1l11121662477568_1662477568.mp3"
        />
      </div>

      <div className="exercice_text page_exercice_text">
        <p></p>
      </div>

      <VideoBoolExercices
        answer_1={LanguageFile.trueOrFalse[language].true}
        answer_2={LanguageFile.trueOrFalse[language].false}
        title="Lisa et Marc ? Ils sont impatients !"
        correctAnswer={LanguageFile.trueOrFalse[language].true}
        question={LanguageFile.exercise4_4[language].e5.text}
        nextExercise="/learning/exercices/first-lessons/4/4_4/exercice6"
      />
    </div>
  );
}
