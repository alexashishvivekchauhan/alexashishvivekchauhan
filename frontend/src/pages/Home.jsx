import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const goToProjects = () => {
    navigate("/project");
  };

  return (
    <div className="home-wrapper text-light">
      <div className="container">
        {/* Profile Header */}
        <div className="row align-items-center mb-5 profile-section">
          <div className="col-md-8 text-center text-md-start fade-in-right">
            <h1 className="display-5 fw-bold">Vivek Chauhan</h1>
            <p className="lead neon-text">Mern Stack Developer | AWS & Cloud Specialist</p>
            <p>
              I develop scalable full-stack applications using MERN, deploy with AWS EC2 & NGINX,
              manage assets in S3, and deliver seamless cloud-first solutions — with performance,
              clean UI, and secure architecture at the core.
            </p>
            <div className="skills">
              {[
                "React", "Node.js", "MongoDB", "Express.js", "Redux",
                "AWS", "S3", "NGINX", "GitHub", "Bootstrap",
              ].map((skill, index) => (
                <span key={index} className="skill-badge">{skill}</span>
              ))}
            </div>
            <button className="project-btn" style={{marginTop:"15px"}} onClick={goToProjects}>
              🚀 Check My Projects
            </button>
          </div>
        </div>

        {/* Flipbook Project */}
        <div className="row mb-5 slide-up">
          <div className="col-12">
            <h2 className="section-title">📘 Flipbook Album Generator</h2>
            <p>
              A responsive Flipbook album system that enables users to upload images,
              set cover pages, autoplay music, and share interactive digital albums via QR code.
            </p>
            <ul className="project-list">
              <li>🔧 MERN Stack + HTMLFlipBook</li>
              <li>📦 Amazon S3 storage</li>
              <li>🎵 Music integration + autoplay</li>
              <li>🔗 QR code generation for mobile sharing</li>
              <li>🚀 Deployed with AWS EC2 + NGINX</li>
            </ul>
          </div>
        </div>

        {/* Services / What I Do */}
        <div className="row mb-5 slide-up">
          <div className="col-12">
            <h2 className="section-title">🧠 What I Do</h2>
            <ul className="project-list">
              <li>⚙️ Build modern SPAs with React & Redux</li>
              <li>📡 REST APIs using Node.js + Express</li>
              <li>🗂️ MongoDB with flexible schema & Mongoose</li>
              <li>☁️ Secure file handling with Amazon S3</li>
              <li>🎯 QR code tools for instant content access</li>
              <li>📱 Fully responsive UI with Bootstrap 5</li>
              <li>🚀 NGINX + PM2 + AWS for production-ready deployment</li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="row slide-up">
          <div className="col-12 text-center">
            <h2 className="section-title">📞 Let's Work Together</h2>
            <p>
              I’m open to freelance projects, startup ideas, or full-time positions.
              If you're building something impactful — let’s talk!
            </p>
            <p>
              <strong>📍 Saharanpur, Uttar Pradesh</strong><br />
              <strong>📱 9412004537</strong><br />
              <strong>📧 alexashishvivekchauhan@gmail.com</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
