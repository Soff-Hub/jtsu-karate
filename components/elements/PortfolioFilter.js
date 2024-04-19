import Link from "next/link";
import React, { useState, useEffect } from "react";
// import { gallery } from "../../repositories/api";

const PortfolioFilter = ({ col, show, ourGallery }) => {
  const portfolio = [
      {
          name: "Flyer design",
          category: ["all", "web", "motion"],
          img: "img1.png"
      },
      {
          name: "Banner design",
          category: ["all", "graphic", "web"],
          img: "img2.png"
      },
      {
          name: "Disk cover",
          category: ["all", "graphic", "motion "],
          img: "img3.png"
      },
      {
          name: "Pattern design",
          category: ["all", "motion", "mobile"],
          img: "img4.png"
      },
      {
          name: "Logo design",
          category: ["all", "web", "graphic"],
          img: "img5.png"
      },
      {
          name: "Animal pattern",
          category: ["all", "mobile"],
          img: "img5.png"
      }
  ];

  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
      setProjects();
  }, []);

  useEffect(() => {
      setProjects([]);

  const filtered = portfolio.map(p => ({
      ...p,
      filtered: p.category.includes(filter)
  }));
  setProjects(filtered);
  }, [filter]);

  return (
    <>
      <div className="row text-center filter-nav">
                <div className="col-lg-12">
                    <span className="wow animate__animated animate__fadeInUp" data-wow-delay=".0s">
                        <span className={`btn btn-border-linear btn-filter hover-up ${filter === "all" && "active"}`} active={filter === "all" ? 1 : 0} onClick={() => setFilter("all")}>All Projects</span>
                    </span>
                    <span className="wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                        <span className={`btn btn-border-linear btn-filter hover-up ${filter === "web" && "active"}`}
                            onClick={() => setFilter("web")}>Web Development</span>
                    </span>
                    <span className="wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                        <span className={`btn btn-border-linear btn-filter hover-up ${filter === "mobile" && "active"}`}
                            onClick={() => setFilter("mobile")}>Mobile App</span>
                    </span>
                    <span className="wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                        <span className={`btn btn-border-linear btn-filter hover-up ${filter === "motion" && "active"}`}
                            onClick={() => setFilter("motion")}>Motion</span>
                    </span>
                    <span className="wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
                        <span className={`btn btn-border-linear btn-filter hover-up ${filter === "graphic" && "active"}`}
                            onClick={() => setFilter("graphic")}>Graphic Design</span>
                    </span>
                </div>
            </div>

      {/* <div className="mt-70 mb-50">
        <div className="row">
          {ourGallery.data.map((item) => (
            <div className={`col-lg-${col}`} key={item.name}>
              <div className="project" data-category="web motion">
                <div className="item-content">
                  <div
                    className="card-style-1 hover-up mb-30"
                    data-wow-delay=".0s"
                  >
                    <div className="card-image" style={{ height: "280px" }}>
                      <Link className="link-post" href="#">
                        <img
                          style={{ height: "100%" }}
                          src={item.image_url}
                          alt="Genz"
                        />
                        <div className="card-info card-bg-2">
                          <div className="info-bottom mb-15">
                            <h4 className="color-white mb-6">{item.name}</h4>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default PortfolioFilter;
