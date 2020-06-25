import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navigator.css";

export class NavItem extends Component {
  render() {
    const submenu = this.props.subMenu ? (
      <FontAwesomeIcon icon={faAngleDown} className="ml-1 mt-2 hover-show" />
    ) : (
      ""
    );
    return (
      <li
        key={this.props.type}
        className="nav-item pt-2 pb-2 dnb-hover-show dnbMainMenu"
        data-name={this.props.name}
      >
        <a
          className="nav-link color727274 d-inline-flex hover-white"
          href={this.props.name}
        >
          <span
            className={this.props.icon.class}
            style={{ backgroundImage: `url(${this.props.icon.bg})` }}
          />
          <span className="hide-onpad pt-1">{this.props.name}</span>
          {submenu}
        </a>
      </li>
    );
  }
}

export class SubItem extends Component {
  render() {
    return (
      <li className="list-inline-item mr-5">
        <a className="hover-white color727274" href={this.props.href}>
          {this.props.name}
        </a>
      </li>
    );
  }
}
