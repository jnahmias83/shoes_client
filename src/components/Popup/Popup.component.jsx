import { isBrowser } from "react-device-detect";
import React, { useState, useEffect } from "react";
import PopupPaymentComponent from "../PopupPayment/PopupPayment.component";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";

function PopupComponent(props) {
  const dispatch = useDispatch();
  const [showPopupPayment, setShowPopupPayment] = useState(false);
  useEffect(() => {
    dispatch(cartActions.setCart(props.cart));
  }, []);

  const handlePopupClose = () => {
    document.body.style.overflow = "visible";
    document.querySelector("#products").style.backgroundImage =
      "linear-gradient(123deg, #1f1f1f, #000 102%)";
    props.setTrigger(false);
  };

  const handlePayment = () => {
    setShowPopupPayment(true);
  };

  return props.trigger ? (
    <>
      {isBrowser ? (
        <div className="popup">
          <div className="popup-inner">
            <button className="close-btn" onClick={handlePopupClose}>
              X
            </button>
            <p>
              <span id="prdt_name">{props.product.name}</span>
            </p>
            <div className="border_title"></div>
            <span id="prdt_desc">{props.product.description}</span>
            <br />
            <span id="prdt_ref">Ref: {props.product.ref}</span>
            <br />
            <span id="prdt_price">{props.product.price} ₪</span>
            <div className="border_before_size_part"></div>
            <span id="prdt_size_txt">SIZE</span>
            <br />
            <span id="prdt_size">43 UE/UK (11.5 US).</span>
            <br />
            <button id="btn_payment" onClick={handlePayment}>
              PROCEED TO PAYMENT
            </button>
            <button id="btn_continue_shopping" onClick={handlePopupClose}>
              CONTINUE SHOPPING
            </button>
            <br />
            <img
              className="prdt_img"
              src={`images/${props.product.img}`}
              alt={props.product.name}
              width="250"
            />
          </div>
        </div>
      ) : (
        <div className="popup_mobile">
          <div className="popup-inner_mobile">
            <button className="close-btn_mobile" onClick={handlePopupClose}>
              X
            </button>
            <p>
              <span id="prdt_name_mobile">{props.product.name}</span>
            </p>
            <div className="border_title_mobile"></div>
            <span id="prdt_desc_mobile">{props.product.description}</span>
            <br />
            <span id="prdt_ref_mobile">Ref: {props.product.ref}</span>
            <br />
            <span id="prdt_price_mobile">{props.product.price} ₪</span>
            <div className="border_before_size_part_mobile"></div>
            <span id="prdt_size_txt_mobile">SIZE</span>
            <br />
            <div id="prdt_size_mobile">43 UE/UK (11.5 US).</div>
            <br />
            <button id="btn_payment_mobile" onClick={handlePayment}>
              PROCEED TO PAYMENT
            </button>
            <button id="btn_continue_shopping_mobile" onClick={handlePopupClose}>
              CONTINUE SHOPPING
            </button>
            <br />
            <img
              className="prdt_img_mobile"
              src={`images/${props.product.img}`}
              alt={props.product.name}
              width="250"
            />
          </div>
        </div>
      )}

      <PopupPaymentComponent
        triggerPayment={showPopupPayment}
        setTriggerPayment={setShowPopupPayment}
        setTrigger={props.setTrigger}
        product={props.product}
        cart={props.cart}
      ></PopupPaymentComponent>
    </>
  ) : null;
}

export default PopupComponent;
