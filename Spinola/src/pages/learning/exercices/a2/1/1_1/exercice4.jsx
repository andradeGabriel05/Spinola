import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import LanguageFile from "../../../../../../language.json";
import "../exercice.scss";


export default function Exercice4() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="50%" prevProgressExercice="37.5%" />

      <div className="exercice_title page_exercice_text">
      <p>{LanguageFile.exerciseTitles[language].completeSentence}</p>

      </div>

      <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/46901be2-b73c-42e4-8233-a68dae766ccb_small.mp4" />

      <VideoInputExercices
        answer_1="traîné"
        answer_2="traîner"
        answer_3="a"
        answer_4="ai"
        sentenceText1="J’"
        sentenceText2=""
        sentenceText3=" toute la journée."
        correctAnswer="ai"
        correctAnswer2="traîné"
        nextExercise={"/learning/exercices/a2/1/1_1/exercice5"}
      />
    </div>
  );
}
