import HeaderExercices from "../../../../../../components/Exercices/HeaderExercices/headerExercices";
import VideoExercices from "../../../../../../components/Exercices/VideoExercices/videoExercices";
import FooterExercices from "../../../../../../components/Exercices/FooterExercices/footerExercices";
import "../exercice.scss";

export default function Exercice1() {
  return (
    <div className="container_exercise bigger_page">
      <HeaderExercices progressExercice="11.11%" prevProgressExercice={"0%"} />

      <div className="exercice_title page_exercice_text">
        <p>Meet Fed, Mounia and Sophie in the office.</p>
      </div>

      <div className="wrapper_video_enunciate">
        <VideoExercices videoSrc="https://cdn.busuu.com/media-resources/video/mp4/0c91eea8-5c8d-4b8c-87a2-3b3fef357ee7_small.mp4" />

        <div className="exercice_text page_exercice_text text_left">
          <p>Mounia: Bonjour Fed !</p>
          <p>Fed: Salut Mounia, ça va ? Tu es fatiguée ?</p>
          <p>Mounia: Pff ... Oui, je suis fatiguée ! Et toi, ça va ?</p>
          <p>Fed: Bien merci, je suis content aujourd'hui.</p>
          <p>Sophie: Salut, je m'appelle Sophie. Enchantée !</p>
          <p>Mounia: Salut Sophie, je m'appelle Mounia.</p>
          <p>Fed: Bonjour Sophie, je m'appelle Fed. Enchanté !</p>
        </div>
      </div>
      <FooterExercices
        nextExercise={"/learning/exercices/first-lessons/3/3_1/exercice2"}
      />
    </div>
  );
}
