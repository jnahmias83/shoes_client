import React from "react";

function PopupPaymentComponent(props) {
  const handlePopupClose = () => {
    props.setTriggerPayment(false);
    props.setTrigger(false);
    document.body.style.overflow = "visible";
    document.querySelector("#products").style.backgroundImage = "linear-gradient(123deg, #1f1f1f, #000 102%)";
    document.querySelector("#products").style.display = 'none';
    const element = document.querySelector("#home");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGoToShopping = () => {
    props.setTriggerPayment(false);
    props.setTrigger(false);
    document.body.style.overflow = "visible";
    document.querySelector("#products").style.backgroundImage = "linear-gradient(123deg, #1f1f1f, #000 102%)";
    const element = document.querySelector("#products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleShowBeltBox = () => {
    document.querySelector(".belt_box").style.opacity = '1';
  }

  const handleBeltBoxClose = () => {
    document.querySelector(".belt_box").style.transition = '1s';
    document.querySelector(".belt_box").style.opacity = '0';
  }

  return props.triggerPayment ? (
    <div className="popup-payment">
      <div className="popup-payment-inner">
        <div>
          <span id="checkout_txt">BACK CHECK-OUT</span>
          <button
            className="close-popup_payment_btn"
            onClick={handlePopupClose}
          >
            X
          </button>
        </div>
        <div id="checkout_desc_txt">Choose a size and finalize your order</div>
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

              <div>
                <label className="label_firstname" for="firstname">
                  First name*
                </label>
                <label className="label_name" for="name">
                  Name*
                </label>
              </div>

              <div className="div_inputs">
                <input
                  className="input_firstname"
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="John"
                />
                <input
                  className="input_name"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Smith"
                />
              </div>

              <label className="label_100_percents" for="address">
                Address*
              </label>
              <div className="div_inputs">
                <input
                  className="input_100_percents"
                  type="text"
                  id="address"
                  name="address"
                  placeholder="23 Oxford Street"
                />
              </div>

              <div>
                <label className="label_country" for="country">
                  Country*
                </label>
                <label className="label_country" for="city">
                  City*
                </label>
                <label className="label_zip" for="zip">
                  Zip code*
                </label>
              </div>

              <div className="div_inputs">
                <input
                  className="input_country"
                  type="text"
                  id="country"
                  name="country"
                  placeholder="UK"
                />
                <input
                  className="input_country"
                  type="text"
                  id="city"
                  name="city"
                  placeholder="London"
                />
                <input
                  className="input_zip"
                  type="text"
                  id="zip"
                  name="zip"
                  placeholder="231765"
                />
              </div>

              <label className="label_name" for="phone">
                Phone*
              </label>
              <div className="div_inputs">
                <input
                  className="input_zip"
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

              <div>
                <label className="label_card_number" for="card_number">
                  Credit/Debit card Number*
                </label>
                <label className="label_name" for="cvc">
                  CVC*
                </label>
              </div>

              <div className="div_inputs">
                <input
                  className="input_firstname"
                  type="text"
                  id="card_number"
                  name="card_number"
                  placeholder="532610331267"
                />
                <input
                  className="input_name"
                  type="text"
                  id="cvc"
                  name="cvc"
                  placeholder="543"
                />
              </div>

              <div>
                <label className="label_expiration_date" for="expiration_date">
                  Expiration Date*
                </label>
                <label className="label_name" for="id_number">
                  ID Number*
                </label>
              </div>

              <div className="div_inputs">
                <input
                  className="input_firstname"
                  type="text"
                  id="expiration_date"
                  name="expiration_date"
                  placeholder="07/26"
                />
                <input
                  className="input_name"
                  type="text"
                  id="id_number"
                  name="id_number"
                  placeholder="7653498765"
                />
              </div>

              <div>
                <span className="required_field">*This field is mandatory</span>
                <button id="btn_payment">PROCEED TO PAYMENT</button>
              </div>
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
                <div>
                  <span className="selected_prdt">Selected product</span>
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
  ) : null;
}

export default PopupPaymentComponent;
