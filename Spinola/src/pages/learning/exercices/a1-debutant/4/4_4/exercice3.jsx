import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";

import LanguageFile from "../../../../../../Language";
export default function Exercice3() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise bigger_page">
      <HeaderExercices
        progressExercice="33.33%"
        prevProgressExercice={"22.22%"}
      />

      <div className="exercice_title page_exercice_text">
      <p>{LanguageFile.exerciseTitles[language].completeSentence}</p>

      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/a6abc7ab-c803-4443-a12a-6490986b6518_small.mp4" />

        <VideoInputExercices 
          answer_1="sommes"
          answer_2="êtes"
          answer_3="est"
          answer_4="suis"
          sentenceText1="Vous "
          sentenceText2="anglais ? Je "
          sentenceText3=" aussi anglaise."
          correctAnswer="êtes"
          correctAnswer2="suis"
          nextExercise="/learning/exercices/first-lessons/4/4_4/exercice4"
          />
      </div>
    </div>
  );
}

// https://cdn.busuu.com/media-resources/video/mp4/a6abc7ab-c803-4443-a12a-6490986b6518_small.mp4
