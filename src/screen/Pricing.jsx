import React, { useState } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import FAQ from "../components/FAQ";
import check from "../assets/images/homes/green-check.png"
import faq from "../assets/images/homes/faq.svg"
const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [isYearlyp, setIsYearlyp] = useState(false);

  const handleToggle = () => {
    setIsYearly((prevIsYearly) => !prevIsYearly);
    setIsYearlyp((prevIsYearlyp) => !prevIsYearlyp);
  };

  const price = isYearly ? 25000 : 2500;
  const pprice = isYearlyp ? 40000 : 4000;
  const type = isYearly || isYearlyp ? 'Yearly' : 'Monthly'

  return (
    <div id="pricingSection">
      <Nav />
      <div className="container pt-5">
        <div className="text-center">
          <p className="heading1">
            Choose your plan for <br /> Best Project Accounts Solution
          </p>

          <div className="justify-content-center">
            <div class="d-flex justify-content-center align-items-center">
              <p class="fs-20 m-0">Monthly</p>
              <div class="form-check form-switch mx-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  checked={isYearly}
                  onChange={handleToggle}
                />
              </div>

              <p className="fs-20 m-0">Yearly <span className="text-secondary fs-16">(Save 2 Months)</span></p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="d-flex flex-row justify-content-center mb-5">
          
        <div className="card_price">
            <div className="px-3">
              <div className="price_one price_hover p-4 mt-5">
                <p className="fs-18 mb-2 fw-600">Starter</p>

                <h2
                  className="fw-bold odometer"
                  data-price-monthly="25"
                  data-price-yearly="20"
                >
                  FREE
                </h2>
                <p className="mb-5">No Bill</p>

                <div className="text-center">
                  <button className="button-1 px-5 py-2s fw-bold">
                    {" "}
                    Try for free
                  </button>{" "}
                  <br />
                </div>
                <p className="mb-3 fs-16 fw-600">Get started with...</p>
                <h6 className="mb-2">
                  <img src={check} className="check-green me-2"/>Unlimited Project
                </h6>
                <h6 className="mb-2">
                  <img src={check} className="check-green me-2"/>Single User
                </h6>


              </div>
            </div>
          </div>

          <div className="card_price">
            <div className="px-3">
              <div className="price_one price_hover p-4 mt-5">
                <p className="fs-18 mb-2 fw-600">Basic</p>

                <h2
                  className="fw-bold odometer"
                  data-price-monthly="25"
                  data-price-yearly="20"
                >
                  {price} BDT
                </h2>
                <p className="mb-5"> Billed {type}</p>

                <div className="text-center">
                  <button className="button-1 px-5 py-2s fw-bold">
                    {" "}
                    Try for free
                  </button>{" "}
                  <br />
                </div>
                <p className="mb-3 fs-16 fw-600">Get started with...</p>
                <h6 className="mb-2">
                  <img src={check} className="check-green me-2"/>Unlimited Project
                </h6>
                <h6 className="mb-2">
                  <img src={check} className="check-green me-2"/>Unlimited Discussion
                </h6>
                <h6 className="mb-2">
                  <img src={check} className="check-green me-2"/>5 User & Permission
                </h6>
                <h6 className="mb-2">
                  <img src={check} className="check-green me-2"/>Weekly Data Backup
                </h6>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="card_price">
            <div className="px-3">
              <div className="price_two price_hover p-4 mt-5">
                <p className="fs-18 mb-2 fw-600">Growth</p>

                <h2
                  className="fw-bold odometer"
                  data-price-monthly="300"
                  data-price-yearly="240"
                >
                  {pprice} BDT
                </h2>
                <p className="mb-5"> Billed {type}</p>

                <div className="text-center">
                  <button className="button-1 px-5 py-2s fw-bold">
                    {" "}
                    Try for free
                  </button>{" "}
                  <br />
                  
                </div>
                <p className="mb-3 fs-16 fw-600">Everything in Starter plus....</p>
                <h6 className="mb-2">
                  <img src={check} className="check-green me-2"/>Unlimited Project
                </h6>
                <h6 className="mb-2">
                  <img src={check} className="check-green me-2"/>Unlimited Discussion
                </h6>
                <h6 className="mb-2">
                  <img src={check} className="check-green me-2"/>Unlimited User & Permission
                </h6>
                <h6 className="mb-2">
                  <img src={check} className="check-green me-2"/>Documents Share
                </h6>
                <h6 className="mb-2">
                  <img src={check} className="check-green me-2"/>10GB Storage
                </h6>
                <h6 className="mb-2">
                  <img src={check} className="check-green me-2"/>Weekly Data Backup
                </h6>
              </div>
            </div>
          </div>

          <div className="card_price">
            <div className="px-3">
              <div className="price_three price_hover p-4 mt-5">
                <p className="fs-18 mb-2 text-warning fw-600">Professional</p>

                <h2
                  className="fw-bold odometer"
                  data-price-monthly="300"
                  data-price-yearly="240"
                >
                  RFQ
                </h2>
                <p className="mb-5 text-white">Billed Monthly</p>

                <div className="text-center">
                  <button className="button-2 mb-4 px-5 py-2s fw-bold">
                    {" "}
                    Talk to sales
                  </button>{" "}
                  <br />
                 
                </div>
                <p className="mb-3 fs-16 fw-600 text-white">Fully customizable for you...</p>
                <h6 className="mb-2">
                  <img src={check} className="check-green me-2"/>On Your Domain
                </h6>
                <h6 className="mb-2">
                  <img src={check} className="check-green me-2"/>On Demand
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="container my-5 px-5">
          <p className="heading1 text-center">
            Get answer of your all question <span><img className="rocket" src={faq}/></span>
          </p>
          <div className="row py-4">
          <FAQ/>
          </div>
        </div>
      </section>

      {/*  */}
      <script>
        {`
          window.odometerOptions = {
            duration: 400
          };
        `}
      </script>
      
      <Footer />
    </div>
  );
};

export default Pricing;
