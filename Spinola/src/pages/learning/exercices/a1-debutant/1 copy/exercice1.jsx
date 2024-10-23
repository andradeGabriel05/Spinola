import { Link } from "react-router-dom";
import HeaderExercices from "../../../../../components/Exercices/HeaderExercices/headerExercices";
import "./exercice1.scss";

export default function Exercice1() {
  return (
    <>
      <HeaderExercices progressExercice="25%" />

      <div className="exercice-container">
        <div className="exercice-wrapper">
          <div className="video-player-container">
            <video controls autoPlay={true}>
              <source
                src="https://cdn.busuu.com/media-resources/video/mp4/85f20432-442d-482f-af59-7ad987f152c2_small.mp4"
                type="video/mp4"
              />
            </video>
            <div className="text">
              <p>Bonjour</p> <p>Hello</p>
            </div>
          </div>
        </div>
      </div>

      <div className="box-continue">
        <div className="wrapper_footer">
          <div className="bottom-next-exercice">
            <Link to="/exercice2">
              <button className="btn-continue">Continue</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
