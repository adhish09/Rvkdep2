import "./Humanitarian.css";
import img1 from "./img1.png";
import img from "./img.png";
import { CgMailForward } from "react-icons/cg";
import React, { useEffect, useState } from "react";

const Humanitarian = () => {
  window.scrollTo(0, 0)
  return (
    <div className="maincontmargin321">
      <div className="">

        <div className="card-container_out321">
          <div className="card_out321 ">
            <div className="card-body321">
              <div>
                <h2 className="card-title_out321">
                  Humanitarian Aid <br />
                  <div className="card-description_out321">
                    <br />
                    Supporting the lives of those who need help with multiple
                    initiatives{" "}
                  </div>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="quick321"> Humanitarian Aid Initiatives</div>

        <section className="main-card--cointainer321">
          <div className="card-container3321">
            <div className="card3321 ">
              <div className="img3321">
                <img src={img} alt="img" />
              </div>
            </div>
          </div>

          <div className="card-container4321">
            <div className="card4321 ">
              <div className="img4321">
                <p>
                  <span>Raj Vidya Kender</span> (RVK) is committed to improving
                  the lives of people in need by providing critical aid such as
                  food, water, medical care, and other resources to help them
                  recover from emergencies.
                  <br />
                  <br />
                  RVK has been actively supporting humanitarian efforts
                  since its establishment and has awarded numerous grants to
                  partner organizations in 40 countries, contributing millions
                  of dollars towards various initiatives. These initiatives
                  range from disaster relief and water infrastructure to
                  supporting educational programs such as computer labs for
                  students.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div>
          <br />
          <p className="last321">
            RVK carefully selects partner organizations that are capable of
            delivering aid efficiently, effectively, and with respect for the
            cultural values and dignity of the recipients. Moreover, RVK has
            sponsored free medical clinics throughout India for 16 years,
            providing modern eye care to hundreds of thousands of marginalized
            people.
          </p>
        </div>

        <div className="break321"></div>

        <section className="main-card--cointainer01321">
          <div className="card-container01321">
            <div className="card01321 ">
              <div className="card-body01321">
                <div className="card-title01321"> Eye Camp </div>
              </div>
              <div className="main-card--cointainer321">
                <div className="img01321">
                  <img src={img1} alt="" width="100%" height="100%" />
                </div>
                <div className="rtext321" style={{ wordSpacing: "0.8px" }}>
                  Raj Vidya Kender (RVK) is committed to improving the lives of
                  people in need by providing medical care, and other resources
                  to help them recover from emergencies.{" "}
                </div>
              </div>
              <div className="ctext321" style={{ wordSpacing: "0.8px" }}>
                Raj Vidya Kender's Eye Camp initiative is a program dedicated to
                providing modern eye care services to marginalized communities
                in India. The initiative aims to raise awareness about eye
                health and offers free eye exams, consultations, and surgeries
                to those in need. Through this program, RVK hopes to improve the
                quality of life for those suffering from eye-related illnesses
                and empower individuals with the necessary tools to maintain
                good eye health.
              </div>
            </div>
          </div>

          <div className="card-container01321">
            <div className="card01321 ">
              <div className="card-body01321">
                <div className="card-title01321"> Covid Relief Camp </div>
              </div>
              <div className="main-card--cointainer321">
                <div className="img01321">
                  <img src={img1} alt="" width="100%" height="100%" style={{ width: "100% !important" }} />
                </div>
                <div className="rtext321" style={{ wordSpacing: "0.8px" }}>
                  Raj Vidya Kender's COVID Relief Camp is a program designed to
                  provide critical aid to communities impacted by the COVID-19
                  pandemic in India from past 2020.
                </div>
              </div>
              <div className="ctext1321">
                The initiative offers food, medical supplies, and financial
                assistance to individuals and families affected by
                the pandemic. The program also aims to raise awareness of
                COVID-19 safety protocols and provides educational resources to
                prevent the spread of the virus. RVK is dedicated to supporting
                those in need during these challenging times, and its efforts
                offer hope for a brighter future. With the COVID Relief camp, many people got their basic things.
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Humanitarian;
