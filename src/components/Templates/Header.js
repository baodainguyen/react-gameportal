import React, { Component, useRef } from "react";
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

export default function Header(props) {
  const refUserName = useRef(null)
  const user = props.user

  const onLogin = (e) => {
    let name = refUserName.current.value
    name = name.trim()
    if (name !== '') props.onLogin(e, name)
    else props.onLogin(e, 'Guest')
  }
  return (
    <div>
      <section className="bg0c borderb-1d1d1f">
        <div className="container d-flex justify-content-between align-items-center h48px">
          <SocialLink />
          <div className="d-flex">
            {
              user == null ? <Form>
                <Form.Group className="align-items-center">
                  <Row>
                    <Col xs="auto" className="hide-onfone px-0">
                      <Form.Control ref={refUserName}
                        className="rounded-0 bordered-0 bg1 txt-input"
                        placeholder="First name" />
                    </Col>
                    <Col xs="auto" className="hide-onfone px-1">
                      <Form.Control
                        placeholder="Password"
                        className="rounded-0 bordered-0 bg1 txt-input"
                        type="password" />
                    </Col>
                    <Col xs="auto" className="ps-0">
                      <button className="btn btn-rck bordered-0 rounded-0"
                        style={{ backgroundImage: `url(${rocket.src})` }}
                        onClick={onLogin}
                        type="button" />
                    </Col>
                  </Row>
                </Form.Group>
              </Form> : <div>
                <strong className="text-white">Welcome {user}!</strong>
                <button className="btn bordered-0 rounded-0"
                  onClick={props.onLogOut}
                  type="button" >Log Out</button>
              </div>
            }

          </div>
        </div>
      </section>
    </div>
  )
}
