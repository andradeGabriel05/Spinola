import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";

import LanguageFile from "../../../../../../Language";
export default function Exercice2() {

  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="18.18%" prevProgressExercice={"9.09%"}/>

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].completeSentence}</p>
      </div>

      <VideoExercices videoSrc={"https://cdn.busuu.com/media-resources/video/mp4/95d515a0-7a6c-40fc-8c11-2c515f84c9b2_small.mp4"} />

      <VideoInputExercices 
        answer_1="anglais"
        answer_2="anglaises"
        sentenceText1="Nous sommes "
        sentenceText2="."
        correctAnswer="anglaises"
        nextExercise="/learning/exercices/first-lessons/4/4_1/exercice3"
      />
    </div>
  );
}
