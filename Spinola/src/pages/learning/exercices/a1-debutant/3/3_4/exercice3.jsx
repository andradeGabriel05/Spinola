import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";

export default function Exercice3() {
  return (
    <div className="container_exercise bigger_page">
      <HeaderExercices
        progressExercice="33.33%"
        prevProgressExercice={"22.22%"}
      />

      <div className="exercice_title page_exercice_text">
        <p>New word!</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/752cfce8-45e0-4d36-a916-f2ca37625de3_small.mp4" />

        <div className="exercice_text page_exercice_text text_left">
          <p>nous sommes - Nous sommes français</p>
          <p>vous êtes - Vous êtes impatients !</p>
          <p>ils sont / elles sont - Elles sont américaines.</p>
        </div>
      </div>
      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/3/3_4/exercice4"}
      />
    </div>
  );
}
