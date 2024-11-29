import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import "../exercice.scss";
import LanguageFile from "../../../../../../language";

export default function Exercice4() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices
        progressExercice="44.44%"
        prevProgressExercice="33.33%"
      />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].completeSentence}</p>
      </div>

      <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/f3259a3a-c1ba-42ee-a02e-503573c123a7_small.mp4" />

      <VideoInputExercices
        sentenceText1="Je "
        sentenceText2=" à la maison."
        answer_1="suis restée"
        answer_2="suis resté"
        correctAnswer="suis restée"
        nextExercise={"/learning/exercices/a2/1/1_2/exercice5"}
      />
    </div>
  );
}
