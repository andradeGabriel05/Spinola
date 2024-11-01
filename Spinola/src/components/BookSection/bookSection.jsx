import { Link } from "react-router-dom";

export default function BookSection() {
    return (
        <section className="books_section">
            <div className="books_container">
                <div className="content">
                    <div className="usilles-text">
                        <h1>
                            Le site gratuit pour améliorer facilement sa compréhension du
                            français à partir de vidéos
                        </h1>
                        <div className="division_border_div">
                            <div className="division_border"></div>
                        </div>
                    </div>
                    <div className="wrapper-content">
                        <div className="text">
                            <h1>Telechargé des livres</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Ratione neque, tenetur impedit, voluptatibus explicabo esse
                                adipisci molestias eaque rerum nisi corporis expedita sunt
                                vero quaerat et. Cupiditate numquam facilis repudiandae
                                consectetur dolore quis. Vitae, quae. Adipisci voluptas
                                recusandae nobis non, nihil explicabo pariatur illo enim nam
                                tenetur officia facere expedita?
                            </p>
                            <Link to="/download-books">
                                <button>Voir plus de cours</button>
                            </Link>
                        </div>
                        <div className="image"></div>
                    </div>
                </div>
            </div>
            <div className="division_border_div">
                <div className="division_border"></div>
            </div>
        </section>
    )
}