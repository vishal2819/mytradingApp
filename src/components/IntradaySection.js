import React from "react";
import Card from "./Card";
import intraData from "./intraData";
import About from "./About";
const IntradaySection = () => {
  return (
    <>
      <div className="Intra-heading">
        <h2 className="Intra-headingText">Intra Day Calls</h2>
      </div>
      <div className="card-section">
        <h3 style={{ paddingTop: "10px" }}>Intra Day Calls for Today</h3>
        <div className="container-fluid">
          <div className="row" style={{ marginLeft: "1.7rem" }}>
            {intraData.map((data) => {
              const { id, bank, buy, target, stoploss } = data;
              return (
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={id}>
                  <Card
                    bank={bank}
                    buy={buy}
                    target={target}
                    stoploss={stoploss}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <About />
      </div>
      <div className="mission container">
        <div>
          <img
            src="https://media2.giphy.com/media/VTErXIe8Q2kf0vMk11/200w.webp?cid=ecf05e476ehbsjy95rmwsydanxub4po1vwc069cu1txb2jcg&rid=200w.webp&ct=g"
            alt="Giphy"
          />
        </div>
        <div>
          <h2>Mission</h2>
          <p>
            A platform integrating scientific financial planning, expert-taught
            courses, business-grade stock analysis and well-researched
            journalistic articles for an absolute experience.Est nostrud minim magna commodo ipsum pariatur id id irure id voluptate exercitation. Elit qui cillum irure laborum adipisicing nulla officia. Officia ea voluptate non id consequat do commodo irure cupidatat commodo. Nisi pariatur adipisicing magna fugiat aute id elit consequat sit minim sunt. Elit dolore ea deserunt incididunt qui in quis voluptate quis ex. Velit aliquip aliqua ea exercitation.
          </p>
          <h2>Vision</h2>
          <p>
          We delievers highest accuracy in MCX commodities [ Gold, Silver, Crude Oil, Natural Gas, Copper, zinc, Lead, Nickel ]. Our Provided best calls.Our Analyst Always Gives Best Accurate Tips On Intraday Basis We Offers Our Services On Live Market Based For Huge Profit.
          </p>
        </div>
      </div>
    </>
  );
};

export default IntradaySection;
