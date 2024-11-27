import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";

import "../exercice.scss";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";

import LanguageFile from "../../../../../../language";
export default function Exercice5() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="45.45%" prevProgressExercice="36.36%"/>

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].completeSentence}</p>
      </div>
      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc={"https://cdn.busuu.com/media-resources/video/mp4/de7c8fc2-2eb8-42b3-96fa-e797b949f689_small.mp4"} />

      </div>

      <VideoInputExercices
        sentenceText1="Je "
        sentenceText2="content"
        answer_1="suis"
        answer_2="suit"
        correctAnswer="suis"
        nextExercise={"/learning/exercices/first-lessons/2/2_3/exercice6"}
      />
    </div>
  );
}
