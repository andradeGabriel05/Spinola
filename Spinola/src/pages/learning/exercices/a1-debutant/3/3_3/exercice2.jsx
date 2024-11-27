import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import "../exercice.scss";

import LanguageFile from "../../../../../../language";

export default function Exercice2() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise bigger_page">
      <HeaderExercices progressExercice="28.57%" prevProgressExercice={"14.28%"} />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].whatSaying}</p>
      </div>

      <VideoExercices miniature={" "} audio={"https://cdn.busuu.com/media/resized/audio/a1l9ac31662474139_1662474139.mp3"} />

      <ExerciceWithoutVideo 
          answer_1={LanguageFile.exercise3_3[language].e2.text1}
          answer_2={LanguageFile.exercise3_3[language].e2.text2}
          answer_3={LanguageFile.exercise3_3[language].e2.text3}
          correctAnswer={LanguageFile.exercise3_3[language].e2.text2}
          nextExercise="/learning/exercices/first-lessons/3/3_3/exercice3"
      />
    </div>
  );
}
