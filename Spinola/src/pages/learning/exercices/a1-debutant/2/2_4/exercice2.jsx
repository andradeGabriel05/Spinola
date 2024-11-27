import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";

import LanguageFile from "../../../../../../language";
import "../exercice.scss";

export default function Exercice2() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="40%" prevProgressExercice="20%" />
      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].write}</p>
      </div>
      <div className="wrapper_video_enunciate">
        <VideoExercices
          miniature="https://cdn.busuu.com/media/resized/entity/1440/shutterstock_166281927711661806250_1661806250_1440.jpg"
          audio="https://cdn.busuu.com/media/resized/audio/a1l781661505021_1661505021.mp3"
        />

      </div>

      <ExerciceWrite
        sentenceText1="Je "
        sentenceText2="un peu fatiguée."
        correctAnswer="suis"
        nextExercise={"/learning/exercices/first-lessons/2/2_4/exercice3"}
      />
    </div>
  );
}

//     Je suis un peu fatiguée.

// I'm a bit tired. 

// "Je suis" (I am) is spelled with a silent final "-s".