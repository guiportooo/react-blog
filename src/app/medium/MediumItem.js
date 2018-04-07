import React from "react";
import moment from "moment";

const MediumItem = ({ title, createdAt, subtitle, image, url }) => (
  <div className="box is-paddingless card">
    {image ? (
      <div className="card-image">
        <figure className="image">
          <img src={image} alt="Post" />
        </figure>
      </div>
    ) : (
      ""
    )}
    <div className="card-content">
      <div className="media">
        <div className="media-content" style={{ overflow: "inherit" }}>
          <p className="title is-4">{title}</p>
        </div>
      </div>
      <div className="content">{subtitle}</div>
      <nav className="level">
        <div className="level-left">
          <div className="tags has-addons">
            <span className="tag is-primary">
              {moment(createdAt).format("MMM Do")}
            </span>
            <span className="tag">{moment(createdAt).format("YYYY")}</span>
          </div>
        </div>
        <div className="level-right">
          <a
            className="button is-small is-link is-outlined"
            target="_blank"
            href={url}
          >
            Read on Medium
          </a>
        </div>
      </nav>
    </div>
  </div>
);

export default MediumItem;
