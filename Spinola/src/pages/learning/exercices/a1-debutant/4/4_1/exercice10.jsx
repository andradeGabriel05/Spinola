import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import "../exercice.scss";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";

import LanguageFile from "../../../../../../language.json";
export default function Exercice10() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="90.9%" prevProgressExercice={"81.81%"} />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].completeSentence}</p>
      </div>

      <VideoExercices
        videoSrc={"https://cdn.busuu.com/media-resources/video/mp4/9749865d-f6a9-45a9-9a06-797b6c63beab_small.mp4"}
      />

      <VideoInputExercices
        answer_1="allemandes"
        answer_2="allemands"
        sentenceText1="Elles sont "
        sentenceText2="."
        correctAnswer="allemandes"
        nextExercise="/learning/exercices/first-lessons/4/4_1/exercice11"
      />
    </div>
  );
}
