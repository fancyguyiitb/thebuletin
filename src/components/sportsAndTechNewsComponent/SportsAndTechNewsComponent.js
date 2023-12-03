import React from "react";
import "./styles.scss";
import cardPlaceholder from "../../assets/placeholder286x180.png";

const SportsAndTechNewsComponent = (props) => {
  console.log(props);
  let { sportsArticles, techArticles } = props;

  return (
    <>
      <div className="worldNewsTitle">
        <h3>Sports News</h3>
        <button type="button" className="btn btn-dark">
          See All
        </button>
      </div>
      <div className="row">
        <div className="col-md-6">
            

        </div>
      </div>
    </>
  );
};

export default SportsAndTechNewsComponent;
