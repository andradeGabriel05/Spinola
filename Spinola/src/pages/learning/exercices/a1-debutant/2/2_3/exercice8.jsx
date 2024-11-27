import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import VideoInputExercices from "../../../../../../components/Exercices/VideoInputExercices/videoInputExercices";
import ExerciceWrite from "../../../../../../components/Exercices/ExerciceWrite/exerciceWrite";
import "../exercice.scss";
import ExerciceWithoutVideo from "../../../../../../components/Exercices/ExerciceWithoutVideo/exerciceWithoutVideo";

import LanguageFile from "../../../../../../language";
export default function Exercice8() {
  const language = localStorage.getItem("language");
  return (
    <div className="container_exercise">
      <HeaderExercices progressExercice="72.72%" prevProgressExercice="63.63" />

      <div className="exercice_title page_exercice_text">
        <p>{LanguageFile.exerciseTitles[language].completeSentence}</p>
      </div>
      <div className="wrapper_video_enunciate">
        <VideoExercices
          videoSrc={
            "https://cdn.busuu.com/media-resources/video/mp4/08bad191-1113-48d2-a363-b16bd76d9090_small.mp4"
          }
        />
      </div>

      <div className="exercice_text page_exercice_text">
        <p>{LanguageFile.exercise2_3[language].e8.text}</p>
      </div>

      <ExerciceWithoutVideo
        answer_1="Je suis contente et il est content aussi."
        answer_2="Je suit contente et il es content aussi."
        answer_3={"Je suit contente et il est content aussi."}
        answer_4={"Je suis contente et il es content aussi."}
        correctAnswer="Je suis contente et il est content aussi."
        nextExercise={"/learning/exercices/first-lessons/2/2_3/exercice9"}
      />
    </div>
  );
}
