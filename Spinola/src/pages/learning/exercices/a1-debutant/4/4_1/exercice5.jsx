import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import audio1 from "Spinola/public/recordsExercices/jeSuisNousSommesMexican.mp3";
import audio2 from "Spinola/public/recordsExercices/jeSuisNousSommesMexicaine.mp3";
import audio3 from "Spinola/public/recordsExercices/jeSuisNousSommesFrancais.mp3";
import audio4 from "Spinola/public/recordsExercices/jeSuisNousSommesFrancaises.mp3";
import "../exercice.scss";
import ExplainWordWithAudio from "../../../../../../components/Exercices/ExplainWordWithAudio/explainWordWithAudio";

import LanguageFile from "../../../../../../language.json";
export default function Exercice5() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise bigger_page">
      <HeaderExercices
        progressExercice="45.45%"
        prevProgressExercice={"36.36%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exercise4_1[language].e5.title}</p>
      </div>

      <ExplainWordWithAudio
        text={LanguageFile.exercise4_1[language].e5.text}
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
