import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./button.css";

export class ButtonNoBorded extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true, name: null };
    this.handleClick = this.handleClick.bind(this);
  }
  UNSAFE_componentWillMount() {
    switch (this.props.iconName) {
      case "Search":
        this.setState({ name: faSearch });
        break;
      default:
        this.setState({ name: faSearch });
        break;
    }
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
    return (
      <Button
        className="btn bordered-0 rounded-0 ms-2"
        type="button"
        onClick={this.handleClick}
      >
        <FontAwesomeIcon icon={this.state.name} />
        {/* {this.state.isToggleOn ? "ON" : "OFF"} */}
      </Button>
    );
  }
}
