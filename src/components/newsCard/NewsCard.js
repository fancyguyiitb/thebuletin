import React from "react";
import "./styles.scss";

const NewsCard = (props) => {
  //title, desc and image wont change after loading, hence we don't set them as states
  let { title, description, imageUrl, newsUrl } = props;
  return (
    <div className="card" style={{ width: "11rem" }}>
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a
          href={newsUrl}
          rel="noreferrer"
          //taregt - blank opens the link in a new tab
          target="_blank"
          className="btn btn-primary"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
