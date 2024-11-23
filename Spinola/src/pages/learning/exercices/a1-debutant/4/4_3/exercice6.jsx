import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import "../exercice.scss";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";

export default function Exercice6() {
  return (
    <div className="container_exercise bigger_page">
      <HeaderExercices
        progressExercice="71.42%"
        prevProgressExercice={"57.14%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>Complete the sentence.</p>
      </div>

      <VideoExercices
        miniature={" "}
        audio={
          "https://cdn.busuu.com/media-resources/audio/5ab07f32-f69e-467e-bd73-0a070a01c1cb.mp3"
        }
      />

      <VideoInputExercices
        answer_1="suis"
        answer_2="suit"
        answer_3="contente"
        answer_4="content"
        sentenceText1="Je"
        sentenceText2="toujours"
        sentenceText3="!"
        correctAnswer="suis"
        correctAnswer2="contente"
        nextExercise="/learning/exercices/first-lessons/4/4_3/exercice7"
      />
    </div>
  );
}
