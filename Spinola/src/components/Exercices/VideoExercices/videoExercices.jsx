import "./videoExercices.scss"
export default function videoExercices({ videoSrc }) {
  return (
    <div className="exercice-container">
      <div className="exercice-wrapper">
        <div className="video-player-container">
          <video controls autoPlay={true}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
