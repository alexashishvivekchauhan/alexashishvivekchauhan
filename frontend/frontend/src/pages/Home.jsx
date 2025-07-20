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
            <p className="lead neon-text">MERN Stack Developer | AWS & Cloud Specialist</p>
            <p className="contact-info">
              🌐 <a href="https://alexashishvivekchauhan.com" target="_blank" rel="noreferrer">alexashishvivekchauhan.com</a><br />
              📍 Saharanpur, Uttar Pradesh<br />
              📞 9412004537<br />
              📧 alexashishvivekchauhan@gmail.com
            </p>
            <p>
              I develop scalable web applications using the MERN stack, deploy with AWS EC2 & NGINX,
              manage assets in Amazon S3, and deliver seamless cloud-first solutions – with performance,
              clean UI, and secure architecture at the core.
            </p>
            <button className="project-btn" style={{ marginTop: "15px" }} onClick={goToProjects}>
              🚀 Check My Projects
            </button>
          </div>
        </div>

        {/* What I Do */}
        <div className="row mb-5 slide-up">
          <div className="col-12">
            <h2 className="section-title">💼 What I Do</h2>
            <ul className="project-list">
              <li>⚙️ Build SPAs using React & Redux</li>
              <li>📡 Create REST APIs with Node.js & Express</li>
              <li>🗂️ Use MongoDB + Mongoose for scalable data storage</li>
              <li>☁️ Handle large file uploads to Amazon S3</li>
              <li>🎯 Generate QR codes for instant mobile access</li>
              <li>📱 Build responsive UIs with Bootstrap 5</li>
              <li>🚀 Deploy with PM2, NGINX, AWS EC2</li>
            </ul>
          </div>
        </div>

        {/* Projects */}
        <div className="row mb-5 slide-up">
          <div className="col-12">
            <h2 className="section-title">📘 Projects</h2>

            <h5>📖 Flipbook Album Generator</h5>
            <p>
              A full-stack cloud album builder that allows users to create, upload, and view digital Flipbook albums with autoplay music and shareable QR codes.
            </p>
            <ul className="project-list">
              <li>🔧 React, Node.js, Express, MongoDB, HTMLFlipBook</li>
              <li>📂 Users upload image folders & set cover/middle pages</li>
              <li>🎵 Integrated music autoplay feature</li>
              <li>☁️ Amazon S3 with presigned URLs</li>
              <li>🔗 QR code generation & mobile-friendly viewer</li>
              <li>🚀 Deployed on AWS EC2 with PM2 & NGINX</li>
              <li>🔒 Secure studio login & dashboard</li>
            </ul>

            <h5>🛒 E-Commerce Web App</h5>
            <ul className="project-list">
              <li>🧩 React, Node.js, Express, MongoDB</li>
              <li>⚡ Real-time shopping cart & dynamic product management</li>
              <li>📱 Fully responsive & optimized for performance</li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="row mb-5 slide-up">
          <div className="col-12">
            <h2 className="section-title">🛠 Technical Skills</h2>
            <ul className="project-list">
              <li>Frontend: React.js, HTML5, CSS3, JavaScript (ES6+), Bootstrap, Redux</li>
              <li>Backend: Node.js, Express.js, RESTful APIs</li>
              <li>Database: MongoDB, Mongoose</li>
              <li>Cloud & DevOps: Amazon S3, AWS EC2, NGINX, PM2</li>
              <li>Tools: Git, GitHub, Postman</li>
              <li>Other: SAP, Excel, Hardware & Software Troubleshooting</li>
            </ul>
          </div>
        </div>

        {/* Experience */}
        <div className="row mb-5 slide-up">
          <div className="col-12">
            <h2 className="section-title">🧑‍💼 Professional Experience</h2>
            <h5>Utsav Digital Lab – Full Stack Developer</h5>
            <p>Jan 2024 – Present</p>
            <ul className="project-list">
              <li>✅ Developed full-stack Flipbook album system</li>
              <li>✅ Integrated Amazon S3 & presigned uploads</li>
              <li>✅ Created secure user dashboards & QR viewer</li>
              <li>✅ Deployed on AWS EC2 with PM2 & NGINX</li>
              <li>✅ Implemented album metadata, image compression, mobile optimization</li>
            </ul>

            <h5>Reliance Digital – Digital Expert (Sales)</h5>
            <ul className="project-list">
              <li>✅ Handled laptop & IT accessories sales</li>
              <li>✅ Used SAP tools, reporting, tracking promotions</li>
            </ul>

            <h5>Airtel – Software & Hardware Engineer</h5>
            <ul className="project-list">
              <li>✅ Installed & troubleshooted routers/networks</li>
              <li>✅ Provided software & hardware support</li>
            </ul>

            <h5>Vijay Electricals Pvt Ltd – Supervisor</h5>
            <ul className="project-list">
              <li>✅ Data entry, Excel quality checks, reporting</li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="row mb-5 slide-up">
          <div className="col-12">
            <h2 className="section-title">🎓 Education</h2>
            <ul className="project-list">
              <li>M.D. Inter College – 12th PCM – 58.6%</li>
              <li>Credible Academy – MERN Stack Development</li>
              <li>Micro Know Tech – PLC SCADA, HMI, Embedded Systems</li>
              <li>Magicon Institute – English Speaking & Personality Dev</li>
              <li>Govt Polytechnic – Typing & Shorthand (Grade A)</li>
            </ul>
          </div>
        </div>

        {/* Languages & Interests */}
        <div className="row slide-up">
          <div className="col-12 text-center">
            <h2 className="section-title">🌐 Languages</h2>
            <p>English (Basic) | Hindi (Fluent)</p>

            <h2 className="section-title">❤ Interests</h2>
            <p>Mathematics, Coding, Technology Exploration, Problem Solving</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
