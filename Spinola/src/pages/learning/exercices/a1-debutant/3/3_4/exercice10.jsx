import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import "../exercice.scss";

export default function Exercice10() {
  return (
    <div className="container_exercise">
      <HeaderExercices
        progressExercice="90.90%"
        prevProgressExercice={"81.81%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>Complete the sentence.</p>
      </div>

      <VideoExercices
        videoSrc={"https://cdn.busuu.com/media-resources/video/mp4/aaef0d31-2eba-4d87-ac6c-62ef960681e6_small.mp4"}
      />

      <VideoInputExercices
        answer_1="vus"
        answer_2="êtes"
        answer_3="es"
        answer_4="Vous"
        sentenceText1=""
        sentenceText2=" "
        sentenceText3="fatigués ?"
        correctAnswer="Vous"
        correctAnswer2="êtes"
        nextExercise="/learning/exercices/first-lessons/3/3_4/exercice11"
      />
    </div>
  );
}

// https://cdn.busuu.com/media-resources/audio/e4e29037-b7f6-4bf0-bab6-9ee081ddbf8f.mp3
