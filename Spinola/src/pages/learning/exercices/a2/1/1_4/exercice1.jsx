import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoBoolExercices from "../../../../../../components/Exercices/VideoBoolExercices/videoBoolExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import audio from "Spinola/public/recordsExercices/p_32757226_503.mp3";
import "../exercice.scss";
import { exerciceCounter } from "../../../../../../global";
import { useEffect } from "react";

export default function Exercice2() {
  useEffect(() => {
    exerciceCounter.push("correct");
    console.log(exerciceCounter);
  }, []);

  return (
    <div className="container_exercise bigger_page">
      <HeaderExercices progressExercice="28.57%" prevProgressExercice={"0%"} />

      <div className="exercice_title page_exercice_text">
        <p>Read Sandra and Sophie's chat and notice the words in bold.</p>
      </div>

      <VideoExercices
        miniature={
          "https://cdn.busuu.com/media-resources/image/a/pr:exercise_l/plain/s3://busuu-logos-service-media-production/media-resources/image/14fbd594-3f22-4d12-9f32-b3c4c99793fe.jpg@jpg"
        }
      />

      <div className="exercice_text page_exercice_text">
        <p>- Salut Sophie, ça va? Alors, tu as fait quoi hier ?</p>
        <p>
          - Salut Sandra, hier, Paul et moi nous sommes restés à la maison. Je
          me suis reposée, j'ai traîné à la maison et j'ai lu un livre. Ensuite,
          Paul a cuisiné et j'ai fait le ménage. Et toi?
        </p>
        <p>- Alors moi, je suis sortie avec Damien...</p>
        <p>- Ooh trop bien. Vous avez fait quoi ?</p>
        <p>
          - Nous sommes allés au resto et après nous nous sommes promenés sur
          les quais.
        </p>
      </div>

      <FooterExercices
        nextExercise={"/learning/exercices/a2/1/1_4/exercice2"}
      />
    </div>
  );
}
