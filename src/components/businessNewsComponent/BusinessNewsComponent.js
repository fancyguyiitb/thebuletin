import React from "react";
import "./styles.scss";
import cardPlaceholder from "../../assets/placeholder286x180.png";

const BusinessNewsComponent = (props) => {
  // console.log(props);

  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card businessCard">
          <img src={cardPlaceholder} alt="" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">test</h5>
            <p className="card-text">test</p>
            <div className="cardEndIcons">
              <a
                rel="noreferrer"
                target="_blank"
                href="/"
                className="btn btn-outline-success btn-sm"
              >
                Read More
              </a>
              <svg
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
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-3 businessCard">
          <img src={cardPlaceholder} alt="" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">test</h5>
            <p className="card-text">test</p>
            <div className="cardEndIcons">
              <a
                rel="noreferrer"
                target="_blank"
                href="/"
                className="btn btn-outline-success btn-sm"
              >
                Read More
              </a>
              <svg
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
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card businessCard">
          <img src={cardPlaceholder} alt="" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">test</h5>
            <p className="card-text">test</p>
            <div className="cardEndIcons">
              <a
                rel="noreferrer"
                target="_blank"
                href="/"
                className="btn btn-outline-success btn-sm"
              >
                Read More
              </a>
              <svg
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
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessNewsComponent;
