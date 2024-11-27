import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import "../exercice.scss";
import LanguageFile from "../../../../../../language";

export default function Exercice1() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="28.57%" />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].completeSentence}</p>
      </div>

      <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/ce1755cf-170a-4792-8e0d-35cc0ce3affe_small.mp4" />

      <VideoInputExercices
        answer_1="Ka"
        answer_2="Ça"
        sentenceText1="Bonjour!"
        sentenceText2="va ?"
        correctAnswer="Ça"
        nextExercise={"/learning/exercices/first-lessons/1/1_4/exercice2"}
      />
    </div>
  );
}
