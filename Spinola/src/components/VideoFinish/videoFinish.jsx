import { useEffect, useState } from "react";
import imageMonument from "../../assets/vectors/14255778.gif";
import FooterExercices from "../Exercices/FooterExercices/footerExercices";
import axios from "axios";
// import HeaderExercices from "../HeaderExercices/headerExercices";

export default function VideoFinish() {
    const username = localStorage.getItem("username");
    const timeSpent = localStorage.getItem("timeSpent");
    const userId = localStorage.getItem("user");
    const typeOfMedia = localStorage.getItem("typeOfMedia")

    async function handleMusicResponse() {
        if (userId) {
            try {
                const mediaVerification = await axios.post(
                    `http://localhost:3300/api/verify-time-on-media`, {
                    typeOfMedia,
                    timeSpent,
                    userId,
                });

                console.log(mediaVerification)
            } catch (error) {
                console.error("Error:", error);
            }
        } else {
            console.error("User ID not found");
        }
    }

    useEffect(() => {
        handleMusicResponse();
    }, []);

    return (
        <>
            <div className="container_finish">
                <div className="images_finish">
                    <div className="img_monument">
                        <img src={imageMonument} alt="" />
                    </div>
                </div>

                <div className="wrapper_text">
                    <h1 className="text_finish">Congratulations, {username}!</h1>
                </div>

                {/* <div className="wrapper_boxes">
                    <div className="score box">
                        <p>Score</p>
                        <h3>{score}%</h3>
                    </div>
                    <div className="points box">
                        <p>Points</p>
                        <h3>+{correctAnswer}</h3>
                    </div>
                </div> */}
            </div>
            <FooterExercices nextExercise={"/"} />
        </>
    );
}
