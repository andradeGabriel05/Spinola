import "./videoBoolExercices.scss";
import FooterExercices from "../FooterExercices/footerExercices";
export default function VideoBoolExercices({
  answer_1,
  answer_2,
  title,
  question,
  nextExercise,
}) {
  function verifyAnswer(answer) {
    if (answer === "correct") {
      const element = document.getElementById("answer1");

      element.style.backgroundColor = "green";
      footerExercicePage.style.display = "flex";

      const element2 = document.getElementById("answer2");
      element.disabled = true;
      element2.disabled = true;
    } else {
      const element = document.getElementById("answer2");

      footerExercicePage.style.display = "flex";
      element.style.backgroundColor = "#CA2F0A";
      const element2 = document.getElementById("answer1");
      element.disabled = true;
      element2.disabled = true;
    }
  }
  return (
    <>
      <div className="exercice_text page_exercice_text">
        <p>{title}</p>
      </div>
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
            onClick={() => verifyAnswer("correct")}
            style={{ width: "100%" }}
          >
            {answer_1}
          </button>
          <button
            className="exercice_button"
            id="answer2"
            onClick={() => verifyAnswer("wrong")}
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
        <FooterExercices nextExercise={nextExercise} />
      </div>
    </>
  );
}
