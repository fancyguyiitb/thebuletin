import React from "react";
import "./styles.scss";
import cardPlaceholder from "../../assets/placeholder286x180.png";

const BusinessNewsComponent = (props) => {
  console.log(props);
  let { businessArticlesArray } = props;

  return (
    <div className="row">
      <div className="col-md-4">
        <div
          className="card mb-3 businessNewsCard"
          // style={{ "max-width": "540px" }}
        >
          <div className="row no-gutters">
            <div className="col-md-4 fill">
              <img
                src={businessArticlesArray[2]?.multimedia[1].url}
                className="card-img vertcialCardImg"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{businessArticlesArray[2]?.title}</h5>
                <p className="card-text">
                  {businessArticlesArray[2]?.abstract.slice(0, 100) + "..."}
                </p>
                <p className="card-text">
                  {/* <small className="text-muted">Published: {businessArticlesArray[1]?.published_date}</small> */}
                </p>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={businessArticlesArray[2]?.url}
                  className="btn btn-outline-success btn-sm"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="col-md-4">
        <div className="card bg-dark text-white businessNewsCard">
          <img
            src={businessArticlesArray[0]?.multimedia[1].url}
            className="card-img"
            alt="..."
          />
          <div className="card-img-overlay">
            <h5 className="card-title">{businessArticlesArray[0]?.title}</h5>
            <p className="card-text">
              {businessArticlesArray[0]?.abstract.slice(0, 180) + "..."}
            </p>
            <a
              rel="noreferrer"
              target="_blank"
              href={businessArticlesArray[2]?.url}
              className="btn btn-success btn-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div> */}

      <div className="col-md-4">
        <div
          className="card mb-3 businessNewsCard"
          // style={{ "max-width": "540px" }}
        >
          <div className="row no-gutters">
            <div className="col-md-4 fill">
              <img
                src={businessArticlesArray[1]?.multimedia[1].url}
                className="card-img vertcialCardImg"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{businessArticlesArray[1]?.title}</h5>
                <p className="card-text">
                  {businessArticlesArray[1]?.abstract.slice(0, 100) + "..."}
                </p>
                <p className="card-text">
                  {/* <small className="text-muted">Published: {businessArticlesArray[1]?.published_date}</small> */}
                </p>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={businessArticlesArray[2]?.url}
                  className="btn btn-outline-success btn-sm"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div
          className="card mb-3 businessNewsCard"
          // style={{ "max-width": "540px" }}
        >
          <div className="row no-gutters">
            <div className="col-md-4 fill">
              <img
                src={businessArticlesArray[3]?.multimedia[1].url}
                className="card-img vertcialCardImg"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{businessArticlesArray[1]?.title}</h5>
                <p className="card-text">
                  {businessArticlesArray[3]?.abstract.slice(0, 100) + "..."}
                </p>
                <p className="card-text">
                  {/* <small className="text-muted">Published: {businessArticlesArray[1]?.published_date}</small> */}
                </p>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={businessArticlesArray[3]?.url}
                  className="btn btn-outline-success btn-sm"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessNewsComponent;
