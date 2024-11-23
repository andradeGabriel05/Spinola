import { useEffect, useState } from "react";
import "./exerciceFinish.scss";
import imageMonument from "Spinola/src/assets/vectors/monuments.png";
import FooterExercices from "../FooterExercices/footerExercices";
import axios from "axios";
import { exerciceCounter } from "../../../global";
// import HeaderExercices from "../HeaderExercices/headerExercices";

export default function exerciceFinish() {

  const username = localStorage.getItem("username");
  const exercices = localStorage.getItem("exercices");
  const timeSpent = localStorage.getItem("timeSpent");
  const correctAnswer = localStorage.getItem("correct");
  const userId = localStorage.getItem("user");

  console.log(exercices);

  const score = (correctAnswer / exercices) * 100;

  console.log("Score: ", score);
  console.log("Points: ", correctAnswer);
  async function handleExerciceResponse() {
    const quantityPoints = correctAnswer;

    if (userId) {
      try {
        await axios
          .put("http://localhost:3300/api/update-user-details", {
            userId,
            pointsValue: quantityPoints,
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error("Error:", error);
          });


          await axios
          .post("http://localhost:3300/api/register-exercise", {
            userId,
            timeSpent,
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.error("User ID not found");
    }
  }

  useEffect(() => {
    handleExerciceResponse();
  }, []);

  return (
    <>
      <div className="container_finish">
        <h1>ASD</h1>
        <div className="images_finish">
          <div className="gif_division">
            <div className="img_gif"></div>
          </div>
          <div className="img_monument">
            <img src={imageMonument} alt="" />
          </div>
        </div>

        <div className="wrapper_text">
          <h1 className="text_finish">Congratulations, {username}!</h1>
        </div>

        <div className="wrapper_boxes">
          <div className="score box">
            <p>Score</p>
            <h3>{score}%</h3>
          </div>
          <div className="points box">
            <p>Points</p>
            <h3>+{correctAnswer}</h3>
          </div>
        </div>
      </div>
      <FooterExercices nextExercise={"/premiere-lecon"} />
    </>
  );
}
