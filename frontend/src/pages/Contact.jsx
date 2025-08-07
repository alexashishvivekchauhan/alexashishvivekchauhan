import "./Contact.css";
import contactBanner from "../../images/contact-banner.jpg"; // ✅ Replace with your actual image path

function Contact() {
  return (
    <div className="contact-wrapper">
      {/* 🔝 Top Banner */}
      <div className="top-banner">
        <img src={contactBanner} alt="Contact Banner" className="banner-img" />
        <div className="banner-overlay">
          <h1 className="banner-title">Contact Us</h1>
        </div>
      </div>

      {/* 📞 Contact Content */}
      <div className="container contact-content">
        <section className="fade-in text-center">
          <h2>Get in Touch</h2>
          <p>
            Whether you're looking to start a new project, collaborate, or just say hello — we're always open to connect.
          </p>
        </section>

        <section className="fade-in contact-info-box text-center">
          <p><strong>Email:</strong> alexashishvivekchauhan@gmail.com</p>
          <p><strong>Phone:</strong> +91 9412004537</p>
          <p><strong>Location:</strong> Saharanpur, Uttar Pradesh, India</p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://alexashishvivekchauhan.com"
              target="_blank"
              rel="noreferrer"
            >
              alexashishvivekchauhan.com
            </a>
          </p>
        </section>

        {/* Optional: Direct Gmail Link */}
        <section className="fade-in text-center">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=alexashishvivekchauhan@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="gmail-button"
          >
            📧 Send Email via Gmail
          </a>
        </section>
      </div>
    </div>
  );
}

export default Contact;
