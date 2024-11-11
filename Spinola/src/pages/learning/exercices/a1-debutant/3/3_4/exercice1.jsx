import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import ExplainWord from "../../../../../../components/Exercices/ExplainWord/explainWord";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";

export default function Exercice1() {
  return (
    <div className="container_execice">
      <HeaderExercices progressExercice="11.11%" prevProgressExercice={"0%"} />

      <div className="exercice_title page_exercice_text">
        <p>Let's quickly review the singular forms of "être"</p>
      </div>

      <ExplainWord 
      text1="- Je suis fatiguée. (I am tired.)" 
      text2="- Tu es français ? (Are you French?)"
      text3="- Il est impatient. (He is impatient.)"
/>

      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/3/3_4/exercice2"}
      />
    </div>
  );
}
