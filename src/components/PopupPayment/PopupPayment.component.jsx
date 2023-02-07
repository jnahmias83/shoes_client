import React from "react";
import { isBrowser } from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";

function PopupPaymentComponent(props) {
  const cart = useSelector((state) => state.cartSlice.cart);

  const handlePopupPaymentClose = () => {
    props.setTriggerPayment(false);
    props.setTrigger(false);
    document.body.style.overflow = "visible";
    document.querySelector("#products").style.backgroundImage =
      "linear-gradient(123deg, #1f1f1f, #000 102%)";
    document.querySelector("#products").style.display = "none";
    const element = document.querySelector("#home");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGoToShopping = () => {
    props.setTriggerPayment(false);
    props.setTrigger(false);
    document.body.style.overflow = "visible";
    document.querySelector("#products").style.backgroundImage =
      "linear-gradient(123deg, #1f1f1f, #000 102%)";
    const element = document.querySelector("#products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleShowBeltBox = () => {
    if (isBrowser) document.querySelector(".belt_box").style.opacity = "1";
    else document.querySelector(".belt_box_mobile").style.opacity = "1";
  };

  const handleBeltBoxClose = () => {
    if (isBrowser) {
      document.querySelector(".belt_box").style.transition = "1s";
      document.querySelector(".belt_box").style.opacity = "0";
    } else {
      document.querySelector(".belt_box_mobile").style.transition = "1s";
      document.querySelector(".belt_box_mobile").style.opacity = "0";
    }
  };

  return props.triggerPayment ? (
    <>
      {isBrowser ? (
        <div className="popup-payment">
          <div className="popup-payment-inner">
            <div className="div_title">
              <span id="checkout_txt">BACK CHECK-OUT</span>
              <button
                className="close_popup_payment_btn"
                onClick={handlePopupPaymentClose}
              >
                X
              </button>
            </div>
            <div id="checkout_desc_txt">
              Choose a size and finalize your order
            </div>
            <div className="grid-popup-payment-container">
              <div className="grid-popup-payment-item-form">
                <a onClick={handleGoToShopping}>
                  <span id="back_to_shopping">&lt; GO BACK TO SHOPPING</span>
                </a>

                <form>
                  <div className="header_title">1. CONTINUE AS GUEST</div>
                  <div className="border_header"></div>

                  <label className="label_100_percents" for="email">
                    Email*
                  </label>
                  <input
                    className="input_100_percents"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john.smith@gmail.com"
                  />

                  <div className="header_title">2. SHIPPING ADDRESS</div>
                  <div className="border_header"></div>

                  <div className="div_labels">
                    <div className="label_firstname">First name*</div>

                    <div className="label_name">Name*</div>
                  </div>

                  <div className="div_inputs">
                    <div className="div_input_firstname">
                      <input
                        className="input_firstname"
                        type="text"
                        id="firstname"
                        name="firstname"
                        placeholder="John"
                      />
                    </div>
                    <div className="div_input_name">
                      <input
                        className="input_name"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <label className="label_100_percents" for="address">
                    Address*
                  </label>
                  <input
                    className="input_100_percents"
                    type="text"
                    id="address"
                    name="address"
                    placeholder="23 Oxford Street"
                  />

                  <div className="div_labels">
                    <label className="label_country" for="country">
                      Country*
                    </label>
                    <label className="label_city" for="city">
                      City*
                    </label>
                    <label className="label_zip" for="zip">
                      Zip code*
                    </label>
                  </div>

                  <div className="div_inputs">
                    <div className="div_input_country">
                      <input
                        className="input_country"
                        type="text"
                        id="country"
                        name="country"
                        placeholder="UK"
                      />
                    </div>
                    <div className="div_input_city">
                      <input
                        className="input_city"
                        type="text"
                        id="city"
                        name="city"
                        placeholder="London"
                      />
                    </div>
                    <div className="div_input_zip">
                      <input
                        className="input_zip"
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="231765"
                      />
                    </div>
                  </div>

                  <label className="label_phone" for="phone">
                    Phone*
                  </label>
                  <div className="div_inputs">
                    <input
                      className="input_phone"
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="+44 204 577 00 77"
                    />
                  </div>

                  <div className="header_title">3. BILLING</div>
                  <div className="border_header"></div>

                  <label className="label_100_percents" for="card_holder_name">
                    Card holder Name*
                  </label>
                  <div className="div_inputs">
                    <input
                      className="input_100_percents"
                      type="text"
                      id="card_holder_name"
                      name="card_holder_name"
                      placeholder="John Smith"
                    />
                  </div>

                  <div className="div_labels">
                    <div className="label_card_number" for="card_number">
                      Credit/Debit card Number*
                    </div>
                    <div className="label_cvc" for="cvc">
                      CVC*
                    </div>
                  </div>

                  <div className="div_inputs">
                    <div className="div_input_card_number">
                      <input
                        className="input_card_number"
                        type="text"
                        id="card_number"
                        name="card_number"
                        placeholder="532610331267"
                      />
                    </div>
                    <div className="div_input_cvc">
                      <input
                        className="input_cvc"
                        type="text"
                        id="cvc"
                        name="cvc"
                        placeholder="543"
                      />
                    </div>
                  </div>

                  <div className="div_labels">
                    <label
                      className="label_expiration_date"
                      for="expiration_date"
                    >
                      Expiration Date*
                    </label>
                    <label className="label_id_number" for="id_number">
                      ID Number*
                    </label>
                  </div>

                  <div className="div_inputs">
                    <div className="div_input_expiration_date">
                      <input
                        className="input_expiration_date"
                        type="text"
                        id="expiration_date"
                        name="expiration_date"
                        placeholder="07/26"
                      />
                    </div>
                    <div className="div_input_id_number">
                      <input
                        className="input_id_number"
                        type="text"
                        id="id_number"
                        name="id_number"
                        placeholder="7653498765"
                      />
                    </div>
                  </div>

                  <div className="div_form_bottom">
                    <div className="div_required_field">
                      <span className="required_field">
                        *This field is mandatory
                      </span>
                    </div>
                    <div className="div_btn_payment">
                      <button
                        id="btn_payment_popup"
                      >
                        PROCEED TO PAYMENT
                      </button>
                    </div>
                  </div>
                  <div id="popup_payment_bottom">&nbsp;</div>
                </form>
              </div>
              <div className="grid-popup-payment-item-imgs">
                <span className="my_bag_title">MY BAG</span>
                <div className="prdt_box">
                  <button className="box_close-btn">X</button>
                  <div className="prdt_box_inner">
                    <div className="selected_prdt_img_div">
                      <img
                        className="selected_prdt_img"
                        src={`images/${props.product.img}`}
                      />
                    </div>
                    <div className="div_selected_prdt">
                      <div className="selected_prdt">Selected product</div>
                      <div className="belt_name">{props.product.name}</div>
                      <div className="selected_prdt_txt">Selected size</div>
                      <div className="selected_prdt_txt">Color</div>
                      <div className="selected_prdt_price_part">
                        <div className="selected_prdt_price">
                          {props.product.price}₪
                        </div>
                        <div className="link_modify">
                          <a>MODIFY</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div_plus_and_belt_box">
                  <div className="link_display_belt_box">
                    <a onClick={handleShowBeltBox}>+</a>
                  </div>
                  <div className="belt_box">
                    <button
                      className="belt_box_close-btn"
                      onClick={handleBeltBoxClose}
                    >
                      X
                    </button>
                    <div className="prdt_box_inner">
                      <div className="selected_prdt_img_div">
                        <img className="belt_img" src={`images/belt.png`} />
                      </div>
                      <div>
                        <div className="selected_prdt_name">
                          Black Belt Leather
                        </div>
                        <div className="selected_prdt_txt">Ref. 054122</div>
                        <div className="selected_prdt_price_part">
                          <div className="selected_prdt_price">100₪</div>
                          <div className="link_add_to_bag">
                            <a>ADD TO BAG</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="popup-payment_mobile">
          <div className="popup-payment-inner_mobile">
            <div className="div_title_mobile">
              <span id="checkout_txt_mobile">BACK CHECK-OUT</span>
              <button
                className="close_popup_payment_btn_mobile"
                onClick={handlePopupPaymentClose}
              >
                X
              </button>
            </div>
            <div id="checkout_desc_txt_mobile">
              Choose a size and finalize your order
            </div>
            <div className="grid-popup-payment-container_mobile">
              <div className="grid-popup-payment-item-form_mobile">
                <a onClick={handleGoToShopping}>
                  <span id="back_to_shopping_mobile">
                    &lt; GO BACK TO SHOPPING
                  </span>
                </a>

                <form>
                  <div className="header_title_mobile">
                    1. CONTINUE AS GUEST
                  </div>
                  <div className="border_header_mobile"></div>

                  <label className="label_100_percents_mobile" for="email">
                    Email*
                  </label>
                  <input
                    className="input_100_percents_mobile"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john.smith@gmail.com"
                  />

                  <div className="header_title_mobile">2. SHIPPING ADDRESS</div>
                  <div className="border_header_mobile"></div>

                  <div className="div_labels_mobile">
                    <div className="label_firstname_mobile">First name*</div>

                    <div className="label_name_mobile">Name*</div>
                  </div>

                  <div className="div_inputs_mobile">
                    <div className="div_input_firstname_mobile">
                      <input
                        className="input_firstname_mobile"
                        type="text"
                        id="firstname"
                        name="firstname"
                        placeholder="John"
                      />
                    </div>
                    <div className="div_input_name_mobile">
                      <input
                        className="input_name"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <label className="label_100_percents_mobile" for="address">
                    Address*
                  </label>
                  <input
                    className="input_100_percents_mobile"
                    type="text"
                    id="address"
                    name="address"
                    placeholder="23 Oxford Street"
                  />

                  <div className="div_labels_mobile">
                    <label className="label_country_mobile" for="country">
                      Country*
                    </label>
                    <label className="label_city_mobile" for="city">
                      City*
                    </label>
                    <label className="label_zip_mobile" for="zip">
                      Zip code*
                    </label>
                  </div>

                  <div className="div_inputs_mobile">
                    <div className="div_input_country_mobile">
                      <input
                        className="input_country_mobile"
                        type="text"
                        id="country"
                        name="country"
                        placeholder="UK"
                      />
                    </div>
                    <div className="div_input_city_mobile">
                      <input
                        className="input_city_mobile"
                        type="text"
                        id="city"
                        name="city"
                        placeholder="London"
                      />
                    </div>
                    <div className="div_input_zip_mobile">
                      <input
                        className="input_zip_mobile"
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="231765"
                      />
                    </div>
                  </div>

                  <label className="label_phone_mobile" for="phone">
                    Phone*
                  </label>
                  <div className="div_inputs_mobile">
                    <input
                      className="input_phone_mobile"
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="+44 204 577 00 77"
                    />
                  </div>

                  <div className="header_title_mobile">3. BILLING</div>
                  <div className="border_header_mobile"></div>

                  <label
                    className="label_100_percents_mobile"
                    for="card_holder_name"
                  >
                    Card holder Name*
                  </label>
                  <div className="div_inputs_mobile">
                    <input
                      className="input_100_percents_mobile"
                      type="text"
                      id="card_holder_name"
                      name="card_holder_name"
                      placeholder="John Smith"
                    />
                  </div>

                  <div className="div_labels_mobile">
                    <div className="label_card_number_mobile" for="card_number">
                      Credit/Debit card Number*
                    </div>
                    <div className="label_cvc_mobile" for="cvc">
                      CVC*
                    </div>
                  </div>

                  <div className="div_inputs_mobile">
                    <div className="div_input_card_number_mobile">
                      <input
                        className="input_card_number_mobile"
                        type="text"
                        id="card_number"
                        name="card_number"
                        placeholder="532610331267"
                      />
                    </div>
                    <div className="div_input_cvc_mobile">
                      <input
                        className="input_cvc_mobile"
                        type="text"
                        id="cvc"
                        name="cvc"
                        placeholder="543"
                      />
                    </div>
                  </div>

                  <div className="div_labels_mobile">
                    <label
                      className="label_expiration_date_mobile"
                      for="expiration_date"
                    >
                      Expiration Date*
                    </label>
                    <label className="label_id_number_mobile" for="id_number">
                      ID Number*
                    </label>
                  </div>

                  <div className="div_inputs_mobile">
                    <div className="div_input_expiration_date_mobile">
                      <input
                        className="input_expiration_date_mobile"
                        type="text"
                        id="expiration_date"
                        name="expiration_date"
                        placeholder="07/26"
                      />
                    </div>
                    <div className="div_input_id_number_mobile">
                      <input
                        className="input_id_number_mobile"
                        type="text"
                        id="id_number"
                        name="id_number"
                        placeholder="7653498765"
                      />
                    </div>
                  </div>

                  <div className="div_form_bottom_mobile">
                    <div className="div_required_field_mobile">
                      <span className="required_field_mobile">
                        *This field is mandatory
                      </span>
                    </div>
                    <div className="div_btn_payment_mobile">
                      <button
                        id="btn_payment_popup_mobile"
                      >
                        PROCEED TO PAYMENT
                      </button>
                    </div>
                  </div>
                  <div id="popup_payment_bottom_mobile">&nbsp;</div>
                </form>
              </div>
              <div className="grid-popup-payment-item-imgs_mobile">
                <span className="my_bag_title_mobile">MY BAG</span>
                <div className="prdt_box_mobile">
                  <button className="box_close-btn_mobile">X</button>
                  <div className="prdt_box_inner_mobile">
                    <div className="selected_prdt_img_div_mobile">
                      <img
                        className="selected_prdt_img_mobile"
                        src={`images/${props.product.img}`}
                      />
                    </div>
                    <div className="div_selected_prdt_mobile">
                      <div className="selected_prdt_mobile">
                        Selected product
                      </div>
                      <div className="belt_name_mobile">
                        {props.product.name}
                      </div>
                      <div className="selected_prdt_txt_mobile">
                        Selected size
                      </div>
                      <div className="selected_prdt_txt_mobile">Color</div>
                      <div className="selected_prdt_price_part_mobile">
                        <div className="selected_prdt_price_mobile">
                          {props.product.price}₪
                        </div>
                        <div className="link_modify_mobile">
                          <a>MODIFY</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div_plus_and_belt_box_mobile">
                  <div className="link_display_belt_box_mobile">
                    <a onClick={handleShowBeltBox}>+</a>
                  </div>
                  <div className="belt_box_mobile">
                    <button
                      className="belt_box_close-btn_mobile"
                      onClick={handleBeltBoxClose}
                    >
                      X
                    </button>
                    <div className="prdt_box_inner_mobile">
                      <div className="selected_prdt_img_div_mobile">
                        <img
                          className="belt_img_mobile"
                          src={`images/belt.png`}
                        />
                      </div>
                      <div>
                        <div className="selected_prdt_name_mobile">
                          Black Belt Leather
                        </div>
                        <div className="selected_prdt_txt_mobile">
                          Ref. 054122
                        </div>
                        <div className="selected_prdt_price_part_mobile">
                          <div className="selected_prdt_price_mobile">100₪</div>
                          <div className="link_add_to_bag_mobile">
                            <a>ADD TO BAG</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  ) : null;
}

export default PopupPaymentComponent;
