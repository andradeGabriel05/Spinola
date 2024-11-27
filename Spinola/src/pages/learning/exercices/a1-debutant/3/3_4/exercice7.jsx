import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import "../exercice.scss";

import LanguageFile from "../../../../../../Language";

export default function Exercice7() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices
        progressExercice="77.77%"
        prevProgressExercice={"66.66%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].completeSentence}</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices
          videoSrc={
            "https://cdn.busuu.com/media-resources/video/mp4/59b10e0b-e9ae-4d5d-9a24-41e2d5a4b6da_small.mp4"
          }
        />
      </div>

      <VideoInputExercices
        answer_1="sont"
        answer_2="sommes"
        sentenceText1="Elles "
        sentenceText2="françaises."
        correctAnswer="sont"
        nextExercise={"/learning/exercices/first-lessons/3/3_4/exercice8"}
      />
    </div>
  );
}
