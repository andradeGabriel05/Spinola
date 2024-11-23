import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExplainWord from "../../../../../../components/Exercices/ExplainWord/explainWord";
import "../exercice.scss";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";

export default function Exercice4() {
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="44.44%" prevProgressExercice="33.33%"/>

      <div className="exercice_title page_exercice_text">
        <p>Explaining Ça va.</p>
      </div>

      <ExplainWord
        text1="Ça va"
        text2='You can use "ça va" to ask someone how they are doing.'
        text3='If someone asks you, you can simply respond with "Ça va" (It′s fine).'
        text4='You can also use it to indicate that something is acceptable or to agree with a situation.'
      />

      <FooterExercices nextExercise={"/learning/exercices/first-lessons/2/2_2/exercice5"} />
    </div>
  );
}
