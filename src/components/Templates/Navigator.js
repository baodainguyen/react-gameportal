import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { navList, icons } from "../../assets";
import {
  faAngleDown,
  faGlobe,
  faSearch,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavItem, SubItem } from "../Atoms/NavItem";
import "../Atoms/navigator.css";
import "./media.css";

class Navigator extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md pt-0 pb-0">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav dnb-menu font-weight-bold">
            {navList.map(({ type, icon, name, subMenu }) => (
              <NavItem
                key={`NavItem${type}`}
                type={type}
                icon={icon}
                name={name}
                subMenu={subMenu}
              />
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

class NavInfo extends Component {
  render() {
    return (
      <div>
        <button className="btn bordered-0 rounded-0 ml-2" type="button">
          <FontAwesomeIcon icon={faSearch} className="text-white" />
        </button>
        <a className="text-white ml-3 mr-1" href="http://language">
          <FontAwesomeIcon icon={faGlobe} className="mr-2" />
          AZ
          <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
        </a>
        <a
          className="color0177bf ml-3 text-uppercase d-inline-block dnbsignup hide-onfone"
          href="http://signup"
        >
          <FontAwesomeIcon icon={faUser} className="mr-2" />
          Sign up
        </a>
      </div>
    );
  }
}

class SubMenu extends Component {
  render() {
    return (
      <ul
        class="list-inline pb-3 pt-3 mb-0 dnbSubmenu dnbHidden"
        id={this.props.id}
      >
        {this.props.subMenu.map(({ name, href }) => (
          <SubItem name={name} href={href} />
        ))}
      </ul>
    );
  }
}

class SubMenuArea extends Component {
  render() {
    const subMenuList = [];
    navList.forEach((e, index) => {
      if (e.subMenu !== undefined)
        subMenuList.push(
          <SubMenu id={e.id} subMenu={e.subMenu} key={`subMenu${index}`} />
        );
    });
    return (
      <div
        className="container d-flex justify-content-around bordert-1d1d1f"
        id="dnbSubmenuExpand"
      >
        {subMenuList}
      </div>
    );
  }
}

export default class NavBar extends Component {
  render() {
    return (
      <section className="bg1 dnbMainMenuWrap">
        <div className="container d-flex justify-content-between align-items-center">
          <span>
            <a href="http://logo">
              <img src={icons.logo} alt="logo" />
            </a>
          </span>
          <div className="d-inline-flex justify-content-between align-items-center">
            <Navigator />
            <NavInfo />
          </div>
        </div>
        <SubMenuArea />
      </section>
    );
  }
}
