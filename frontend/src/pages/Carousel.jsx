import "./Carousel.css";

import image1 from "../../../images/carousal/carousal1.jpg";
import image2 from "../../../images/carousal/carousal2.jpg";
import image3 from "../../../images/carousal/carousal3.jpg";
import image4 from "../../../images/carousal/carousal4.jpg";
import image5 from "../../../images/carousal/carousal5.jpg";
import image6 from "../../../images/carousal/carousal6.jpg";
import image7 from "../../../images/carousal/carousal7.jpg";
import image8 from "../../../images/carousal/carousal8.jpg";

function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide carousel-fade "
      data-bs-ride="carousel"
      data-bs-interval="4000"
      style={{ marginTop: "65px" }}
    >
      <div className="carousel-indicators">
        {[...Array(8)].map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {[ image1,image2,image3,image4,image5, image6,image7,image8].map((img, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
