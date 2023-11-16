import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import { pagination, promotionSidebar } from "../../assets";
import "../body.css";

class PaginationItem extends Component {
  render() {
    const { head, text, bg, tag } = this.props.context;
    const { name, color } = tag;

    return (
      <div className="pos-relative h541px">
        <img className="w-100 h541px img-fit-cover" src={bg} alt={head} />
        <div
          className={`pos-absolute top0 right0 ${color} ps-5 pe-5 pt-1 pb-1`}
        >
          {name}
        </div>
        <div className="pos-absolute w-100 bottom0 left0 bgblack66 ps-2 pt-2 pb-5">
          <h4 className="text-left mb-0">{head}</h4>
          <p className="text-left mb-0">{text}</p>
        </div>
      </div>
    );
  }
}
class Pagination extends Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
  }
  render() {
    return (
      <div className="flex-grow-1 minw320px" ref={this.wrapper}>
        <Carousel className="h-100 w-100">
          {pagination.map(({ head, text, bg, tag, active }) => (
            <Carousel.Item>
              <PaginationItem context={{ head, text, bg, tag }} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}

class SidebarItem extends Component {
  render() {
    const { head, tag, bg } = this.props.context;
    const { color, name } = tag;

    return (
      <div className="mb-2 pos-relative">
        <img
          className="w-100 h175px dnb-promo-side-item img-fit-cover"
          src={bg}
          alt={tag}
        />
        <span
          className={`pos-absolute ${color} top0 right0 ps-4 pe-4 pt-1 pb-1`}
        >
          {name}
        </span>
        <p className="text-left pos-absolute w-100 bgblack66 bottom0 left0 p-2 mb-0">
          {head}
        </p>
      </div>
    );
  }
}

class Sidebar extends Component {
  render() {
    return (
      <div className="w320px ps-2 dnb-promo-side">
        {promotionSidebar.map(({ head, tag, bg }) => (
          <SidebarItem context={{ head, tag, bg }} />
        ))}
      </div>
    );
  }
}

export default class Promotion extends Component {
  render() {
    return (
      <section className="bge">
        <div className="container">
          <div className="row pt-2">
            <div className="col-12 d-flex dnb-promo">
              <Pagination />
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
