import "./exerciceWrite.scss";
import FooterExercices from "../FooterExercices/footerExercices";
import { exerciceCounter } from "../../../global";
export default function ExerciceWrite({
  sentenceText1,
  sentenceText2,

  correctAnswer,
  nextExercise,
  last,
  chapter,
  exercise
}) {
  function verifyAnswer() {
    const input = document.getElementById("userAnswerId").value.toLowerCase();
    if (input === correctAnswer.toLowerCase()) {
      document.getElementById("userAnswerId").style.backgroundColor = "green";
      document.getElementById("userAnswerId").style.color = "#fff";

      document.getElementById("userAnswerId").disabled = true;
      footerExercicePage.style.display = "flex";
      console.log(true);
      
      exerciceCounter.push("correct1");
    }
    console.log(input);
  }
  return (
    <>
      <div className="page_exercice_text input_type_exercice">
        <div className="text_exercice_multivalued">
          <span>{sentenceText1}</span>
          <input
            className="page_exercice_text exercice_resonse_span input_write"
            type="text"
            name=""
            id="userAnswerId"
            placeholder="Type here"
            onKeyUp={verifyAnswer}
          />

          <span>{sentenceText2}</span>
        </div>
      </div>

      <div
        className="footer_exercice"
        id="footerExercicePage"
        style={{ display: "none" }}
      >
        <FooterExercices nextExercise={nextExercise} last={last} chapter={chapter} exercise={exercise} />
      </div>
    </>
  );
}
