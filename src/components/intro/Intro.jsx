import "./intro.scss";

export default function Intro() {

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/img1.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Surya M</h1>
          <h3>
            <span>Full stack Developer,</span><br />
            <span>Competitive Programmer</span>
          </h3>
        </div>
        <a href="#portfolio">
        <img src="assets/down.png" alt="" />
        <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}