import { isBrowser } from "react-device-detect";
import PopupComponent from "../Popup/Popup.component";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../../store/products";

const ProductsComponent = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [productData, setProductData] = useState({
    id: 0,
    img: "",
    mame: "",
    description: "",
    ref: 0,
    price: 0,
  });

  const [cartData, setCartData] = useState([]);
  let nextId = 0;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      productsActions.setProducts([
        {
          id: 1,
          img: "shoes2.png",
          title: "Simply classy.",
          name: "Classy Milano Red",
          description:
            "The perfect leather shoe limited edition produced by 101 Private Line",
          ref: 148148,
          price: 800,
        },
        {
          id: 2,
          img: "shoes1.png",
          title: "Simply elegant.",
          name: "Berluco Elegant Brown",
          description:
            "The perfect leather shoe limited edition produced by 101 Private Line",
          ref: 148148,
          price: 800,
        },
        {
          id: 3,
          img: "shoes3.png",
          title: "Italian leather.",
          name: "Venise Navy Blue",
          description:
            "The perfect leather shoe limited edition produced by 101 Private Line",
          ref: 148148,
          price: 800,
        },
      ])
    );
  }, []);

  const products = useSelector((state) => state.productsSlice.products);

  const handleAddToBag = (product) => {
    setShowPopup(true);
    setProductData(product);
    document.body.style.overflow = "hidden";
    document.querySelector("#products").style.backgroundImage =
      "linear-gradient(to right, #b1b1b1 0%, #000 100%)";
    cartData.push({id: nextId++, product: product, quantity: 1});
  };

  const handleClosePopupFromProductsScreen = () => {
    if (showPopup) {
      setShowPopup(false);
      document.body.style.overflow = "visible";
      document.querySelector("#products").style.backgroundImage =
        "linear-gradient(123deg, #1f1f1f, #000 102%)";
    }
  };

  return (
    <>
      <div onClick={handleClosePopupFromProductsScreen}>
        {isBrowser ? (
          <>
            <div className="prdts_middle">
              <div id="prdt_elem_1">PRIVATE SALE ORDER</div>
              <span id="prdt_elem_2">
                Private sale are online for a limited time online
              </span>
              <div className="grid-container">
                {products.map((productItem) => (
                  <div className="grid-item" key={productItem.id}>
                    <img
                      className="product_img"
                      src={`images/${productItem.img}`}
                      alt={productItem.name}
                    />
                    <br />
                    <div className="border_img"></div>

                    <span id="product_name">{productItem.name}</span>
                    <br />
                    <div id="product_desc">{productItem.description}</div>
                    <span id="product_price">{productItem.price} ₪</span>
                    <br />
                    <br />
                    <a
                      id="link_add_to_bag"
                      onClick={() => handleAddToBag(productItem)}
                    >
                      ADD TO BAG
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div>&nbsp;</div>
          </>
        ) : (
          <div className="prdts_middle_mobile">
            <div id="prdt_elem_1_mobile">PRIVATE SALE ORDER</div>
            <div id="prdt_elem_2_mobile">
              Private sale are online for a limited time online
            </div>
            {products.map((productItem) => (
              <div className="grid-item_mobile" key={productItem.id}>
                <img
                  className="product_img_mobile"
                  src={`images/${productItem.img}`}
                  alt={productItem.name}
                />
                <br /> <br />
                <span id="product_name_mobile">{productItem.name}</span>
                <br />
                <div id="product_desc_mobile">{productItem.description}</div>
                <br />
                <span id="product_price_mobile">{productItem.price} ₪</span>
                <br />
                <br />
                <a
                  id="link_add_to_bag_mobile"
                  onClick={() => handleAddToBag(productItem)}
                >
                  ADD TO BAG
                </a>
              </div>
            ))}
          </div>
        )}
      </div>

      <PopupComponent
        trigger={showPopup}
        setTrigger={setShowPopup}
        product={productData}
        cart={cartData}
      ></PopupComponent>
    </>
  );
};

export default ProductsComponent;
