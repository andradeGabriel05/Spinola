import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import "../exercice.scss";

export default function Exercice10() {
  return (
    <div className="container_execice">
      <HeaderExercices
        progressExercice="90.90%"
        prevProgressExercice={"81.81%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>Complete the sentence.</p>
      </div>
      <VideoExercices
          videoSrc={"https://cdn.busuu.com/media-resources/video/mp4/65705997-7624-4f58-bddf-5d64ee5cd57c_small.mp4"}
        />

      <VideoInputExercices
        answer_1="mexicaine"
        answer_2="mexicain"
        sentenceText1="Je suis "
        sentenceText2=", et toi ?"
        correctAnswer="mexicain"
        nextExercise={"/learning/exercices/first-lessons/3/3_2/exercice11"}
      />
    </div>
  );
}

// https://cdn.busuu.com/media-resources/audio/e4e29037-b7f6-4bf0-bab6-9ee081ddbf8f.mp3
