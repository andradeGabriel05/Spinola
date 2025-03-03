import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite"
import "../exercice.scss";
import LanguageFile from "../../../../../../language";
export default function Exercice5() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="50%" />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].whatSaying}</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/webm/9ed3e3f9-90c4-41e6-9384-095cfb9e0ab6_small.webm" />
      </div>

      <ExerciceWrite 
      correctAnswer="Je m'appelle"
      sentenceText2="Rachid"
      nextExercise={"/learning/exercices/first-lessons/2/2_1/exercice6"}
      />


    </div>
  );
}
