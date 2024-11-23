import ExplainWord from "../../../../../../components/Exercices/ExplainWord/explainWord";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import "../exercice.scss";

export default function Exercice2() {
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="18.18%" prevProgressExercice="9.09%" />

      <div className="exercice_title page_exercice_text">
        <p>Être - être fatigué, être contente </p>
      </div>

      <ExplainWord
        text1={`'Être' means to be. It helps us talk about who we are or how we feel. `}
        text2="It is an essential verb used to describe identity, existence, and describe emotions."
        text3="Singular: je suis (I am), tu es (You are, informal), Il/elle/on est (He is/She is/we are),

"
        text4={`Plural: nous sommes (We are), vous êtes (You are, formal or plural), ils/elles sont (They are, masculine/feminine)`}
        text5={`"on" is often used informally to mean "we" or to refer to people in general.`}
      />

      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/2/2_3/exercice3"}
      />
    </div>
  );
}
