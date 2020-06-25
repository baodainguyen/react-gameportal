import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { latestGameList } from "../../assets";
import GameItem from "../Atoms/GameItem";
import "../body.css";

export default class LatestGame extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    e.preventDefault();
    console.log("onclick..LatestGame" + e.target);
  }
  render() {
    return (
      <section className="bge">
        <div className="container pt-4">
          <div className="d-flex justify-content-between bordert-d9 pt-5">
            <div className="text-left">
              <h6 className="text-uppercase mb-0">Latest Games</h6>
              <span>---------</span>
            </div>
            <ul className="pagination mb-2">
              <li className="page-item">
                <a
                  className="page-link color4e"
                  href
                  onClick={this.onClickLogin}
                >
                  See All
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link color4e"
                  href
                  onClick={this.onClickLogin}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link color4e"
                  href
                  onClick={this.onClickLogin}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-between flex-wrap">
            {latestGameList.map(({ id, info, react }) => (
              <GameItem info={info} react={react} key={id} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
