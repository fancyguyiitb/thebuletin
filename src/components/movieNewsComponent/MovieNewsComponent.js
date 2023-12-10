import React from "react";
import "./styles.scss";
import cardPlaceholder from "../../assets/placeholder286x180.png";

const MovieNewsComponent = (props) => {
  console.log(props);
  let { moviesArticles } = props;

  return (
    <>
      <div className="worldNewsTitle mb-3">
        <h3>Latest in Movies</h3>
        {/* <button type="button" className="btn btn-dark">
          See All
        </button> */}
      </div>

      {/* CAROUSEL SECTION */}
      <div className="row">
        <div className="col-12 mx-auto">
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
              <li data-target="#myCarousel" data-slide-to="2"></li>
              <li data-target="#myCarousel" data-slide-to="3"></li>
              <li data-target="#myCarousel" data-slide-to="4"></li>
            </ol>
            {/* <!-- Wrapper for carousel items --> */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-12">
                    <div className="card mb-3 businessNewsCard">
                      <div className="row no-gutters">
                        <div className="col-md-4 fill">
                          <img
                            src={moviesArticles[0]?.multimedia[1].url}
                            className="card-img vertcialCardImg"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-6">
                          <div className="card-body">
                            <h5 className="card-title fs-2">
                              {moviesArticles[0]?.title}
                            </h5>
                            <p className="card-text">
                              {moviesArticles[0]?.abstract +
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis risus ut metus ullamcorper, a consequat quam vulputate. Nulla vitae turpis id ante imperdiet ultrices. Ut egestas elit in accumsan tincidunt. Phasellus faucibus nisi congue, sollicitudin urna ac, suscipit dolor."}
                            </p>
                            <p className="card-text">
                              {/* <small className="text-muted">Published: {businessArticlesArray[1]?.published_date}</small> */}
                            </p>
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href={moviesArticles[0]?.url}
                              className="btn btn-outline-danger btn-sm"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-12">
                    <div className="card mb-3 businessNewsCard">
                      <div className="row no-gutters">
                        <div className="col-md-4 fill">
                          <img
                            src={moviesArticles[1]?.multimedia[1].url}
                            className="card-img vertcialCardImg"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title fs-2">
                              {moviesArticles[1]?.title}
                            </h5>
                            <p className="card-text">
                              {moviesArticles[1]?.abstract +
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis risus ut metus ullamcorper, a consequat quam vulputate. Nulla vitae turpis id ante imperdiet ultrices. Ut egestas elit in accumsan tincidunt. Phasellus faucibus nisi congue, sollicitudin urna ac, suscipit dolor."}
                            </p>
                            <p className="card-text">
                              {/* <small className="text-muted">Published: {businessArticlesArray[1]?.published_date}</small> */}
                            </p>
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href={moviesArticles[1]?.url}
                              className="btn btn-outline-danger btn-sm"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-12">
                    <div className="card mb-3 businessNewsCard">
                      <div className="row no-gutters">
                        <div className="col-md-4 fill">
                          <img
                            src={moviesArticles[2]?.multimedia[1].url}
                            className="card-img vertcialCardImg"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title fs-2">
                              {moviesArticles[2]?.title}
                            </h5>
                            <p className="card-text">
                              {moviesArticles[2]?.abstract +
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis risus ut metus ullamcorper, a consequat quam vulputate. Nulla vitae turpis id ante imperdiet ultrices. Ut egestas elit in accumsan tincidunt. Phasellus faucibus nisi congue, sollicitudin urna ac, suscipit dolor."}
                            </p>
                            <p className="card-text">
                              {/* <small className="text-muted">Published: {businessArticlesArray[1]?.published_date}</small> */}
                            </p>
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="/"
                              className="btn btn-outline-danger btn-sm"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-12">
                    <div className="card mb-3 businessNewsCard">
                      <div className="row no-gutters">
                        <div className="col-md-4 fill">
                          <img
                            src={moviesArticles[3]?.multimedia[1].url}
                            className="card-img vertcialCardImg"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title fs-2">
                              {moviesArticles[3]?.title}
                            </h5>
                            <p className="card-text">
                              {moviesArticles[3]?.abstract +
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis risus ut metus ullamcorper, a consequat quam vulputate. Nulla vitae turpis id ante imperdiet ultrices. Ut egestas elit in accumsan tincidunt. Phasellus faucibus nisi congue, sollicitudin urna ac, suscipit dolor."}
                            </p>
                            <p className="card-text">
                              {/* <small className="text-muted">Published: {businessArticlesArray[1]?.published_date}</small> */}
                            </p>
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="/"
                              className="btn btn-outline-danger btn-sm"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-12">
                    <div className="card mb-3 businessNewsCard">
                      <div className="row no-gutters">
                        <div className="col-md-4 fill">
                          <img
                            src={moviesArticles[4]?.multimedia[1].url}
                            className="card-img vertcialCardImg"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title fs-2">
                              {moviesArticles[4]?.title}
                            </h5>
                            <p className="card-text">
                              {moviesArticles[4]?.abstract +
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis risus ut metus ullamcorper, a consequat quam vulputate. Nulla vitae turpis id ante imperdiet ultrices. Ut egestas elit in accumsan tincidunt. Phasellus faucibus nisi congue, sollicitudin urna ac, suscipit dolor."}
                            </p>
                            <p className="card-text">
                              {/* <small className="text-muted">Published: {businessArticlesArray[1]?.published_date}</small> */}
                            </p>
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="/"
                              className="btn btn-outline-danger btn-sm"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
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
              {/* <i className="fa fa-angle-left"></i> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="14"
                viewBox="0 0 448 512"
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
            </a>
            <a
              className="carousel-control-next"
              href="#myCarousel"
              data-slide="next"
            >
              {/* <i className="fa fa-angle-right"></i> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="14"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieNewsComponent;
