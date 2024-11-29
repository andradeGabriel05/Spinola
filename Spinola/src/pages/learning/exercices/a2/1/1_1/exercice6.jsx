import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import LanguageFile from "../../../../../../language.json";
import "../exercice.scss";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";

export default function Exercice6() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise bigger_page">
      <HeaderExercices progressExercice="75%" prevProgressExercice="62.5%" />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].completeSentence}</p>
      </div>

      <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/e0e227cb-ffc8-4e87-bb22-658b8f021e64_small.mp4" />

      <VideoInputExercices
        answer_1="le ménage"
        answer_2="fait"
        answer_3="la ménage"
        answer_4="fais"
        sentenceText1="J’ai "
        sentenceText2=""
        sentenceText3="tout l’après-midi ! "
        correctAnswer="fait"
        correctAnswer2="le ménage"
        nextExercise={"/learning/exercices/a2/1/1_1/exercice7"}
      />
    </div>
  );
}
