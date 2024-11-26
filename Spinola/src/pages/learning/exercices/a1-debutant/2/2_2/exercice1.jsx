import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import { exerciceCounter } from "../../../../../../global";
import { useEffect } from "react";

export default function Exercice1() {
  useEffect(() => {
    exerciceCounter.length = 0;
  }, []);

  console.log(exerciceCounter);
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="11.11%" prevProgressExercice="0%" />

      <div className="exercice_title page_exercice_text">
        <p>Type the correct translation of:</p>
        <p>hello; good morning</p>
      </div>

      <ExerciceWrite
        correctAnswer="bonjour"
        nextExercise="/learning/exercices/first-lessons/2/2_2/exercice2"
      />
    </div>
  );
}

// https://static.memrise.com/uploads/babylon/4/videos/quoi+de+neuf+%3F/medium/2.mp4#t=0.1
