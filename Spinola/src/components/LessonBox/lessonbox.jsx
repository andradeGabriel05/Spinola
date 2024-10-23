import { Link } from "react-router-dom";
import "./lessonbox.scss";

export default function LessonBox({ title, description, img, to }) {
  return (
    <Link to={to}>
      <div className="lessons_content">
        <div className="lesson_icon">
          <img
            src={img}
            alt="icon_lesson"
          />
        </div>
        <div className="lesson_box">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}
