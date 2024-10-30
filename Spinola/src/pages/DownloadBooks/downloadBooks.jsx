import { Link } from "react-router-dom";
import "./downloadBooks.scss";
import React from "react";
import BookCard from "../../components/Books/BookCard/bookCard";
export default function DownloadBooks() {
  return (
    <div className="container_books">
      <div className="input_search_books">
        <input type="text" placeholder="Search" />
      </div>
      <div className="content_books">
        <div className="wrapper_books">
          <h1>Livres - Project Gutenberg</h1>
          <div className="books_card">
            <BookCard
              cover="https://www.gutenberg.org/cache/epub/5250/pg5250.cover.medium.jpg"
              title="Nana"
              author="Émile Zola"
              linkDownload="https://www.gutenberg.org/ebooks/5250.epub3.images"
            />
            <BookCard
              cover="https://www.gutenberg.org/cache/epub/62215/pg62215.cover.medium.jpg"
              title="Le Fantôme de l'Opéra"
              author="Gaston Leroux"
              linkDownload="https://www.gutenberg.org/ebooks/62215.epub3.images"
            />
            <BookCard
              cover="https://www.gutenberg.org/cache/epub/32854/pg32854.cover.medium.jpg"
              title="Arsène Lupin, gentleman-cambrioleur"
              author="Maurice Leblanc"
              linkDownload="https://www.gutenberg.org/ebooks/32854.epub3.images"
            />
            <BookCard
              cover="https://www.gutenberg.org/cache/epub/4791/pg4791.cover.medium.jpg"
              title="Voyage au Centre de la Terre"
              author="Jules Verne"
              linkDownload="https://www.gutenberg.org/ebooks/4791.epub3.images"
            />
            <BookCard
              cover="https://www.gutenberg.org/cache/epub/54873/pg54873.cover.medium.jpg"
              title="Vingt mille lieues sous les mers"
              author="Jules Verne"
              linkDownload="https://www.gutenberg.org/ebooks/54873.epub3.images"
            />
            <BookCard
              cover="https://www.gutenberg.org/cache/epub/5423/pg5423.cover.medium.jpg"
              title="L'homme Qui Rit"
              author="Victor Hugo"
              linkDownload="https://www.gutenberg.org/ebooks/5423.epub3.images"
            />
            <BookCard
              cover="https://www.gutenberg.org/cache/epub/800/pg800.cover.medium.jpg"
              title="Le tour du monde en quatre-vingts jours"
              author="Victor Hugo"
              linkDownload="https://www.gutenberg.org/ebooks/5423.epub3.images"
            />
            <BookCard
              cover="https://www.gutenberg.org/cache/epub/5711/pg5711.cover.medium.jpg"
              title="Germinal"
              author="Émile Zola"
              linkDownload="https://www.gutenberg.org/ebooks/5711.epub3.images"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
