import React from "react";
import "./styles.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import { useState, useEffect } from "react";
import cardPlaceholder from "../../assets/placeholder286x180.png";

const World = (props) => {
  //creating Loading percentage state
  const [loading, setLoading] = useState(0);
  //creating loading boolean state
  const [boolLoading, setBoolLoading] = useState(false);
  // creating articles state
  const [worldArticles, setWorldArticles] = useState([]);
  //creating page state
  const [page, setPage] = useState(1);

  //firing the getApiData function as soon as page loads
  useEffect(() => {
    const fetchData = async (category, arrayUpdateFunction) => {
      const apiUrl = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=JWDQzBXAopU3ZInzJRMA2r70nTB9HKir`;
      try {
        setBoolLoading(true);
        const response = await fetch(apiUrl);
        setLoading(20);
        //parsing data to json format
        const json = await response.json();
        setLoading(40);
        const parsedData = json.results;
        // console.log(parsedData);
        arrayUpdateFunction(parsedData);
        setLoading(100);
        setBoolLoading(false);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchData("world", setWorldArticles);
  }, []);

  return (
    <>
      <ContentWrapper>
        <h5 className="pageHeading">Latest in {props.title}</h5>

        <div className="row my-3">
          <div className="col-12">
            <div className="card mb-3 businessNewsCard">
              <div className="row no-gutters">
                <div className="col-md-4 fill">
                  <img
                    src={
                      boolLoading
                        ? cardPlaceholder
                        : worldArticles[0]?.multimedia[1].url
                    }
                    className="card-img vertcialCardImg"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title fs-2">
                      {boolLoading ? "News Title" : worldArticles[0]?.title}
                    </h5>
                    <p className="card-text">
                      {boolLoading
                        ? "News Title"
                        : worldArticles[0]?.abstract +
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis risus ut metus ullamcorper, a consequat quam vulputate. Nulla vitae turpis id ante imperdiet ultrices. Ut egestas elit in accumsan tincidunt. Phasellus faucibus nisi congue, sollicitudin urna ac, suscipit dolor."}
                    </p>
                    <p className="card-text">
                      {/* <small className="text-muted">Published: {businessArticlesArray[1]?.published_date}</small> */}
                    </p>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href={worldArticles[0]?.url}
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

        <div className="row my-3">
          <div className="col-12 px-0">
            <div className="card mb-3 businessNewsCard">
              <div className="row no-gutters">
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title fs-2">
                      {boolLoading ? "News Title" : worldArticles[1]?.title}
                    </h5>
                    <p className="card-text">
                      {boolLoading
                        ? "News Title"
                        : worldArticles[1]?.abstract +
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis risus ut metus ullamcorper, a consequat quam vulputate. Nulla vitae turpis id ante imperdiet ultrices. Ut egestas elit in accumsan tincidunt. Phasellus faucibus nisi congue, sollicitudin urna ac, suscipit dolor."}
                    </p>
                    <p className="card-text">
                      {/* <small className="text-muted">Published: {businessArticlesArray[1]?.published_date}</small> */}
                    </p>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href={worldArticles[1]?.url}
                      className="btn btn-outline-danger btn-sm"
                    >
                      Read More
                    </a>
                  </div>
                </div>
                <div className="col-md-4 fill pl-3">
                  <img
                    src={
                      boolLoading
                        ? cardPlaceholder
                        : worldArticles[1]?.multimedia[1].url
                    }
                    className="card-img vertcialCardImg"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <h5 className="editorsPicksTitle my-4">Editor's Picks</h5>

        <div className="infiniteCards mb-5">
          <div className="row">
            {worldArticles.slice(4, worldArticles.length - 1).map((element) => {
              return (
                <div class="col-md-4 pb-3">
                  <div
                    class="card"
                    style={{
                      background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url(${element?.multimedia[0].url})`,
                    }}
                  >
                    <div class="card-category">{element?.subsection}</div>
                    <div class="card-description">
                      <h2>{element?.title}</h2>
                      <p>{element?.abstract?.slice(0, 100) + "..."}</p>
                    </div>
                    <img
                      class="card-user avatar avatar-large"
                      src="https://github.com/lewagon/bootstrap-challenges/blob/master/11-Airbnb-search-form/images/anne.jpg?raw=true"
                      alt=""
                    />
                    <a
                      class="card-link"
                      rel="noreferrer"
                      target="_blank"
                      href={element?.url}
                    ></a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ContentWrapper>
    </>
  );
};

export default World;
