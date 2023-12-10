import React from "react";
import "./styles.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import { useState, useEffect } from "react";
import cardPlaceholder from "../../assets/placeholder286x180.png";

const World = (props) => {
  //creating loading percentage state
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
        setLoading(20)
        //parsing data to json format
        const json = await response.json();
        setLoading(40)
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
        <h5 className="text-uppercase pageHeading">Latest in {props.title}</h5>
        <div className="row">
          <div className="col-12">
            <div className="card mb-3 businessNewsCard">
              <div className="row no-gutters">
                <div className="col-md-4 fill">
                  <img
                    src={!loading ? cardPlaceholder : worldArticles[0]?.multimedia[1].url}
                    className="card-img vertcialCardImg"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title fs-2">
                      {!loading ? "News Title" : worldArticles[0]?.title}
                    </h5>
                    <p className="card-text">
                      {!loading ? "News Title" : worldArticles[0]?.abstract +
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
        <div className="row">
          <div className="col-12">
            <div className="card mb-3 businessNewsCard">
              <div className="row no-gutters">
                
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title fs-2">
                      {!loading ? "News Title" : worldArticles[0]?.title}
                    </h5>
                    <p className="card-text">
                      {!loading ? "News Title" : worldArticles[0]?.abstract +
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
                <div className="col-md-4 fill">
                  <img
                    src={!loading ? cardPlaceholder : worldArticles[0]?.multimedia[1].url}
                    className="card-img vertcialCardImg"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card mb-3 businessNewsCard">
              <div className="row no-gutters">
                <div className="col-md-4 fill">
                  <img
                    src={!loading ? cardPlaceholder : worldArticles[0]?.multimedia[1].url}
                    className="card-img vertcialCardImg"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title fs-2">
                      {!loading ? "News Title" : worldArticles[0]?.title}
                    </h5>
                    <p className="card-text">
                      {!loading ? "News Title" : worldArticles[0]?.abstract +
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
      </ContentWrapper>
    </>
  );
};

export default World;
