import "./learnWithMusic.scss"

export default function LearnWithMusic(video,) {
    return (
        <div className="container_music_video">
            <div className="wrapper_video_choice">

                <video controls autoPlay={true}>
                    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                </video>

                <div className="wrapper_btns_choice">
                    <button>Choice1</button>
                    <button>Choice2</button>
                    <button>Choice3</button>
                    <button>Choice4</button>
                </div>

            </div>
            <div className="lyrics">
                <span>

                </span>
                <span>

                </span>
                <span>

                </span>
                <span>

                </span>
            </div>
        </div>
    )
}