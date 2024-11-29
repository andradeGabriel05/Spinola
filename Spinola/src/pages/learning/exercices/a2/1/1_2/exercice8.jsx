import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import { exerciceCounter } from "../../../../../../global";
import { useEffect } from "react";
import LanguageFile from "../../../../../../language";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
export default function Exercice8() {
  useEffect(() => {
    exerciceCounter.push("correct");
    console.log(exerciceCounter);
  }, []);

  const language = localStorage.getItem("language");

  return (
    <div className="container_exercise">
      <HeaderExercices
        progressExercice="100%"
        prevProgressExercice="80%"
      />

      <div className="exercice_title page_exercice_text">
        <p> {LanguageFile.exerciseTitles[language].newWord}</p>
      </div>

        <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/30b69abb-d256-49ca-a1ee-e7b4a60c9743_small.mp4" />

        <VideoInputExercices
        sentenceText1="Je  "
        sentenceText2="suis "
        sentenceText3=" avec ma fille hier après-midi."
        answer_1="promenée"
        answer_2="me"
        answer_3="promené"
        answer_4="ma"
        correctAnswer="me"
        correctAnswer2="promenée"
        nextExercise={"/learning/exercices/a2/1/1_2/exercice9"}
        last={true}
        chapter={1}
        exercise={2}
        level={"A2"}
      />
      </div>

  );
}
