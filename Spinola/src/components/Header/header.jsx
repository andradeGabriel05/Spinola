import "./header.scss";

export default function Header() {
  return (
    <header>
      {/* ironic */}
      <div className="container_header"> 
        <div className="left_side">
          <div className="logo">
            <h1>Spinola</h1>
          </div>
          <div className="header_links">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right_side">
          <div className="user">
            <a href="/login" className="login">
              Login
            </a>
            <a href="/register" className="register">
              Register
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

{
  /* 
        <div className="user_profile">
          <img src="https://via.placeholder.com/50" alt="Profile" />
          <span>John Doe</span>
        </div> */
}
