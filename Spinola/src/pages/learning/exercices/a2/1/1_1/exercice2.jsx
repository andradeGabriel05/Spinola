import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import LanguageFile from "../../../../../../language.json"

import "../exercice.scss";


export default function Exercice2() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="25%" prevProgressExercice="12.5%" />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].completeSentence}</p>
      </div>

      <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/f09ff710-af59-425e-8441-e93008ab6174_small.mp4" />

      <VideoInputExercices
      sentenceText1={"Tu "}
      sentenceText2={""}
      sentenceText3={" quoi hier ?"}
        answer_1="fait"
        answer_2="faire"
        answer_3="a"
        answer_4="as"
        correctAnswer="as"
        correctAnswer2="fait"
        nextExercise={"/learning/exercices/a2/1/1_1/exercice3"}
      />
    </div>
  );
}
