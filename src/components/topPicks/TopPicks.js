import React, { useState } from "react";
import { useEffect } from "react";
import "./styles.scss";
import carouselPlaceholder from "../../assets/1200x500.png";

const TopPicks = (props) => {
  let { usArticlesArray } = props;
  // // creating articles state
  // const [usArticles, setUsArticles] = useState([]);

  // // getting category wise API news data when page loads
  // useEffect(() => {
  //   const getCategoryNewsData = async (category) => {
  //     const apiCategoryUrl = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=JWDQzBXAopU3ZInzJRMA2r70nTB9HKir`;

  //     try {
  //       const response = await fetch(apiCategoryUrl);
  //       //parsing data to json format
  //       const json = await response.json();
  //       const parsedData = json.results;
  //       setUsArticles(parsedData);
  //     } catch (error) {
  //       console.log("Error: ", error);
  //     }
  //     getCategoryNewsData("us");
  //     console.log(usArticles + "puju");
  //   };
  // }, []);

  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={props?.usArticlesArray[0]?.multimedia[0]?.url}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>{props?.usArticlesArray[0]?.title}</h5>
              <p>{props?.usArticlesArray[0]?.abstract}</p>
              <a
                rel="noreferrer"
                target="_blank"
                href={props?.usArticlesArray[0]?.url}
                className="btn btn-danger btn-sm"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <div className="overlay">
              <img
                src={props?.usArticlesArray[1]?.multimedia[0]?.url}
                className="d-block w-100"
                alt="..."
              />
            </div>

            <div className="carousel-caption d-none d-md-block">
              <h5>{props?.usArticlesArray[1]?.title}</h5>
              <p>{props?.usArticlesArray[1]?.abstract}</p>
              <a
                rel="noreferrer"
                target="_blank"
                href={props?.usArticlesArray[0]?.url}
                className="btn btn-danger btn-sm"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={props?.usArticlesArray[2]?.multimedia[0]?.url}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>{props?.usArticlesArray[2]?.title}</h5>
              <p>{props?.usArticlesArray[2]?.abstract}</p>
              <a
                rel="noreferrer"
                target="_blank"
                href={props?.usArticlesArray[0]?.url}
                className="btn btn-danger btn-sm"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={props?.usArticlesArray[3]?.multimedia[0]?.url}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>{props?.usArticlesArray[3]?.title}</h5>
              <p>{props?.usArticlesArray[3]?.abstract}</p>
              <a
                rel="noreferrer"
                target="_blank"
                href={props?.usArticlesArray[0]?.url}
                className="btn btn-danger btn-sm"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={props?.usArticlesArray[4]?.multimedia[0]?.url}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>{props?.usArticlesArray[4]?.title}</h5>
              <p>{props?.usArticlesArray[4]?.abstract}</p>
              <a
                rel="noreferrer"
                target="_blank"
                href={props?.usArticlesArray[0]?.url}
                className="btn btn-danger btn-sm"
              >
                Read More
              </a>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default TopPicks;
