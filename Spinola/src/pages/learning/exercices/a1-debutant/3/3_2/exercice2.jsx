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
      <HeaderExercices progressExercice="18.18%" prevProgressExercice={"9.09%"} />

      <div className="exercice_title page_exercice_text">
        <p>Tu es de quelle nationalité ? </p>
      </div>

      <VideoExercices miniature={"https://st.focusedcollection.com/8860618/i/650/focused_124364670-stock-photo-two-people-talking.jpg"} audio={"https://cdn.busuu.com/media/resized/audio/ltuesdequelnationalite_1604923381.mp3"} />

      <VideoBoolExercices 
        answer_1={LanguageFile.trueOrFalse[language].true}
        answer_2={LanguageFile.trueOrFalse[language].false}
        correctAnswer={LanguageFile.trueOrFalse[language].true}
        question={LanguageFile.exercise3_2[language].e2.text}
        nextExercise="/learning/exercices/first-lessons/3/3_2/exercice3"
      
      />
    </div>
  );
}
