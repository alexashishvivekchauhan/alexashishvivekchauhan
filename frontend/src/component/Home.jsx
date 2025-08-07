import Carousel from "../pages/Carousel";
import "./Home.css"; // ⬅️ Add styles here
import webImg from "../../images/web-design.jpg"; // ✅ Replace with your image

function Home() {
  return (
    <>
      {/* 🔝 Carousel at top */}
      <Carousel />
      {/* 🔽 Web Design Work Section */}
      <section className="web-section">
        <div className="container web-section-inner">
          {/* Left Text */}
          <div className="web-text">
            <h2>Web Design Work</h2>
            <p>
              I create beautiful, responsive websites using modern technologies like React, HTML5, and CSS3. 
              From portfolios to fully integrated admin panels, every project is built with attention to detail, performance, and clean UI.
            </p>
          </div>

          {/* Right Image */}
          <div className="web-image">
            <img src={webImg} alt="Web Design" />
          </div>
        </div>
      </section>

      {/* 🔽 Add more sections here */}
      {/* <OtherSection /> */}
    </>
  );
}

export default Home;
