import { Link } from "react-router-dom";
import "./bookCard.scss";

export default function BookCard({ cover, linkDownload, title, author }) {
  return (
    <div className="wrapper_book_card">
      <div className="card_book">
        <Link to={linkDownload}>
        <img src={cover} alt={title} />
        </Link>

          <p className="title">{title}</p>
          <p>{author}</p>
      </div>
      <Link to={linkDownload}>
        <button>Telechargé livre</button>
      </Link>
    </div>
  );
}
