import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import flag from "../assets/images/homes/flag-green.svg";
import quote from "../assets/images/homes/reports.svg";
import quoteImage from "../assets/images/homes/pb_dashboard.png";
import featureUI from "../assets/images/solutions/solutions-cover.png";
import ui from "../assets/images/homes/pb_dashboard.png";
import pReport from "../assets/images/homes/project-report.png";
import money from "../assets/images/homes/money.svg";

export const Solutions = () => {
  return (
    <>
      <Nav />
      <section className="py-5">
        <div className="container">
          <div className="header-content px-5">
            <div className="container">
              <div className="row justify-content-center align-items-center pb-3">
                <div className="col-lg-6 col-12">
                  <p className="heading1">
                  Real-time insights into financial performance with Someekoron              
                  </p>

                  <p className="fs-20 mb-4">
                    <i class="fa-solid fa-chart-line text-primary me-2"></i>Boost
                    your business process 60% faster
                  </p>

                  <div className="d-flex">
                    <div className="me-2">
                      <div className="button-1 py-3 px-3 button-height1">
                        Start Free Now
                      </div>
                    </div>
                    <div className="me-2">
                      <div className="button-2 py-3 px-3 button-height1">
                        Talk With Sales
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-12 text-center">
                  <img className="featues_header_img" src={featureUI} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-5">
        <div className="container">
          <div class="row">
            <p class="featureSecond-heading mb-5">
              Quotation making, budgeting<br />
              and documentation all in one place!
              <span>
                <img src={flag} className="rocket-xl" />
              </span>
            </p>
            <div className="col-lg-6 mb-4">
              <div className="bg-light-dark rounded-4 p-4 pb-0">
                <img className="addition_feature_icon mb-3" src={quote} />
                <p className="fs-20 fw-600">Make Project Quote</p>
                <p className="fs-16">
                Impress clients with professional price proposal process  
                </p>
                <div className="text-center pt-4">
                  <img className="feature_image_sm" src={quoteImage} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="bg-light-dark rounded-4 p-4 pb-0">
                <img className="addition_feature_icon mb-3" src={quote} />
                <p className="fs-20 fw-600">Project Budgeting</p>
                <p className="fs-16">
                Track budgets, expenses, and revenue effortlessly
                </p>
                <div className="text-center pt-4">
                  <img className="feature_image_sm" src={quoteImage} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="bg-light-dark rounded-4 p-4 pb-0">
                <img className="addition_feature_icon mb-3" src={quote} />
                <p className="fs-20 fw-600">Project Team</p>
                <p className="fs-16">
                Work together efficiently to achieve greater success                </p>
                <div className="text-center pt-4">
                  <img className="feature_image_sm" src={quoteImage} />
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="bg-light-dark rounded-4 p-4 pb-0">
                <img className="addition_feature_icon mb-3" src={quote} />
                <p className="fs-20 fw-600">Invoice & Payment Process</p>
                <p className="fs-16">
                  Make Invoice & Payment Receipt with a single click 
                </p>
                <div className="text-center pt-4">
                  <img className="feature_image_sm" src={quoteImage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className="my-5 container">
        <p class="text-center heading2 mb-4">
        Quick Solution For <br/>
Customer & Vendor Management
        </p>

        <div class="w-90 mx-auto">
          <div className="d-flex justify-content-center">
          <nav className="">
              <div class="nav nav-tabs border-0" id="nav-tab" role="tablist">
                <button
                  class="nav-link text-start me-4 rounded-pill fs-14 py-0 active"
                  id="nav-Customer-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-Customer"
                  type="button"
                  role="tab"
                  aria-controls="nav-Customer"
                  aria-selected="true"
                >
                  <p className="m-0">Customer</p>
                </button>

                <button
                  class="nav-link text-start me-4 rounded-pill fs-14 py-0"
                  id="nav-Vendor-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-Vendor"
                  type="button"
                  role="tab"
                  aria-controls="nav-Vendor"
                  aria-selected="true"
                >
                  <p className="m-0">Vendor</p>
                </button>
                
              </div>
            </nav>
          </div>
            

            <div class="tab-content p-5" id="nav-tabContent">
              <div
                class="tab-pane bg-light-dark rounded-4 fade active show px-3 pt-3"
                id="nav-Customer"
                role="tabpanel"
                aria-labelledby="nav-Customer-tab"
              >
                <div className="container row p-0 align-items-center">
                  <div className="col-lg-12 col-md-12 col-sm-12 px-lg-5 py-3">
                    {" "}
                    <div class="text-left">
                      <p class="feature-heading mb-3">
                      Overview all project history and transaction record & status of a customer.
                      </p>
                      
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12 p-0 mt-3 text-center  ">
                    <img className="tab_content_ui" src={ui} alt="" />
                  </div>
                </div>
              </div>

              <div
                class="tab-pane bg-light-dark rounded-4 fade show px-3 pt-3"
                id="nav-Vendor"
                role="tabpanel"
                aria-labelledby="nav-Vendor-tab"
              >
                <div className="container row p-0 align-items-center">
                  <div className="col-lg-12 col-md-12 col-sm-12 px-lg-5 py-3">
                    {" "}
                    <div class="text-left">
                      <p class="feature-heading mb-3">
                      Keep record of all venndor transection for more transperency
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12 p-0 mt-3 text-center  ">
                    <img className="tab_content_ui" src={ui} alt="" />
                  </div>
                </div>
              </div>

            </div>
          
        </div>
      </section>

      <section className="report_section mb-5 pt-5">
        <div className="container px-5 pb-5">
          <div className="row pt-3 px-4 justify-content-center align-items-center">
            <div className="col-lg-10 p-5 pb-0 report-card">
                <div className="report-content mb-5">
                  <p className="heading2 mb-1 fw-600">
                    All transaction records connected <br/> automatically on a single workboard{" "}
                    <span>
                      <img className="rocket" src={money} />
                    </span>
                  </p>
                  <p className="fs-16">
                    
                  </p>
              </div>
              <div className="text-center">
              <img className="report-img" src={pReport}/>
              </div>
              
            </div>
            <div className="col-lg-12 p-3 text-center my-5">
            <p className="heading2 pt-4">How Someekoron grow your business</p>
            <div className="container w-75 pt-4">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="performance-card text-start p-4">
                            <p className="text-primary2 heading1 mb-1">60%</p>
                            <p className="fs-18 fw-600">Scalable Time Savings</p>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="performance-card text-start p-4">
                            <p className="text-primary2 heading1 mb-1">80%</p>
                            <p className="fs-18 fw-600">Paperless Experience</p>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="performance-card text-start p-4">
                            <p className="text-primary2 heading1 mb-1">90%</p>
                            <p className="fs-18 fw-600">Team Productivity</p>
                        </div>
                    </div>


                    <div className="col-lg-3">
                        <div className="performance-card text-start p-4">
                            <p className="text-primary2 heading1 mb-1">100%</p>
                            <p className="fs-18 fw-600">Accurecy in Accounts</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
