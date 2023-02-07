import { useRef, useEffect } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../../store/products";
import { changeHomePageStyle } from "../../utils/changeHomePageStyle";
import { resetHomeScrenn } from "../../utils/resetHomeScrenn";
import SliderComponent from "../Slider/Slider.component";

const HomeComponent = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
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

  const handleGoToProductsScreen = () => {
    const element = document.querySelector("#products");
    element.style.display = "block";
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <BrowserView>
        <div>
          <div id="home_container">
            {products.map((product) => (
              <div id={`part${product.id}`}>
                <div
                  className="top_div"
                  onMouseOver={() =>
                    resetHomeScrenn(windowSize, `part${product.id}`)
                  }
                >
                  &nbsp;
                </div>
                <div className="middle_div">
                  <div className="home_title">{product.title}</div>
                  <div
                    onMouseOver={() =>
                      changeHomePageStyle(windowSize, `part${product.id}`)
                    }
                  >
                    <img
                      className="home_img"
                      src={`images/${product.img}`}
                      alt={product.img}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div id="home_logo">
            <img
              src="./images/shoes_logo.png"
              width="80"
              height="60"
              alt="shoes_logo.png"
            />
          </div>
          <div id="home_subtitle">THE MILANO COLLECTION</div>
          <button id="btn_see_more" onClick={handleGoToProductsScreen}>
            See More
          </button>
        </div>
      </BrowserView>

      <MobileView>
        <div>
          <SliderComponent></SliderComponent>
        </div>
      </MobileView>
    </>
  );
};

export default HomeComponent;
