import { Link } from "react-router-dom";
import "./footerExercices.scss";
import axios from "axios";
import { exerciceCounter } from "../../../global";
import { useEffect, useState } from "react";
import exerciceFinish from "../ExerciceFinish/exerciceFinish";
// import { handleSubmit } from "../../../global/handleExercice";

export default function FooterExercices({ nextExercise, last, quantityPoints }) {
  async function handleExerciceResponse(event) {
    event.preventDefault();

    const userId = localStorage.getItem("user");

    if (last && userId) {
      try {
        await axios.put("http://localhost:3300/api/verify-exercise", {
          userId,
        });

        
        await axios.put("http://localhost:3300/api/verify-points", {
          pointsValue: quantityPoints,
          userId,
        });
        window.location.href = "/exercise-finish";
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.error("User ID not found");
    }
  }

  const [exerciceCounterOnclick, setExerciceCounterOnclick] = useState(0);

  function handleExerciceCounter() {
    setExerciceCounterOnclick(exerciceCounterOnclick + 1);
    console.log(exerciceCounterOnclick);
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
