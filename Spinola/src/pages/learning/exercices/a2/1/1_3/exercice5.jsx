import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import { exerciceCounter } from "../../../../../../global";
import { useEffect } from "react";
import LanguageFile from "../../../../../../language";
import ExplainWord from "../../../../../../components/Exercices/ExplainWord/explainWord";
export default function Exercice5() {
  useEffect(() => {
    exerciceCounter.push("correct");
    console.log(exerciceCounter);
  }, []);

  const language = localStorage.getItem("language");

  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="71.42%" />

      <div className="exercice_title page_exercice_text">
        <p>Here's a tip!</p>
      </div>


      <ExplainWord
        text1="Verbs with être in the passé composé add '-e' when a woman is speaking and/or '-s' if there is more than one person speaking. Here's the good news: no matter how you write it, it's always pronounced the same!

Look at the examples below:"
        text2="Il est sorti. / Elle est sortie. (He went out. / She went out)"
        text3="Je me suis promené. / Nous nous sommes promenés. (I went for a walk./ We went for a walk)."
      />

      <FooterExercices
        nextExercise={"/learning/exercices/a2/1/1_3/exercice6"}
      />
    </div>
  );
}
