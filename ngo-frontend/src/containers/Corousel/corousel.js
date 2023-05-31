import Carousel from "react-bootstrap/Carousel";
import mainImage from "../../assets/img_3.jpg";
import img2 from "../../assets/img-2.jpg";
import img1 from "../../assets/img_1.jpg";
import "./corousel.css";

function CorouselComponent() {
  return (
    <Carousel className="mt-5">
      <Carousel.Item>
        <img
          src={mainImage}
          class="d-block w-100 slide-image-style"
          alt="..."
        />
        <Carousel.Caption>
          <h3>Unity is Strength</h3>
          <p>Alone we can do so little; Together we can do so much</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} class="d-block w-100 slide-image-style" alt="..." />

        <Carousel.Caption>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img1} class="d-block w-100 slide-image-style" alt="..." />
        <Carousel.Caption>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CorouselComponent;
