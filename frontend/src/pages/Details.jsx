import { NavLink } from "react-router-dom";
import "./Details.css";

// ✅ Images
import heroImg from "../../images/hero.jpg"; // Replace with your image
import ctaImg from "../../images/cta.jpg";   // Replace with your image
import photo1 from "../../images/photo1.jpg";
import photo2 from "../../images/photo2.jpg";
import photo3 from "../../images/photo3.jpg";
import photo4 from "../../images/photo4.jpg";
import photo5 from "../../images/photo5.jpg";
import photo6 from "../../images/photo6.jpg";

function Details() {
  return (
    <div className="home font-sans text-dark">
      {/* ✅ Hero Section */}
      <div className="full-bleed">
        <section
          className="hero-section"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-center">
            <h1 className="display-4 fw-bold mb-3">Alex Ashish Vivek Chauhan</h1>
            <p className="lead mb-4">MERN Stack Developer | AWS Cloud Specialist</p>
            <NavLink to="/project" className="btn btn-light">
              View Projects
            </NavLink>
          </div>
        </section>
      </div>

      {/* ✅ About Section */}
      <section className="about-section">
        <div className="container">
          <h2 className="text-center h3 fw-semibold mb-4">About Me</h2>
          <p className="text-center mb-3">
            I build scalable full-stack web applications using the MERN stack,
            deploy with AWS EC2 and NGINX, manage large files with Amazon S3,
            and create cloud-first digital solutions. My mission is to deliver
            fast, secure, and beautifully designed platforms for clients and studios.
          </p>
        </div>
      </section>

      {/* ✅ Showcase Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center h3 fw-semibold mb-4">Work Showcase</h2>

          <div className="gallery-scroll-wrapper">
            <div className="gallery-scroll-container">
              <div className="gallery-item"><img src={photo1} alt="Project 1" /></div>
              <div className="gallery-item"><img src={photo2} alt="Project 2" /></div>
              <div className="gallery-item"><img src={photo3} alt="Project 3" /></div>
              <div className="gallery-item"><img src={photo4} alt="Project 4" /></div>
              <div className="gallery-item"><img src={photo5} alt="Project 5" /></div>
              <div className="gallery-item"><img src={photo6} alt="Project 6" /></div>
            </div>
          </div>

          <div className="text-center mt-4">
            <NavLink to="/project" className="text-primary small">
              View all projects →
            </NavLink>
          </div>
        </div>
      </section>

      {/* ✅ CTA Section */}
      <div className="full-bleed">
        <section
          className="cta-section"
          style={{ backgroundImage: `url(${ctaImg})` }}
        >
          <div className="cta-overlay"></div>
          <div className="cta-content text-center">
            <h2 className="h4 mb-3">Have a project in mind?</h2>
            <p className="mb-4">
              Let's connect and bring your ideas to life with clean code and cloud power.
            </p>
            <NavLink to="/contact" className="btn btn-light">
              Contact Me
            </NavLink>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Details;
