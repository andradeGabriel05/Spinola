import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import ExplainWord from "../../../../../../components/Exercices/ExplainWord/explainWord";
import "../exercice.scss";

export default function Exercice9() {
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="90%" />

      <div className="exercice_title page_exercice_text">
        <p>👋 Enchantée 👋</p>
      </div>

      <ExplainWord
        text1="To say 'nice to meet you' men use 'enchanté'👨 and women use "
        text2="'enchantée'👩 (with an extra final 'e'). "
        text3="They are pronounced in the same way! "
      />

      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/2/2_1/exercice10"}
      />
    </div>
  );
}
