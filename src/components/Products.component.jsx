import PopupComponent from "./Popup.component";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Products } from "../interfaces/Products";

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

  const products = Products;

  const handleAddToBag = (product) => {
    setShowPopup(true);
    setProductData(product);
    document.body.style.overflow = "hidden";
    document.querySelector("#products").style.backgroundImage =
      "linear-gradient(to right, #b1b1b1 0%, #000 100%)";
  };

  const handleClosePopup = () => {
    if (showPopup) {
      setShowPopup(false);
      document.body.style.overflow = "visible";
      document.querySelector("#products").style.backgroundImage =
        "linear-gradient(123deg, #1f1f1f, #000 102%)";
    }
  };

  return (
    <>
      <div onClick={handleClosePopup}>
        <div className="prdts_middle">
          <div id="prdt_elem_1">PRIVATE SALE ORDER</div>
          <div>
            <span id="prdt_elem_2">
              Private sale are online for a limited time online
            </span>
          </div>
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
        <div className="prdts_botton">
          &nbsp;
        </div>
      </div>

      <PopupComponent
        trigger={showPopup}
        setTrigger={setShowPopup}
        product={productData}
      ></PopupComponent>
    </>
  );
};

export default ProductsComponent;
