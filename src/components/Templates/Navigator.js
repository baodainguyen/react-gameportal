import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { navList, icons } from "../../assets";
import {
  faAngleDown,
  faGlobe,
  faSearch,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Atoms/navigator.css";
import "./media.css";

function NavInfo() {

  return (
    <div>
      <button className="btn bordered-0 rounded-0 ms-2" type="button">
        <FontAwesomeIcon icon={faSearch} className="text-white" />
      </button>
      <a className="text-white ms-3 me-1" href="http://language"
        onClick={e => e.preventDefault()}>
        <FontAwesomeIcon icon={faGlobe} className="me-2" />
        AZ
        <FontAwesomeIcon icon={faAngleDown} className="ms-2" />
      </a>
      <a onClick={e => e.preventDefault()}
        className="color0177bf ms-3 text-uppercase d-inline-block dnbsignup hide-onfone"
        href="http://signup" >
        <FontAwesomeIcon icon={faUser} className="me-2" />
        Sign up
      </a>
    </div>
  )
}

class SubMenuArea extends Component {
  render() {
    if (!Array.isArray(this.props.submenu)) {
      return <></>
    }
    console.log(this.props.submenu)
    return (
      <div
        className="container d-flex justify-content-around bordert-1d1d1f"
        id="dnbSubmenuExpand" >
        <ul className="list-inline pb-3 pt-3 mb-0 dnbSubmenu">
          {this.props.submenu.map(({ name, href }, i) => (
            <li className="list-inline-item me-5" key={`subitem-${i}`}>
              <a className="hover-white color727274" href={href}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default function NavBar() {
  const [submenu, setSubmenu] = useState(null);
  const selectMenu = (e, subMenu) => {
    e.preventDefault()
    setSubmenu(subMenu)
  }

  return (
    <section className="bg1 dnbMainMenuWrap" onMouseLeave={e => setSubmenu(null)}>
      <div className="container d-flex justify-content-between align-items-center">
        <span>
          <a href="http://logo">
            <img src={icons.logo} alt="logo" />
          </a>
        </span>
        <div className="d-inline-flex justify-content-between align-items-center">
          <nav className="navbar navbar-expand-md pt-0 pb-0">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav dnb-menu font-weight-bold">
                {navList.map(({ type, icon, name, subMenu }) => {
                  const smIcon = subMenu ? <FontAwesomeIcon icon={faAngleDown} className="ms-1 mt-2 hover-show" /> : <></>
                  return (
                    <li key={`NavItem${type}`} data-name={name}
                      className="nav-item pt-2 pb-2 dnb-hover-show dnbMainMenu" >
                      <a className="nav-link color727274 d-inline-flex hover-white"
                        href={name} onClick={(e) => selectMenu(e, subMenu)} >
                        <span style={{ backgroundImage: `url(${icon.bg})` }}
                          className={icon.class} />
                        <span className="hide-onpad pt-1">{name}</span>
                        {smIcon}
                      </a>
                    </li>
                  )
                }
                )}
              </ul>
            </div>
          </nav>
          <NavInfo />
        </div>
      </div>
      <SubMenuArea submenu={submenu} />
    </section>
  )
}
