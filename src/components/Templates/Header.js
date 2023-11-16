import React, { Component } from "react";
import { Form, Col, Row } from "react-bootstrap";
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
          <a href={alt} onClick={this.onClick} key={id} className="btn-social">
            <img src={src} alt={alt} />
          </a>
        ))}
      </span>
    );
  }
}

export default function Header() {
  const onClickLogin = (e) => {
    e.preventDefault();
    console.log("onclick to login");
  }
  return (
    <div>
      <section className="bg0c borderb-1d1d1f">
        <div className="container d-flex justify-content-between align-items-center h48px">
          <SocialLink />
          <div className="d-flex">
            <Form>
              <Form.Group className="align-items-center">
                <Row>
                  <Col xs="auto" className="hide-onfone px-0">
                    <Form.Control
                      placeholder="First name"
                      className="rounded-0 bordered-0 bg1 txt-input"
                    />
                  </Col>
                  <Col xs="auto" className="hide-onfone px-1">
                    <Form.Control
                      placeholder="Password"
                      type="password"
                      className="rounded-0 bordered-0 bg1 txt-input"
                    />
                  </Col>
                  <Col xs="auto" className="ps-0">
                    <button
                      style={{ backgroundImage: `url(${rocket.src})` }}
                      className="btn btn-rck bordered-0 rounded-0"
                      type="button"
                      onClick={(e) => onClickLogin(e)}
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </div>
        </div>
      </section>
    </div>
  )
}
