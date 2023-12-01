import React, { useState } from "react";
import { useEffect } from "react";
import "./styles.scss";

const TopPicks = () => {
  //creating articles state
  // const [worldArticles, setWorldArticles] = useState([]);

  // //getting category wise API news data when page loads
  // useEffect(() => {
  //   const getCategoryNewsData = async (category) => {
  //     const apiCategoryUrl = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=JWDQzBXAopU3ZInzJRMA2r70nTB9HKir`;

  //     try {
  //       const response = await fetch(apiCategoryUrl);
  //       //parsing data to json format
  //       const json = await response.json();
  //       const parsedData = json.results;
  //       console.log(parsedData);
  //       setWorldArticles(parsedData);
  //     } catch (error) {
  //       console.log("Error: ", error);
  //     }
  //     getCategoryNewsData("world");
  //   };
  // }, []);

  return (
    <>
      <div className="topPicks">
        <div className="topPicksTitle">
          <h3>Top Picks</h3>
          <button type="button" className="btn btn-dark">
            See All
          </button>
        </div>

        {/* Carousel Section */}
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
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://placehold.it/1200x500"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Title here</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://placehold.it/1200x500"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://placehold.it/1200x500"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
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
      </div>
    </>
  );
};

export default TopPicks;
