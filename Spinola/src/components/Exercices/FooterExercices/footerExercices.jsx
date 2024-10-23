import { Link } from "react-router-dom";
import "./footerExercices.scss";

export default function FooterExercices({ nextExercise }) {
  return (
    <div className="box-continue">
      <div className="wrapper_footer">
        <div className="bottom-next-exercice">
          <Link to={nextExercise} rel="preload">
            <button className="btn-continue">Continue</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
