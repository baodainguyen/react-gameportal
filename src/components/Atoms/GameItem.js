import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faEye, faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../body.css";

export default class GameItem extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    e.preventDefault();
    console.log("onclick..GameItem" + e.target);
  }
  render() {
    const { seen, like, comment } = this.props.react;
    const { name, price, img, href } = this.props.info;

    return (
      <div className="pos-relative w150px rounded-2 overflow-hidden">
        <img
          className="w150px h200px img-fit-cover"
          src={img}
          alt=""
          onClick={this.onClickLogin}
        />
        <div className="w150px pos-absolute bottom0 left0 pt-1 bgblack66">
          <a className="text-white" href={href}>
            <p className="text-left text-uppercase mb-0 ps-1 small">{name}</p>
            <p className="text-left mb-0 ps-1 small">
              Price: <span className="color0177bf">{price}</span>
            </p>
          </a>
          <div className="d-flex bordert-1d1d1f pb-1">
            <span className="flex-fill small d-flex flex-column text-center">
              <span>
                <FontAwesomeIcon icon={faEye} />
              </span>
              <span className="small">{seen}</span>
            </span>
            <span className="flex-fill small d-flex flex-column text-center">
              <span>
                <FontAwesomeIcon icon={faHeart} />
              </span>
              <span className="small">{like}</span>
            </span>
            <span className="flex-fill small d-flex flex-column text-center">
              <span>
                <FontAwesomeIcon icon={faComment} />
              </span>
              <span className="small">{comment}</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
