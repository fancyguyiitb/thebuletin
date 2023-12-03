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
          class="card mb-3 businessNewsCard"
          // style={{ "max-width": "540px" }}
        >
          <div class="row no-gutters">
            <div class="col-md-4 fill">
              <img
                src={businessArticlesArray[2]?.multimedia[1].url}
                class="card-img vertcialCardImg"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{businessArticlesArray[2]?.title}</h5>
                <p class="card-text">
                  {businessArticlesArray[2]?.abstract.slice(0, 100) + "..."}
                </p>
                <p class="card-text">
                  {/* <small class="text-muted">Published: {businessArticlesArray[1]?.published_date}</small> */}
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
        <div class="card bg-dark text-white businessNewsCard">
          <img
            src={businessArticlesArray[0]?.multimedia[1].url}
            class="card-img"
            alt="..."
          />
          <div class="card-img-overlay">
            <h5 class="card-title">{businessArticlesArray[0]?.title}</h5>
            <p class="card-text">
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
          class="card mb-3 businessNewsCard"
          // style={{ "max-width": "540px" }}
        >
          <div class="row no-gutters">
            <div class="col-md-4 fill">
              <img
                src={businessArticlesArray[1]?.multimedia[1].url}
                class="card-img vertcialCardImg"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{businessArticlesArray[1]?.title}</h5>
                <p class="card-text">
                  {businessArticlesArray[1]?.abstract.slice(0, 100) + "..."}
                </p>
                <p class="card-text">
                  {/* <small class="text-muted">Published: {businessArticlesArray[1]?.published_date}</small> */}
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
          class="card mb-3 businessNewsCard"
          // style={{ "max-width": "540px" }}
        >
          <div class="row no-gutters">
            <div class="col-md-4 fill">
              <img
                src={businessArticlesArray[3]?.multimedia[1].url}
                class="card-img vertcialCardImg"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{businessArticlesArray[1]?.title}</h5>
                <p class="card-text">
                  {businessArticlesArray[3]?.abstract.slice(0, 100) + "..."}
                </p>
                <p class="card-text">
                  {/* <small class="text-muted">Published: {businessArticlesArray[1]?.published_date}</small> */}
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
