import "./Project.css";

function Project() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>My Projects</h2>
        <p className="subtitle">Explore my creative tools & builds</p>
      </div>

      <div className="project-grid">
        {/* Flipbook Project */}
        <a
          href="https://evermoreflipbook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <h3>📘 Flipbook Album</h3>
          <p>A cloud-based flipbook album builder with QR sharing & music autoplay.</p>
        </a>

        {/* AAVRC Project */}
        <a
          href="https://aavrc.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <h3>🛒 AAVRC</h3>
          <p>A simple buy & sell platform for digital or physical goods.</p>
        </a>
      </div>
    </div>
  );
}

export default Project;
