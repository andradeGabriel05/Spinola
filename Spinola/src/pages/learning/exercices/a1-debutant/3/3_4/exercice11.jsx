import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import "../exercice.scss";

import LanguageFile from "../../../../../../Language";

export default function Exercice11() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices
        progressExercice="100%"
        prevProgressExercice={"81.81%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].completeSentence}</p>
      </div>

      <VideoExercices
        miniature={" "}
        audio={
          "https://cdn.busuu.com/media/resized/audio/a1l11ac31662477697_1662477697.mp3"
        }
      />

      <VideoInputExercices
        answer_1="sommes"
        answer_2="est"
        answer_3="sont"
        answer_4="es"
        sentenceText1="Nous"
        sentenceText2="américaines mais elle "
        sentenceText3="mexicaine."
        correctAnswer="sommes"
        correctAnswer2="est"
        nextExercise="/premiere-lecon"
        last={true} chapter={3} exercise={4}
      />
    </div>
  );
}

// https://cdn.busuu.com/media-resources/audio/e4e29037-b7f6-4bf0-bab6-9ee081ddbf8f.mp3
