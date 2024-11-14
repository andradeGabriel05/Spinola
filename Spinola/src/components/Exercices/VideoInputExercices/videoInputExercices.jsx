import "./videoInputExercices.scss";
import FooterExercices from "../FooterExercices/footerExercices";
import { useEffect, useState } from "react";
export default function VideoInputExercices({
  answer_1,
  answer_2,
  answer_3,
  answer_4,
  answer_5,
  sentenceText1,
  sentenceText2,
  sentenceText3,
  sentenceText4,
  correctAnswer,
  correctAnswer2,
  correctAnswer3,
  nextExercise,
}) {
  var answeredOnce = false;
  var answeredTwice = false;
  function verifyAnswer(buttonId, answer) {
    if (!answeredOnce) {
      const element = document.getElementById(buttonId);
      const target = document.getElementById("exerciceResonseId");
      target.appendChild(element);
      if (answer === correctAnswer) {
        element.style.backgroundColor = "green";
      } else {
        element.style.backgroundColor = "#CA2F0A";
      }

      answeredOnce = true;

      if (correctAnswer2 == null) {
        document.getElementById("answer1").disabled = true;
        document.getElementById("answer2").disabled = true;
        if (answer_3) document.getElementById("answer3").disabled = true;
        if (answer_4) document.getElementById("answer4").disabled = true;
        footerExercicePage.style.display = "flex";
      }
    } else if (!answeredTwice) {
      const element = document.getElementById(buttonId);
      const target2 = document.getElementById("exerciceResonseId2");
      target2.appendChild(element);

      if (answer === correctAnswer2) {
        element.style.backgroundColor = "green";
      } else {
        element.style.backgroundColor = "#CA2F0A";
      }

      answeredTwice = true;

      if (correctAnswer3 == null) {
        document.getElementById("answer1").disabled = true;
        document.getElementById("answer2").disabled = true;
        if (answer_3) document.getElementById("answer3").disabled = true;
        if (answer_4) document.getElementById("answer4").disabled = true;
        footerExercicePage.style.display = "flex";
      }
    } else {
      const element = document.getElementById(buttonId);
      const target3 = document.getElementById("exerciceResonseId3");
      target3.appendChild(element);

      if (answer === correctAnswer3) {
        element.style.backgroundColor = "green";
      } else {
        element.style.backgroundColor = "#CA2F0A";
      }

      document.getElementById("answer1").disabled = true;
      document.getElementById("answer2").disabled = true;
      if (answer_3) document.getElementById("answer3").disabled = true;
      if (answer_4) document.getElementById("answer4").disabled = true;
      footerExercicePage.style.display = "flex";
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

          {sentenceText3 && (
            <>
              <span
                id="exerciceResonseId2"
                className="page_exercice_text exercice_resonse_span"
                disabled
              />
              <span>{sentenceText3}</span>
            </>
          )}
          {sentenceText4 && (
            <>
              <span
                id="exerciceResonseId3"
                className="page_exercice_text exercice_resonse_span"
                disabled
              />
              <span>{sentenceText4}</span>
            </>
          )}
        </div>
        <div className="buttons_anwser" id="buttonsAnwserId">
          <button
            className="exercice_button"
            id="answer1"
            onClick={() => verifyAnswer("answer1", answer_1)}
          >
            {answer_1}
          </button>
          <button
            className="exercice_button"
            id="answer2"
            onClick={() => verifyAnswer("answer2", answer_2)}
          >
            {answer_2}
          </button>

          {answer_3 && (
            <button
              className="exercice_button"
              id="answer3"
              onClick={() => verifyAnswer("answer3", answer_3)}
            >
              {answer_3}
            </button>
          )}

          {answer_4 && (
            <button
              className="exercice_button"
              id="answer4"
              onClick={() => verifyAnswer("answer4", answer_4)}
            >
              {answer_4}
            </button>
          )}

          {answer_5 && (
            <button
              className="exercice_button"
              id="answer5"
              onClick={() => verifyAnswer("answer5", answer_5)}
            >
              {answer_5}
            </button>
          )}
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
