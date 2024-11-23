import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import audio1 from "Spinola/public/recordsExercices/lesAmis.mp3";
import audio2 from "Spinola/public/recordsExercices/unPeu.mp3";
import audio3 from "Spinola/public/recordsExercices/souvent.mp3";
import audio4 from "Spinola/public/recordsExercices/l_auberge.mp3";
import "../exercice.scss";
import ExplainWordWithAudio from "../../../../../../components/Exercices/ExplainWordWithAudio/explainWordWithAudio";

export default function Exercice1() {
  return (
    <div className="container_exercise bigger_page">
      <HeaderExercices progressExercice="9.09%" prevProgressExercice={"0%"} />

      <div className="exercice_title page_exercice_text">
        <p>Salut ! 👋</p>
      </div>

      <ExplainWordWithAudio
        text="Let's meet Lison and her friends who she shares a flat in Paris with. But first we'll have a look at some key words we'll need for this lesson. "
        textAudio1="les amis: friends"
        audioSrc1={audio1}
        textAudio2="un peu: a little"
        audioSrc2={audio2}
        textAudio3="souvent: often"
        audioSrc3={audio3}
        textAudio4="l'auberge espagnole: the hostel or place where cultures are mixed together "
        audioSrc4={audio4}
      />

      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/4/4_2/exercice2"}
      />
    </div>
  );
}
