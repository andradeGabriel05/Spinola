import React from "react";
import "./exerciceFinish.scss";
import imageMonument from "Spinola/src/assets/vectors/monuments.png";
import FooterExercices from "../FooterExercices/footerExercices";
// import HeaderExercices from "../HeaderExercices/headerExercices";

export default function exerciceFinish() {
  const username = localStorage.getItem("username");
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
            <h3>100%</h3>
          </div>
          <div className="points box">
            <p>Points</p>
            <h3>+5</h3>
          </div>
        </div>
      </div>
      <FooterExercices
        nextExercise={"/premiere-lecon"}
      />
    </>
  );
}
