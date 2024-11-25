import { Link } from "react-router-dom";
import "./lessonbox.scss";

export default function LessonBox({
  title,
  description,
  img,
  link,
  idExercice,
  isDone,
}) {
  return (
    <Link to={link}>
      <div className="lessons_content">
        <div className="lesson_icon">
          <img src={img} alt="icon_lesson" />
          <div className="img_done" id={`exercise${idExercice}`}>
            {isDone ? (
              <img
                src="https://as2.ftcdn.net/v2/jpg/01/11/33/47/1000_F_111334729_k7GzccfbcnqitdhZ2FxgnilOprXQeAmE.jpg"
                alt="done_icon"
              />
            ) : (
              <span></span>
            )}
          </div>
        </div>
        <div className="lesson_box">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}
