import "./footer.scss";

export default function footer() {
  return (
    <footer>
      <div className="container_main_footer">
        <div className="logo">
          <h1>Spinola</h1>
        </div>
        <div className="footer_content_social_media">
          <ul>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
          </ul>
        </div>
        <div className="footer_content_links">
          <ul>
            <li>
              <a href="/">Mentions légales</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Plan du site</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_content_copyright">
        <p>© Spinola 2024. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
