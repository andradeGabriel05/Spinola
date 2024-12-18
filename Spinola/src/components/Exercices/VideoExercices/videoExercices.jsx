import "./videoExercices.scss";
export default function videoExercices({
  videoSrc,
  miniature,
  audio,
  position,
}) {
  return (
    <div className="exercice-container">
      <div className="exercice-wrapper">
        <div className="video-player-container">
          {miniature && miniature != ""  ? (
            <div className="wrapper_image_audio">
              <img src={miniature} alt="Miniature" />
              {audio && audio != "" ? (
                <audio src={audio} controls autoPlay={true} />
              ) : null}
            </div>
          ) : (
            <video controls autoPlay={true} style={{ objectPosition: position }}>
              <source src={videoSrc} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
    </div>
  );
}
