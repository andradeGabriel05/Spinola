import "./explainWord.scss";

export default function ExplainWord({text1, text2, text3, text4}) {
  return (
    <div className="exercice_title page_exercice_text exercice_explain">
      <div className="text_explain">
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{text3}</p>
        <p>{text4}</p>
      </div>
    </div>
  );
}
