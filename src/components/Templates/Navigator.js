import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component, useState, useRef } from "react";
import { Modal, Form, Button } from 'react-bootstrap';
import { navList, icons } from "../../assets";
import {
  faAngleDown,
  faSearch,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Atoms/navigator.css";
import "./media.css";

function NavInfo(props) {
  const refMenuLang = useRef(null)
  const [showsignup, setShowsignup] = useState(false)
  const handleClose = () => setShowsignup(false)
  const handleShow = (e) => {
    e.preventDefault()
    setShowsignup(true)
  }
  const onToggleMenuLang = (e) => {
    e.preventDefault()
    refMenuLang.current.classList.toggle('show')
  }
  const onHideMenuLang = (e) => {
    refMenuLang.current.classList.remove('show')
  }

  return (
    <div className="d-flex" style={{ alignItems: 'baseline' }} 
      onMouseLeave={onHideMenuLang}>
      <button className="btn bordered-0 rounded-0 ms-2" type="button">
        <FontAwesomeIcon icon={faSearch} className="text-white" />
      </button>
      <div className="dropdown" onMouseLeave={onHideMenuLang}>
        <a className="nav-link dropdown-toggle"
          href="#lang"
          id="drpLang" onClick={onToggleMenuLang}
          role="button" data-bs-toggle="dropdown"
          aria-expanded="false">AZ</a>
        <ul className="dropdown-menu" aria-labelledby="#drpLang" ref={refMenuLang}>
          <li><a className="dropdown-item" href="#vi">Vietnamese</a></li>
          <li><a className="dropdown-item" href="#en">English</a></li>
        </ul>
      </div>
      {
        props.user === null ? <a onClick={handleShow}
          className="color0177bf ms-3 text-uppercase d-inline-block dnbsignup hide-onfone"
          href="http://signup" >
          <FontAwesomeIcon icon={faUser} className="me-2" />
          Sign up
        </a> : null
      }
      {
        props.user === null ? <Modal show={showsignup} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign up information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="user.email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus />
              </Form.Group>
              <Form.Group className="mb-3" controlId="user.password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Form.Group
                controlId="user.description"
                className="mb-3" >
                <Form.Label>Your note</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary"
              onClick={handleClose}>Cancel</Button>
            <Button variant="primary"
              onClick={handleClose}>Sign up</Button>
          </Modal.Footer>
        </Modal> : null
      }
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

export default function NavBar(props) {
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
          <NavInfo user={props.user} />
        </div>
      </div>
      <SubMenuArea submenu={submenu} />
    </section>
  )
}
