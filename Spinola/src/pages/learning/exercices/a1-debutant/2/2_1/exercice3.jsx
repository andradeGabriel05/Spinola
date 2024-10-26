import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import ExplainWord from "../../../../../../components/Exercices/ExplainWord/explainWord";
import "../exercice.scss";

export default function Exercice3() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="30%" />

      <div className="exercice_title page_exercice_text">
        <p>👋 Bonjour or salut? 👋</p>
      </div>

      <ExplainWord
        text1="salut"
        text2="- to our family"
        text3="- to our friends"
        text4="- in any other informal context"
      />

      <FooterExercices
        nextExercise={"/learning/exercices/premiere-lessons/2/2_1/exercice4"}
      />
    </div>
  );
}
