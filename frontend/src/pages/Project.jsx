import "./Project.css";

function Project() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>My Projects</h2>
        <p className="subtitle">Explore My creative tools</p>
      </div>

      <div className="project-grid">
        {/* Flipbook Project */}
        <a
          href="http://evermorephotobook.com/#body"
          target="_blank"
          rel="noopener noreferrer"
          className="project-button"
        >
          <h3>📘 Flipbook</h3>
          <p>This is a flipbook creation web application.</p>
        </a>

        {/* AAVRC Project */}
        <a
          href="https://aavrc.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-button"
        >
          <h3>🛒 AAVRC</h3>
          <p>This is a buy and sell anything platform.</p>
        </a>
      </div>
    </div>
  );
}

export default Project;
