import "./exerciceWithoutVideo.scss";
import FooterExercices from "../FooterExercices/footerExercices";
export default function ExerciceWithoutVideo({
  answer_1,
  answer_2,
  answer_3,
  answer_4,
  question,
  nextExercise,
}) {
  function verifyAnswer(buttonId, answer) {
    const element = document.getElementById(buttonId);

    if (answer === "correct") {
      element.style.backgroundColor = "green";
    } else {
      element.style.backgroundColor = "#CA2F0A";
    }

    footerExercicePage.style.display = "flex";

    // Desabilitar todos os botões
    document.getElementById("answer1").disabled = true;
    document.getElementById("answer2").disabled = true;
    document.getElementById("answer3").disabled = true;
    document.getElementById("answer4").disabled = true;
  }

  return (
    <>
      <div className="page_exercice_text input_type_exercice">
        <div
          className="buttons_anwser"
          id="buttonsAnwserId"
          style={{ marginTop: "10px", width: "100%", display: "block" }}
        >
          <button
            className="exercice_button"
            id="answer1"
            onClick={() => verifyAnswer("answer1", "correct")}
            style={{ width: "100%" }}
          >
            {answer_1}
          </button>
          <button
            className="exercice_button"
            id="answer2"
            onClick={() => verifyAnswer("answer2", "wrong")}
            style={{ width: "100%" }}
          >
            {answer_2}
          </button>
          <button
            className="exercice_button"
            id="answer3"
            onClick={() => verifyAnswer("answer3", "wrong")}
            style={{ width: "100%" }}
          >
            {answer_3}
          </button>
          <button
            className="exercice_button"
            id="answer4"
            onClick={() => verifyAnswer("answer4", "wrong")}
            style={{ width: "100%" }}
          >
            {answer_4}
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
