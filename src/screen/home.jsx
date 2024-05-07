import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import star from "../assets/images/homes/star.png";
import collaborate from "../assets/images/homes/collaborate.png";
import security from "../assets/images/homes/security.png";
import rfq from "../assets/images/homes/rfq_list.svg";
import supplier from "../assets/images/homes/supplier.svg";
import userPriv from "../assets/images/homes/team_prev.svg";
import reportHub from "../assets/images/homes/reports.svg";
import ui from "../assets/images/homes/pb_dashboard.png";
import insight from "../assets/images/homes/project-insight.png"
import shuffle from "../assets/images/homes/shuffle.png";
import budget from "../assets/images/homes/budget-alt.png";
import collab from "../assets/images/homes/department.png";
import assign from "../assets/images/homes/team-check.png";
import transaction from "../assets/images/homes/checklist.png";
import mbl_app from "../assets/images/homes/mobile_app.png";
import banner from "../assets/images/homes/someekoron-home.png";
import rocket from "../assets/images/homes/rocket.svg"
import mobile from "../assets/images/homes/mobile.svg"
import arrow from "../assets/images/homes/arrow-link.svg"
import building from "../assets/images/homes/building.svg"
import it from "../assets/images/homes/it.svg"
import install from "../assets/images/homes/install.svg"
import up from "../assets/images/homes/see-up.png"
import bellow from "../assets/images/homes/see-below.png"
import explore from "../assets/images/homes/compass.png"
import Accordesk from "../components/accordesk";
import apple from "../assets/images/homes/apple.png";
import playstore from "../assets/images/homes/playstore.png";
import apple_play from "../assets/images/homes/apple_play.png";

const home = () => {
  return (
    <>
      <Nav />

      <section className="py-4">
        <div className="container-fluid px-5">
          <div className="">
            <div className="row justify-content-center pt-lg-5">
              <div className="col-lg-12 text-center mt-5">
                <p className="headtext">
                Navigate Workflow, 
                With Precise Accounting
                </p>
                <p className="fs-20 fw-500">
                  From Planning to Profit: Experience Business Growth Through
                  Our Integrated Approach
                </p>

                <div className="">
                  <Link
                    class="header-button mt-4"
                    type="button"
                    to="/registration"
                  >
                    Get Started! It's Free <i class="fa-solid fa-arrow-right-long ms-2"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-12 text-center">
                <img src={banner} className="banner_main pb-3" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-5 container">
        <div className="text-center">
<p className="heading2 mt-4">
Mastering Project Planning
</p>
<p className="fs-16">From Making Quotation to Project Completion; everything done with Someekoron</p>
        </div>

        <div className="row my-5">
          <div className="col-lg-6">
<div className="rounded-4 bg-light-dark pt-4">
<img className="feature-icon px-4" src={shuffle} alt="" />
                <p className="feature-h-text my-3 px-4">Project Insights</p>
                <div className="">
<p className="feature-m-text px-4 fs-16 w-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aut officia veniam possimus. Dolore, commodi impedit libero modi porro perspiciatis optio, accusantium repellendus asperiores rem illum magnam ab laborum sint?</p>
<div className="d-flex s">
<img className="feature-image-sm px-4" src={insight} alt="" />
</div>
</div>

</div>
          </div>

          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6 mb-3">
              <div className="rounded-4 bg-light-dark py-4">
              <img className="feature-icon px-4" src={assign} alt="" />
              <p className="feature-h-text my-3 px-4">Team Assign</p>
              <p className="feature-m-text px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aut officia veniam possimus.</p>
                </div>
              </div>
              <div className="col-lg-6 mb-3">
              <div className="rounded-4 bg-light-dark py-4">
              <img className="feature-icon px-4" src={budget} alt="" />
              <p className="feature-h-text my-3 px-4">Budgeting</p>
              <p className="feature-m-text px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aut officia veniam possimus.</p>
                </div>
              </div>

              <div className="col-lg-6 mb-3">
              <div className="rounded-4 bg-light-dark py-4">
              <img className="feature-icon px-4" src={transaction} alt="" />
              <p className="feature-h-text my-3 px-4">Transaction Record</p>
              <p className="feature-m-text px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aut officia veniam possimus.</p>
                </div>
              </div>

              <div className="col-lg-6 mb-3">
              <div className="rounded-4 bg-light-dark py-4">
              <img className="feature-icon px-4" src={collab} alt="" />
              <p className="feature-h-text my-3 px-4">Collaboration</p>
              <p className="feature-m-text px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aut officia veniam possimus.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pills_tab container pt-5">
        <p class="text-center heading2 my-4">
          Collaborate, Track & Succeed <br />
          With Enriched Project Management Tool
        </p>

        <div class="w-90 mx-auto">
          <div className="d-flex justify-content-center">
          <nav className="">
              <div class="nav nav-tabs border-0" id="nav-tab" role="tablist">
                <button
                  class="nav-link text-start me-4 rounded-pill fs-14 py-0 active"
                  id="nav-Plan-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-Plan"
                  type="button"
                  role="tab"
                  aria-controls="nav-Plan"
                  aria-selected="true"
                >
                  <p className="m-0">Plan</p>
                </button>

                <button
                  class="nav-link text-start me-4 rounded-pill fs-14 py-0"
                  id="nav-Budget-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-Budget"
                  type="button"
                  role="tab"
                  aria-controls="nav-Budget"
                  aria-selected="true"
                >
                  <p className="m-0">Budget</p>
                </button>

                <button
                  class="nav-link text-start me-4 rounded-pill fs-14 py-0"
                  id="nav-accounts-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-accounts"
                  type="button"
                  role="tab"
                  aria-controls="nav-accounts"
                  aria-selected="false"
                >
                  {" "}
                  <p className="m-0">Accounts</p>
                </button>
                <button
                  class="nav-link text-start me-4 rounded-pill fs-14 py-0"
                  id="nav-resources-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-resources"
                  type="button"
                  role="tab"
                  aria-controls="nav-resources"
                  aria-selected="false"
                >
                  {" "}
                  <p className="m-0">Resource</p>
                </button>
                <button
                  class="nav-link text-start me-4 rounded-pill fs-14 py-0"
                  id="nav-task-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-task"
                  type="button"
                  role="tab"
                  aria-controls="nav-task"
                  aria-selected="false"
                >
                  {" "}
                  <p className="m-0">Worksheet</p>
                </button>
                <button
                  class="nav-link text-start me-4 rounded-pill fs-14 py-0"
                  id="nav-collab-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-collab"
                  type="button"
                  role="tab"
                  aria-controls="nav-collab"
                  aria-selected="false"
                >
                  {" "}
                  <p className="m-0">Collaboration</p>
                </button>
                
                
                
                
              </div>
            </nav>
          </div>
            

            <div class="tab-content p-5" id="nav-tabContent">
              <div
                class="tab-pane bg-light-dark rounded-4 fade active show px-3 pt-3"
                id="nav-Plan"
                role="tabpanel"
                aria-labelledby="nav-Plan-tab"
              >
                <div className="container row p-0 align-items-center">
                  <div className="col-lg-12 col-md-12 col-sm-12 px-lg-5 py-3">
                    {" "}
                    <div class="text-left">
                      <p class="feature-heading mb-3">
                        Mastering Project Planning for Greater Success
                      </p>
                      <p class="feature-content mb-0">
                        From Making Quotation to Project Completion; everything
                        done with Someekoron
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
                id="nav-Budget"
                role="tabpanel"
                aria-labelledby="nav-Budget-tab"
              >
                <div className="container row p-0 align-items-center">
                  <div className="col-lg-12 col-md-12 col-sm-12 px-lg-5 py-3">
                    {" "}
                    <div class="text-left">
                      <p class="feature-heading mb-3">
                        Mastering Project Planning for Greater Success
                      </p>
                      <p class="feature-content mb-0">
                        From Making Quotation to Project Completion; everything
                        done with Someekoron
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
                id="nav-accounts"
                role="tabpanel"
                aria-labelledby="nav-accounts-tab"
              >
                <div className="container row p-0 align-items-center">
                  <div className="col-lg-12 col-md-12 col-sm-12 px-lg-5 py-3">
                    {" "}
                    <div class="text-left">
                      <p class="feature-heading mb-3">
                      Maintain Project Accounts for decision making & business
                        planning
                      </p>
                      <p class="feature-content mb-0">
                      Generate PO & Invoice, track Income & Expense and all
                        Bank Transaction with Someekoron accounts
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
                id="nav-resources"
                role="tabpanel"
                aria-labelledby="nav-resources-tab"
              >
                <div className="container row p-0 align-items-center">
                  <div className="col-lg-12 col-md-12 col-sm-12 px-lg-5 py-3">
                    {" "}
                    <div class="text-left">
                      <p class="feature-heading mb-3">
                      Resource Management & Allocation for uniform
                        distribution
                      </p>
                      <p class="feature-content mb-0">
                      Allocate in-house and project resource separately with
                        Resource Management
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
                id="nav-task"
                role="tabpanel"
                aria-labelledby="nav-task-tab"
              >
                <div className="container row p-0 align-items-center">
                  <div className="col-lg-12 col-md-12 col-sm-12 px-lg-5 py-3">
                    {" "}
                    <div class="text-left">
                      <p class="feature-heading mb-3">
                      Project Progress Tracking for on time Project Completion
                      </p>
                      <p class="feature-content mb-0">
                      Ensure Project Completion within due time with Project
                        Task Management
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
                id="nav-collab"
                role="tabpanel"
                aria-labelledby="nav-collab-tab"
              >
                <div className="container row p-0 align-items-center">
                  <div className="col-lg-12 col-md-12 col-sm-12 px-lg-5 py-3">
                    {" "}
                    <div class="text-left">
                      <p class="feature-heading mb-3">
                      Team Collaboration & Communication for quick solution
                      </p>
                      <p class="feature-content mb-0">
                      Communicate and document sharing in between team members to rapid discussion
                        on project
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


<section className="industry-section">
  <div className="container pb-5">
  <div className="text-center">
<p className="heading2 mt-4">
Start your journey with us <span><img className="rocket" src={rocket}/></span>
</p>
<p className="fs-16">Get better experience in your work by connecting our most accurate project accounts solution</p>
        </div>

        
  <div className="row mb-5 w-90 mx-auto">
    <div className="col-lg-12 position-relative">
    <img className="bellow-img" src={bellow}/>
    </div>
    
    <div className="col-lg-4 my-4">
      <div className="bg-light-dark rounded-4 p-4">
        <img className="industry-icon mb-3" src={building}/>
        <p className="fs-20 fw-600">Infrustructure Design Agency</p>
        <p className="fs-16 text-secondary">
         Complete project solution for all sort of Construction, Architecture and Interior Design Agency. 
        </p>
      </div>
    </div>

    <div className="col-lg-4 my-4">
      <div className="bg-light-dark rounded-4 p-4">
        <img className="industry-icon mb-3" src={it}/>
        <p className="fs-20 fw-600">IT & Software Agency</p>
        <p className="fs-16 text-secondary">
          Essential tool for project-based Software Company including collaboration, task manager & many more.
        </p>
      </div>
    </div>

    <div className="col-lg-4 my-4">
      <div className="bg-light-dark rounded-4 p-4">
        <img className="industry-icon mb-3" src={install}/>
        <p className="fs-20 fw-600">Trading & Installation Agency</p>
        <p className="fs-16 text-secondary">
        Streamlining workflow management from purchase to setup for achieveing outstanding results.
        </p>
      </div>
    </div>
  </div>
  </div>

</section>



      <section className="mobile_app container">
          <div className="row align-items-center">

            <div className="col-12 col-lg-6 py-5 py-lg-4">
              <p className="heading2 mb-3">Mobile Application for worldwide accessibility <span><img className="rocket" src={mobile}/></span></p>
              <div className="d-flex align-items-center my-4">
                <div className="icon-box me-3">
                    <img src={star} className="icon-box-image"/>
                </div>
                <div>
                <p className="fs-18 fw-600 mb-0">Accessibility</p>
                <p className="fs-16 fw-400 text-secondary m-0">Get quick access to projectbook, track progress in real-time.</p>
             
                </div>
                </div>


                <div className="d-flex align-items-center my-4">
                <div className="icon-box me-3">
                    <img src={collaborate} className="icon-box-image"/>
                </div>
                <div>
                <p className="fs-18 fw-600 mb-0">Collaboration</p>
                <p className="fs-16 fw-400 text-secondary m-0">Instant document share and communicate with
                team members.</p>
             
                </div>
                </div>



                <div className="d-flex align-items-center my-4">
                <div className="icon-box me-3">
                    <img src={security} className="icon-box-image"/>
                </div>
                <div>
                <p className="fs-18 fw-600 mb-0">Security</p>
                <p className="fs-16 fw-400 text-secondary m-0">Enjoy secured cloud
                storage for documents and data.</p>
             
                </div>
                </div>

              
            </div>
            <div className="col-12 col-lg-6 text-center">
              <img src={mbl_app} className="mb_app" alt="" />
            </div>

            
          </div>
      </section>


      <section className="more my-5">
<div className="container py-5">
    <div className="row">
        <div className="col-lg-5 ">
          <div className="bg-light-dark p-4 pt-5 rounded-4 position-relative">
          <img className="tab-icon" src={explore} alt="" />
            <p className="heading2">Explore More <br/>With Someekoron</p>
            <p className="fs-16 mb-5 pb-5">Manage projects in a whole new way with Someekoron. Intruduce all exclusive features to experience a new level of project excellence.</p>
            <img className="up-img px-4" src={up} alt="" />
            </div>
        </div>
        <div className="col-lg-7">
            <div className="row">
                <div className="col-lg-6 mb-3">
                    <div className="bg-light-dark rounded-4 p-4">
                        <img src={rfq} className="addition_feature_icon my-2"/>
                        <p className="fs-18 fw-600 mb-0 mt-2">RFQ Record</p>
                        <p className="fs-14 mb-1">Create instant RFQ (Request For Quotation) from customer enables quotaion making easier</p>
                <Link className="see-more py-3" to={"/"}>Learn More <i class="fa-solid fa-arrow-right-long ms-2"></i></Link>
                    </div>
                </div>

                <div className="col-lg-6 mb-3">
                    <div className="bg-light-dark rounded-4 p-4">
                        <img src={supplier} className="addition_feature_icon my-2"/>
                        <p className="fs-18 fw-600 mb-0 mt-2">Supplier Profile</p>
                        <p className="fs-14 mb-1">Keep all transaction record with vendors or suppliers for more transperancy</p>
                <Link className="see-more py-3" to={"/"}>Learn More <i class="fa-solid fa-arrow-right-long ms-2"></i></Link>
                    </div>
                </div>

                <div className="col-lg-6 mb-3">
                    <div className="bg-light-dark rounded-4 p-4">
                        <img src={userPriv} className="addition_feature_icon my-2"/>
                        <p className="fs-18 fw-600 mb-0 mt-2">Team Privilege</p>
                        <p className="fs-14 mb-1">Customizable user access and role in specific module for maintaining system security</p>
                <Link className="see-more py-3" to={"/"}>Learn More <i class="fa-solid fa-arrow-right-long ms-2"></i></Link>
                    </div>
                </div>

                <div className="col-lg-6 mb-3">
                    <div className="bg-light-dark rounded-4 p-4">
                        <img src={reportHub} className="addition_feature_icon my-2"/>
                        <p className="fs-18 fw-600 mb-0 mt-2">Report Hub</p>
                        <p className="fs-14 mb-1">Find all essential reports of resource and accounts, customers and vendors easily</p>
                <Link className="see-more py-3" to={"/"}>Learn More <i class="fa-solid fa-arrow-right-long ms-2"></i></Link>
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

export default home;
