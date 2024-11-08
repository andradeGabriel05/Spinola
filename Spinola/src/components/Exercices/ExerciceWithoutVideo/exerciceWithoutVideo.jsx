import "./exerciceWithoutVideo.scss";
import FooterExercices from "../FooterExercices/footerExercices";
export default function ExerciceWithoutVideo({
  answer_1,
  answer_2,
  answer_3,
  answer_4,
  correctAnswer,
  nextExercise,
}) {
  function verifyAnswer(buttonId, answer) {
    const element = document.getElementById(buttonId);

    if (answer === correctAnswer) {
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
      <div className="page_exercice_text input_type_exercice ">
        <div
          className="buttons_anwser"
          id="buttonsAnwserId"
          style={{ marginTop: "10px", width: "100%", display: "block" }}
        >
          <button
            className="exercice_button multiple_buttons"
            id="answer1"
            onClick={() => verifyAnswer("answer1", answer_1)}
            style={{ width: "100%" }}
          >
            {answer_1}
          </button>
          <button
            className="exercice_button multiple_buttons"
            id="answer2"
            onClick={() => verifyAnswer("answer2", answer_2)}
            style={{ width: "100%" }}
          >
            {answer_2}
          </button>
          <button
            className="exercice_button multiple_buttons"
            id="answer3"
            onClick={() => verifyAnswer("answer3", answer_3)}
            style={{ width: "100%" }}
          >
            {answer_3}
          </button>
          {answer_4 && answer_4 !== "" && (
            <button
              className="exercice_button multiple_buttons"
              id="answer4"
              onClick={() => verifyAnswer("answer4", answer_4)}
              style={{ width: "100%" }}
            >
              {answer_4}
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
