import "./homepageA2.scss";
import { Link } from "react-router-dom";
import ActivatedButton from "../../components/ActivatedButton/activatedButton";
import NavigationLevels from "../../components/NavigationLevels/navigationLevels";
import BookSection from "../../components/BookSection/bookSection";
export default function homepageA2() {
    return (

        <div className="container_homepage">
            <NavigationLevels />

            <section className="homepage_main">
                <div className="homepage_main_content">
                    <div className="left_side">
                        <Link to="/premiere-lecon" className="wrapper-message-user-home">
                            <div className="card1">
                                <div className="image_card image_card_background_a2"></div>
                                <div className="text">
                                    <p>Collection</p>
                                    <h2>Second time</h2>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="right_side">
                        <div className="card2">
                            <div className="image_card"></div>
                            <div className="text">
                                <p>Bonjour!</p>
                                <h2>Apprenez à dire bonjour et à vous présenter.</h2>
                            </div>
                        </div>
                        <div className="card3">
                            <h2>Titre de la carte 3</h2>
                            <p>Description de la carte 3</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <BookSection />

            <section className="media_section">
                <div className="media_container">
                    <div className="content">
                        <div className="text">
                            <h1>Apprendre le français avec des média</h1>
                        </div>
                        <div className="media_flex">
                            <h3>Vidéos</h3>
                            <div className="content_wrapper">
                                <div className="media_box video_box1">
                                    <div className="video_text">
                                        <p>
                                            Comment vas-tu ? / Comment allez-vous ? - "How are you?"
                                        </p>
                                        <h4>Coffee Break Languages</h4>
                                    </div>
                                </div>
                                <div className="media_box video_box2">
                                    <div className="video_text">
                                        <p>
                                            Comment vas-tu ? / Comment allez-vous ? - "How are you?"
                                        </p>
                                        <h4>Coffee Break Languages</h4>
                                    </div>
                                </div>
                                <div className="media_box video_box3">
                                    <div className="video_text">
                                        <p>
                                            Comment vas-tu ? / Comment allez-vous ? - "How are you?"
                                        </p>
                                        <h4>Coffee Break Languages</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="media_flex">
                            <h3>Musiques</h3>
                            <div className="content_wrapper">
                                <div className="media_box musique_box1">
                                    <div className="video_text">
                                        <p>
                                            Comment vas-tu ? / Comment allez-vous ? - "How are you?"
                                        </p>
                                        <h4>Coffee Break Languages</h4>
                                    </div>
                                </div>

                                <div className="media_box musique_box2">
                                    <div className="video_text">
                                        <p>
                                            Comment vas-tu ? / Comment allez-vous ? - "How are you?"
                                        </p>
                                        <h4>Coffee Break Languages</h4>
                                    </div>
                                </div>
                                <div className="media_box musique_box3">
                                    <div className="video_text">
                                        <p>
                                            Comment vas-tu ? / Comment allez-vous ? - "How are you?"
                                        </p>
                                        <h4>Coffee Break Languages</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="media_flex">
                            <h3>Podcasts</h3>
                            <div className="content_wrapper">
                                <div className="media_box podcast_box1">
                                    <div className="video_text">
                                        <p>
                                            Comment vas-tu ? / Comment allez-vous ? - "How are you?"
                                        </p>
                                        <h4>Coffee Break Languages</h4>
                                    </div>
                                </div>
                                <div className="media_box podcast_box2">
                                    <div className="video_text">
                                        <p>
                                            Comment vas-tu ? / Comment allez-vous ? - "How are you?"
                                        </p>
                                        <h4>Coffee Break Languages</h4>
                                    </div>
                                </div>
                                <div className="media_box podcast_box3">
                                    <div className="video_text">
                                        <p>
                                            Comment vas-tu ? / Comment allez-vous ? - "How are you?"
                                        </p>
                                        <h4>Coffee Break Languages</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// https://static.vecteezy.com/system/resources/thumbnails/003/126/412/small/language-courses-french-language-courses-back-to-school-abc-vector.jpg
// https://cursa-cat-img.s3.us-east-1.amazonaws.com/tags/en/french-a1.webp
