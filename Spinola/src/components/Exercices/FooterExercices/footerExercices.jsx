import { Link } from "react-router-dom";
import "./footerExercices.scss";
import axios from "axios";
import { exerciceCounter } from "../../../global";
import { useEffect, useState } from "react";
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

  const [exerciceCounterOnclick, setExerciceCounterOnclick] = useState(0);

  function handleExerciceCounter() {
    setExerciceCounterOnclick(exerciceCounterOnclick + 1)
    console.log(exerciceCounterOnclick)
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
            </form>
          ) : (
            <Link to={nextExercise}>
              <button className="btn-continue" onClick={handleExerciceCounter}>
                Continue
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
