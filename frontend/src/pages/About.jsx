import "./About.css";
import topImage from "../../images/about-banner.jpg";

function About() {
  return (
    <div className="about-wrapper">
      {/* 🔝 Full-Width Top Image */}
      <div className="top-banner">
        <img src={topImage} alt="About Banner" className="banner-img" />
        <div className="banner-overlay">
          <h1 className="banner-title">About Us</h1>
        </div>
      </div>

      {/* 🔽 About Content */}
      <div className="container about-content">
        <section className="fade-in">
          <h2>Who We Are</h2>
          <p>
            We are a software development team led by Vivek Chauhan, focused on building scalable full-stack web applications and cloud-based solutions. Our mission is to provide fast, reliable, and secure digital platforms for modern businesses.
          </p>
        </section>

        <section className="fade-in">
          <h2>What We Do</h2>
          <p>
            We specialize in creating custom applications using the MERN stack (MongoDB, Express.js, React, Node.js), and deploying them with AWS EC2, NGINX, and S3 cloud services. From responsive UIs to secure backend systems, we cover it all.
          </p>
        </section>

        <section className="fade-in">
          <h2>Our Values</h2>
          <ul>
            <li> Clean and maintainable code</li>
            <li> Cloud-first and scalable architecture</li>
            <li> Security, performance, and reliability</li>
            <li> Transparent communication and delivery</li>
          </ul>
        </section>

        <section className="fade-in">
          <h2>Technologies We Use</h2>
          <p>
            React, Node.js, Express, MongoDB, AWS EC2, Amazon S3, Bootstrap, GitHub, and more.
          </p>
        </section>

        <section className="fade-in">
          <h2>Contact</h2>
          <p>
            📧 alexashishvivekchauhan@gmail.com <br />
            🌐 alexashishvivekchauhan.com <br />
            📍 Saharanpur, Uttar Pradesh
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
