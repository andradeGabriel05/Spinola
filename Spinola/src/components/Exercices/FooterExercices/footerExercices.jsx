import { Link } from "react-router-dom";
import "./footerExercices.scss";
import axios from "axios";
import { exerciceCounter } from "../../../global";
import { useEffect, useState } from "react";
import exerciceFinish from "../ExerciceFinish/exerciceFinish";
// import { handleSubmit } from "../../../global/handleExercice";

export default function FooterExercices({
  nextExercise,
  last,
}) {
  console.log(exerciceCounter.length);
  async function handleExerciceResponse(event) {
    event.preventDefault();
    let correct = 0;
    for(let i = 0; i < exerciceCounter.length; i++){
      if(exerciceCounter[i].includes("correct")) {
        correct++;
      } else {
        console.log("error");
      }
    }
    console.log(correct);
    localStorage.setItem("correct", correct);
    localStorage.setItem("exercices", exerciceCounter.length);
    window.location.href = "/exercise-finish";

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
              <button className="btn-continue">Continue</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
