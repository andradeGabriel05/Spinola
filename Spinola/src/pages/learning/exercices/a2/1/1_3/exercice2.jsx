import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import "../exercice.scss";
import LanguageFile from "../../../../../../language";

export default function Exercice2() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="28.57%" />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].completeSentence}</p>
      </div>

      <div className="wrapper_video_enunciate">
        <div className="wrapper_video_enunciate">
          <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/8841d1d9-08d9-48b7-a6ff-e9c565317b65_small.mp4" />

          <VideoInputExercices
            sentenceText1="Sandra "
            sentenceText2=" "
            sentenceText3=" "
            answer_1="sortie"
            answer_2="est"
            answer_3="sorti"
            answer_4="ai"
            correctAnswer="est"
            correctAnswer2="sortie"
            nextExercise={"/learning/exercices/a2/1/1_3/exercice3"}
          />
        </div>
      </div>
    </div>
  );
}
