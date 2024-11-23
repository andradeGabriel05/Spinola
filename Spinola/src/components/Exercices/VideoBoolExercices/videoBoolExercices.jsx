import "./videoBoolExercices.scss";
import FooterExercices from "../FooterExercices/footerExercices";
import { exerciceCounter } from "../../../global";
export default function VideoBoolExercices({
  answer_1,
  answer_2,
  title,
  correctAnswer,
  question,
  nextExercise,
  last,
}) {
  function verifyAnswer(answer, buttonId) {
    const element = document.getElementById(buttonId);

    console.log(correctAnswer);
    if (answer === correctAnswer) {
      element.style.backgroundColor = "green";
      exerciceCounter.push("correct");
    } else {
      element.style.backgroundColor = "#CA2F0A";
      exerciceCounter.push("wrong");
    }
    document.getElementById("answer1").disabled = true;
    document.getElementById("answer2").disabled = true;
    footerExercicePage.style.display = "flex";
  }
  return (
    <>
      {title && title !== "" && (
        <div className="exercice_text page_exercice_text">
          <p>{title}</p>
        </div>
      )}

      <div className="improvised_text">
        <p>{question}</p>
      </div>

      <div className="page_exercice_text input_type_exercice">
        <div
          className="buttons_anwser"
          id="buttonsAnwserId"
          style={{ marginTop: "10px", width: "100%" }}
        >
          <button
            className="exercice_button"
            id="answer1"
            onClick={() => verifyAnswer(answer_1, "answer1")}
            style={{ width: "100%" }}
          >
            {answer_1}
          </button>
          <button
            className="exercice_button"
            id="answer2"
            onClick={() => verifyAnswer(answer_2, "answer2")}
            style={{ width: "100%" }}
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
        <FooterExercices nextExercise={nextExercise} last={last} />
      </div>
    </>
  );
}
