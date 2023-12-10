import React from "react";
import "./styles.scss";
import cardPlaceholder from "../../assets/placeholder286x180.png";

const SportsAndTechNewsComponent = (props) => {
  // console.log(props);
  let { sportsArticles, techArticles } = props;

  return (
    <>
      <div className="row my-5">
        {/* SPORTS NEWS CARDS */}
        <div className="col-md-6">
          <div className="worldNewsTitle mb-3">
            <h3>Health News</h3>
          </div>
          <div className="row">
            {/* First SPorts Card */}
            <div className="col-md-6">
              <div className="card carouselCard">
                <img
                  src={
                    sportsArticles[0]?.multimedia[1].url
                      ? sportsArticles[0]?.multimedia[1].url
                      : cardPlaceholder
                  }
                  alt=""
                  className="card-img-top carouselCardImg"
                />
                <div className="card-body carouselCardBody">
                  <h5 className="card-title">{sportsArticles[0]?.title ? sportsArticles[0]?.title : "Sorry, no title available"}</h5>
                  <p className="card-text">
                    {sportsArticles[0]?.description?.slice(0, 100) + "..." ? sportsArticles[0]?.description?.slice(0, 100) + "..." : "Sorry, no description available"}
                  </p>
                  <div className="cardEndIcons carouselCardEndIcons">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href={sportsArticles[0]?.url}
                      className="btn btn-outline-danger btn-sm readMoreButton"
                    >
                      Read More
                    </a>
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="12"
                      viewBox="0 0 384 512"
                      className="mx-2"
                    >
                      <path
                        fill="#ff0059"
                        d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"
                      />
                    </svg> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Second Sports Card */}
            <div className="col-md-6">
              <div className="card carouselCard">
                <img
                  src={
                    sportsArticles[1]?.multimedia[1].url
                      ? sportsArticles[1]?.multimedia[1].url
                      : cardPlaceholder
                  }
                  alt=""
                  className="card-img-top carouselCardImg"
                />
                <div className="card-body carouselCardBody">
                  <h5 className="card-title">{sportsArticles[1]?.title ? sportsArticles[1]?.title : "Sorry, no title available"}</h5>
                  <p className="card-text">
                    {sportsArticles[1]?.description?.slice(0, 100) + "..."}
                  </p>
                  <div className="cardEndIcons carouselCardEndIcons">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href={sportsArticles[1]?.url}
                      className="btn btn-outline-danger btn-sm readMoreButton"
                    >
                      Read More
                    </a>
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="12"
                      viewBox="0 0 384 512"
                      className="mx-2"
                    >
                      <path
                        fill="#ff0059"
                        d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"
                      />
                    </svg> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TECH NEWS CARDS */}
        <div className="col-md-6">
          <div className="worldNewsTitle mb-3">
            <h3>Tech News</h3>
          </div>
          <div className="row">
            {/* First Tech Card */}
            <div className="col-md-6">
              <div className="card carouselCard">
                <img
                  src={
                    techArticles[2]?.multimedia[1].url
                      ? techArticles[2]?.multimedia[1].url
                      : cardPlaceholder
                  }
                  alt=""
                  className="card-img-top carouselCardImg"
                />
                <div className="card-body carouselCardBody">
                  <h5 className="card-title">{techArticles[2]?.title}</h5>
                  <p className="card-text">
                    {techArticles[2]?.abstract?.slice(0, 100) + "..."}
                  </p>
                  <div className="cardEndIcons carouselCardEndIcons">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href={techArticles[2]?.url}
                      className="btn btn-outline-danger btn-sm readMoreButton"
                    >
                      Read More
                    </a>
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="12"
                      viewBox="0 0 384 512"
                      className="mx-2"
                    >
                      <path
                        fill="#ff0059"
                        d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"
                      />
                    </svg> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Second Tech Card */}
            <div className="col-md-6">
              <div className="card carouselCard">
                <img
                  src={
                    techArticles[1]?.multimedia[1].url
                      ? techArticles[1]?.multimedia[1].url
                      : cardPlaceholder
                  }
                  alt=""
                  className="card-img-top carouselCardImg"
                />
                <div className="card-body carouselCardBody">
                  <h5 className="card-title">{techArticles[1]?.title}</h5>
                  <p className="card-text">
                    {techArticles[1]?.abstract?.slice(0, 100) + "..."}
                  </p>
                  <div className="cardEndIcons carouselCardEndIcons">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href={techArticles[1]?.url}
                      className="btn btn-outline-danger btn-sm readMoreButton"
                    >
                      Read More
                    </a>
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="12"
                      viewBox="0 0 384 512"
                      className="mx-2"
                    >
                      <path
                        fill="#ff0059"
                        d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"
                      />
                    </svg> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SportsAndTechNewsComponent;
