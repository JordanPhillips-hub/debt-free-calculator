import React from "react";
import Input from "./Input";
import CustomSelectForm from "./CustomSelectForm";
import "../styles/ExtraPayments.css";

class ExtraPayments extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="extraPaymentsSection">
        <p className="extraPaymentsSection__text">
          Calculate the impact of extra payments using any combination of the
          inputs below. To see your new estimated payoff date, click 'Show
          amortization schedule' link above.
        </p>

        <form className="flex extraPaymentsFlex">
          <Input
            label="to your monthly payment"
            labelClass="extraPaymentForm__label"
            for="extra-monthly-payment"
            divClass="flexReverse extraPaymentForm"
            inputClass="form__input"
          />
        </form>

        <div className="flex extraPaymentsFlex">
          <form>
            <Input
              label="as an extra yearly payment occurring every:"
              labelClass="extraPaymentForm__label"
              for="extra-yearly-payment"
              divClass="flexReverse extraPaymentForm"
              inputClass="form__input"
            />
          </form>
          <CustomSelectForm text="Month" />
        </div>

        <div className="flex extraPaymentsFlex">
          <form>
            <Input
              label="as a one-time payment in:"
              labelClass="extraPaymentForm__label"
              for="one-time-payment"
              divClass="flexReverse extraPaymentForm"
              inputClass="form__input"
            />
          </form>
          <CustomSelectForm text="Month" id="month" />

          <div className="selectContainer">
            <div className="select">
              <div>
                <span id="selectText">Year</span>
              </div>

              <div>
                <i id="selectArrow" class="selectArrow fas fa-chevron-down"></i>
              </div>
            </div>

            <div id="selectModal" class="selectModal">
              <div id="optionContainer" class="optionContainer">
                <p class="option" value="2022">
                  2022
                </p>
                <p class="option" value="2023">
                  2023
                </p>
                <p class="option" value="2024">
                  2024
                </p>
                <p class="option" value="2025">
                  2025
                </p>
                <p class="option" value="2026">
                  2026
                </p>
                <p class="option" value="2027">
                  2027
                </p>
                <p class="option" value="2028">
                  2028
                </p>
                <p class="option" value="2029">
                  2029
                </p>
                <p class="option" value="2030">
                  2030
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ExtraPayments;
