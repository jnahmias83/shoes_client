import { useEffect } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../../store/products";

function SliderComponent() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsActions.setProducts( [
      {
        id: 1,
        img: "shoes2.png",
        title: "Simply classy.",   
        name: "Classy Milano Red",
        description:
            "The perfect leather shoe limited edition produced by 101 Private Line",
        ref: 148148,
        price: 800
      },
      {
        id: 2,
        img: "shoes1.png",
        title: "Simply elegant.",
        name: "Berluco Elegant Brown",
        description:
            "The perfect leather shoe limited edition produced by 101 Private Line",
        ref: 148148,
        price: 800
      },
      {
        id: 3,
        img: "shoes3.png",
        title: "Italian leather.",
        name: "Venise Navy Blue",
        description:
            "The perfect leather shoe limited edition produced by 101 Private Line",
        ref: 148148,
        price: 800
      }
    ])
    );
  }, []);

  const products = useSelector((state) => state.productsSlice.products);

  const settings = {
    autoplay: true,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => {
      return <MagicSliderDots dots={dots} numDotsToShow={products.length} dotWidth={30} />;
    }
  };

  const handleGoToProductsScreen = () => {
    const element = document.querySelector("#products");
    element.style.display = "block";
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="slide-container">
        <Slider {...settings}>
          {products.map((product) => (
            <div id={`slide${product.id}`} key={product.id}>
              <div className="slide_title">{product.title}</div>
              <img src={`images/${product.img}`} />
              <div className="slide_subtitle">THE MILANO COLLECTION</div>
              <button id="slide_btn_see_more" onClick={handleGoToProductsScreen}>
                See More
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default SliderComponent;
