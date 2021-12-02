import Fade from "react-reveal/Fade";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/portfolio")
      .then((res) => setPortfolio(res.data));
  }, []);
  return (
    <div id="portfolio">
      <div className="container-fluid p-0">
        <div className="row g-0">
          {portfolio.map((item) => {
            return (
              <Fade delay={300}>
                <div className="col-lg-4 col-sm-6">
                  <a
                    className="portfolio-box"
                    href="img/portfolio/fullsize/3.jpg"
                    title="Project Name"
                  >
                    <img className="img-fluid" src={item.img} alt="..." />
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">
                        {item.category}
                      </div>
                      <div className="project-name">{item.project}</div>
                    </div>
                  </a>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </div>
  );
}
