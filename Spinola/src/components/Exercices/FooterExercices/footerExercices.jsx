import { Link } from "react-router-dom";
import "./footerExercices.scss";
import axios from "axios";
// import { handleSubmit } from "../../../global/handleExercice";

export default function FooterExercices({ nextExercise, last }) {
  async function handleExerciceResponse(event) {
    event.preventDefault();
    if (last) {
      try {
        await axios.put(`http://localhost:3300/verify-exercice`);
        window.location.href = "/premiere-lecon";
      } catch (error) {
        console.error("Error:", error);
      }
    }
  }

  return (
    <div className="box-continue">
      <div className="wrapper_footer">
        <div className="bottom-next-exercice">
          {last && last ? (
            <form onSubmit={handleExerciceResponse}>
              <button className="btn-continue" type="Submit">
                Continue
              </button>
              <input type="submit" hidden />
            </form>
          ) : (
            <Link to={nextExercise}>
              <button className="btn-continue" type="Submit">
                Continue
              </button>
              <input type="submit" hidden />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
