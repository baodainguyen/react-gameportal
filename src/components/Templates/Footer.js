import React, { Component } from "react";
import { footerListMap } from "../../assets";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, InputGroup } from "react-bootstrap";
import "../body.css";

class ListMap extends Component {
  render() {
    const { head, listItem } = this.props.context;
    return (
      <div className="col-4 col-sm-4 col-md-3 text-left mb-4">
        <h6 className="text-white text-uppercase mb-3">{head}</h6>
        <ul className="color727274 list-unstyled small">
          {listItem.map(({ id, name, link }) => (
            <li className="mb-2" key={`${id}_${name}`}>
              <a className="color727274" href={link}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
class SiteMap extends Component {
  render() {
    return (
      <div className="row">
        {footerListMap.map(el => (
          <ListMap context={el} key={`${el.id}_${el.head}`} />
        ))}
        <div className="col-12 col-sm-12 col-md-3 text-left">
          <h6 className="text-white text-uppercase ms-1 mb-3">
            Subcribe To Newsletter
          </h6>
          <div>
            <InputGroup className="mb-3 round50 bg35 p-1">
              <Form.Control
                className="round50 border-0 bg35"
                type="email"
                placeholder="your email"
                aria-label="your email"
                aria-describedby="EmailNewsletter"
              />
              <button className="btn bg0292ce rounded-circle" type="submit">
                  <FontAwesomeIcon icon={faEnvelope} />
                </button>
            </InputGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg0c">
        <div className="container pt-5">
          <SiteMap />
          <div className="text-left mt-3">
            <p className="color727274 small pb-3 mb-0">
              &copy; 2020 Demo 07. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
