import "./videoInputExercices.scss";
import FooterExercices from "../FooterExercices/footerExercices";
import { useEffect, useState } from "react";
export default function VideoInputExercices({
  answer_1,
  answer_2,
  sentenceText1,
  sentenceText2,
  nextExercise,
}) {
  function verifyAnswer(answer) {
    if (answer === "correct") {
      const element = document.getElementById("answer1");
      const target = document.getElementById("exerciceResonseId");
      target.appendChild(element);

      element.style.backgroundColor = "green";
      footerExercicePage.style.display = "flex";

      const element2 = document.getElementById("answer2");
      element.disabled = true;
      element2.disabled = true;
    } else {
      const element = document.getElementById("answer2");
      const target = document.getElementById("exerciceResonseId");

      target.appendChild(element);

      footerExercicePage.style.display = "flex";
      element.style.backgroundColor = "#CA2F0A";
      const element2 = document.getElementById("answer1");
      footerExercicePage.style.display = "flex";
      element.disabled = true;
      element2.disabled = true;
    }
  }
  return (
    <>
      <div className="page_exercice_text input_type_exercice">
        <div className="text_exercice_multivalued">
          <span>{sentenceText1}</span>
          <span
            id="exerciceResonseId"
            className="page_exercice_text exercice_resonse_span"
            disabled
          />
          <span>{sentenceText2}</span>
        </div>
        <div className="buttons_anwser" id="buttonsAnwserId">
          <button
            className="exercice_button"
            id="answer1"
            onClick={() => verifyAnswer("correct")}
          >
            {answer_1}
          </button>
          <button
            className="exercice_button"
            id="answer2"
            onClick={() => verifyAnswer("wrong")}
          >
            {answer_2}
          </button>
        </div>
      </div>

      <div
        className="footer_exercice"
        id="footerExercicePage"
        style={{ display: "none" }}
      >
        <FooterExercices nextExercise={nextExercise} />
      </div>
    </>
  );
}
