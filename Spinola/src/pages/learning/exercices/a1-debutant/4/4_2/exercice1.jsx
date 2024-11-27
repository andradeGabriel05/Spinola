import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import audio1 from "Spinola/public/recordsExercices/lesAmis.mp3";
import audio2 from "Spinola/public/recordsExercices/unPeu.mp3";
import audio3 from "Spinola/public/recordsExercices/souvent.mp3";
import audio4 from "Spinola/public/recordsExercices/l_auberge.mp3";
import "../exercice.scss";
import ExplainWordWithAudio from "../../../../../../components/Exercices/ExplainWordWithAudio/explainWordWithAudio";
import { useEffect } from "react";
import { exerciceCounter } from "../../../../../../global";

import LanguageFile from "../../../../../../language";

export default function Exercice1() {
  useEffect(() => {
    exerciceCounter.length = 0

    console.log(exerciceCounter);
  }, []);

  const language = localStorage.getItem("language");

  return (
    <div className="container_exercise bigger_page">
      <HeaderExercices progressExercice="14.28%" prevProgressExercice={"0%"} />

      <div className="exercice_title page_exercice_text">
        <p>Salut ! 👋</p>
      </div>

      <ExplainWordWithAudio
        text={LanguageFile.exercise4_2[language].e1.text1}
        textAudio1={LanguageFile.exercise4_2[language].e1.text2}
        audioSrc1={audio1}
        textAudio2={LanguageFile.exercise4_2[language].e1.text3}
        audioSrc2={audio2}
        textAudio3={LanguageFile.exercise4_2[language].e1.text4}
        audioSrc3={audio3}
        textAudio4={LanguageFile.exercise4_2[language].e1.text5}
        audioSrc4={audio4}
      />

      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/4/4_2/exercice2"}
      />
    </div>
  );
}
