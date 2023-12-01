import React from "react";
import "./styles.scss";
import cardPlaceholder from "../../assets/placeholder286x180.png";

const CardCarousel = (props) => {
  // let { articlesArray } = props;
  console.log(props);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mx-auto">
          <div
            id="myCarousel"
            className="carousel slide"
            data-ride="carousel"
            data-interval="0"
          >
            {/* <!-- Carousel indicators --> */}
            <ol className="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              {/* <li data-target="#myCarousel" data-slide-to="2"></li> */}
            </ol>
            {/* <!-- Wrapper for carousel items --> */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-12">
                    <div className="thumb-wrapper">
                      <div className="img-box">
                        <img
                          src={props?.articlesArray[0]?.multimedia?.url}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>{props?.articlesArray[0]?.title}</h4>
                        <p>
                        {props?.articlesArray[0]?.abstract}
                        </p>
                        <a
                          href="/"
                          rel="noreferrer"
                          //taregt - blank opens the link in a new tab
                          target="_blank"
                          className="btn btn-primary"
                        >
                          More <i className="fa fa-angle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Carousel controls --> */}
            <a
              className="carousel-control-prev"
              href="#myCarousel"
              data-slide="prev"
            >
              <i className="fa fa-angle-left"></i>
            </a>
            <a
              className="carousel-control-next"
              href="#myCarousel"
              data-slide="next"
            >
              <i className="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
