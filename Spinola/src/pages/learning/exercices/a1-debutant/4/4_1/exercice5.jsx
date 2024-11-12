import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite"
import audio1 from "Spinola/public/recordsExercices/jeSuisNousSommesMexican.mp3"
import audio2 from "Spinola/public/recordsExercices/jeSuisNousSommesMexicaine.mp3"	
import audio3 from "Spinola/public/recordsExercices/jeSuisNousSommesFrancais.mp3"
import audio4 from "Spinola/public/recordsExercices/jeSuisNousSommesFrancaises.mp3"
import "../exercice.scss";
import ExplainWordWithAudio from "../../../../../../components/Exercices/ExplainWordWithAudio/explainWordWithAudio";

export default function Exercice5() {
  return (
    <div className="container_execice bigger_page">
      <HeaderExercices progressExercice="55.55%" prevProgressExercice={"44.44%"}/>

      <div className="exercice_title page_exercice_text">
        <p>Plural forms of adjectives</p>
      </div>

      <ExplainWordWithAudio
        text={`When we talk about more than one person, we add a final -s to the adjective (the word that describes people and things). If there is already an -s at the end of the word we don't add anything.
But either way - don't pronounce the -s!`}
        textAudio1="Je suis mexicain || Nous sommes mexicains"
        audioSrc1={audio1}
        textAudio2="Je suis mexicaine || Nous sommes mexicaines"
        audioSrc2={audio2}
        textAudio3="Je suis français || Nous sommes français"
        audioSrc3={audio3}
        textAudio4="Je suis française || Nous sommes françaises"
        audioSrc4={audio4}
        
      />

      {/* https://cdn.busuu.com/media/resized/audio/a1l681661427808_1661427808.mp3 */}

      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/4/4_1/exercice6"}
      />
    </div>
  );
}
