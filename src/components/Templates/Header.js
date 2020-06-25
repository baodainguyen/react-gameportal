import React, { Component } from "react";
import { Form, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { socialLink, rocket } from "../../assets";
import "./header.css";
import "./media.css";

class SocialLink extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    e.preventDefault();
    console.log("onclick..SocialLink" + e.target);
  }
  render() {
    return (
      <span>
        {socialLink.map(({ id, src, alt }) => (
          <a href={alt} onClick={this.onClick} key={id}>
            <img src={src} alt={alt} />
          </a>
        ))}
      </span>
    );
  }
}
class AccountInfo extends Component {
  constructor(props) {
    super(props);
    this.onClickLogin = this.onClickLogin.bind(this);
  }
  onClickLogin(e) {
    e.preventDefault();
    console.log("onclick to login");
  }
  render() {
    return (
      <div className="d-flex">
        <Form>
          <Form.Row className="align-items-center">
            <Col xs="auto" className="hide-onfone">
              <Form.Control
                placeholder="First name"
                className="rounded-0 bordered-0 bg1"
              />
            </Col>
            <Col xs="auto" className="hide-onfone">
              <Form.Control
                placeholder="Password"
                type="password"
                className="rounded-0 bordered-0 bg1"
              />
            </Col>
            <Col xs="auto">
              <button
                style={{ backgroundImage: `url(${rocket.src})` }}
                className="btn btn-rck bordered-0 rounded-0"
                type="button"
                onClick={this.onClickLogin}
              />
            </Col>
          </Form.Row>
        </Form>
      </div>
    );
  }
}

export default class Header extends Component {
  render() {
    return (
      <div>
        <section className="bg0c borderb-1d1d1f">
          <div className="container d-flex justify-content-between align-items-center h48px">
            <SocialLink />
            <AccountInfo />
          </div>
        </section>
      </div>
    );
  }
}
