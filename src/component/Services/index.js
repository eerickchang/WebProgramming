import Fade from "react-reveal/Fade";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/services")
      .then((res) => setServices(res.data));
  }, []);

  return (
    <Fade left delay={800}>
      <section className="page-section" id="services">
        <div className="container px-4 px-lg-5">
          <h2 className="text-center mt-0">At Your Service</h2>
          <hr className="divider" />
          <div className="row gx-4 gx-lg-5">
            {services.map((item) => {
              return (
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                    <div className="mb-2">
                      <i className="bi-gem fs-1 text-primary" />
                    </div>
                    <h3 className="h4 mb-2">{item.title}</h3>
                    <p className="text-muted mb-0">{item.subTitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Fade>
  );
}
