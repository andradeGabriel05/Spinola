import { useEffect, useState } from "react";
import "./exerciceFinish.scss";
import imageMonument from "Spinola/src/assets/vectors/monuments.png";
import FooterExercices from "../FooterExercices/footerExercices";
import axios from "axios";
import { exerciceCounter } from "../../../global";
import LanguageFile from "../../../language.json";
// import HeaderExercices from "../HeaderExercices/headerExercices";

export default function ExerciceFinish() {
  const username = localStorage.getItem("username");
  const exercices = localStorage.getItem("exercices");
  const timeSpent = localStorage.getItem("timeSpent");
  const correctAnswer = localStorage.getItem("correct");
  const chapter = localStorage.getItem("chapter");
  const exerciseMade = localStorage.getItem("exerciseMade");
  const userId = localStorage.getItem("user");
  const language = localStorage.getItem("language");
  const level = localStorage.getItem("level");
  console.log(level);
  console.log(exercices);

  const score = Number((correctAnswer / exercices) * 100).toFixed(2);

  console.log("Score: ", score);
  console.log("Points: ", correctAnswer);
  async function handleExerciceResponse() {
    const quantityPoints = correctAnswer;

    if (userId) {
      try {
        const dayStrikeVerification = await axios.get(
          `http://localhost:3300/api/update-day-strike-verification?userId=${userId}`
        );
        console.log(dayStrikeVerification)
        if (dayStrikeVerification.data.length < 1) {
          const dayStrikeIncrement = await axios.put(
            `http://localhost:3300/api/update-day-strike`,
            {
              userId,
            }
          );
          console.log(dayStrikeIncrement);
        }

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
            chapter,
            exercise: exerciseMade,
            level
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
        <div className="images_finish">
          <div className="gif_division">
            <div className="img_gif"></div>
          </div>
          <div className="img_monument">
            <img src={imageMonument} alt="" />
          </div>
        </div>

        <div className="wrapper_text">
          <h1 className="text_finish">{LanguageFile.exerciseTitles[language].congratulations}, {username}!</h1>
        </div>

        <div className="wrapper_boxes">
          <div className="score box">
            <p>{LanguageFile.exerciseTitles[language].score}</p>
            <h3>{score}%</h3>
          </div>
          <div className="points box">
            <p>{LanguageFile.exerciseTitles[language].points}</p>
            <h3>+{correctAnswer}</h3>
          </div>
        </div>
      </div>
      {level && level == "A1" ? (
        <FooterExercices nextExercise={"/premiere-lecon"} />
       ) : (
          <FooterExercices nextExercise={"/timeline/a2"} />
       )}
      
    </>
  );
}
