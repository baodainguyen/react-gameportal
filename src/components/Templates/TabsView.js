import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import {
  faStar,
  faComment,
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gameItem, developers, tabListPost } from "../../assets";
import "../body.css";
import "./media.css";

class Post extends Component {
  render() {
    const {
      avatar,
      head,
      time,
      text,
      cComment,
      readmoreLink
    } = this.props.context;

    return (
      <article className="d-flex bgwhite h130px mb-3">
        <div className="w30 mr-4 h130px">
          <img className="w-100 h130px img-fit-cover" src={avatar} alt={head} />
        </div>
        <div className="ml-4 pt-3 pr-3 w63 text-left">
          <div>
            <a href={readmoreLink} className="mr-2 color4e">
              <h6 className="d-inline-block font-weight-bold mb-2">{head}</h6>
            </a>
            <p className="d-inline-block mb-1 small">{time}</p>
          </div>
          <p className="mb-2 lineclamp2 hide-onfone">{text}</p>
          <div className="d-flex justify-content-between">
            <div>
              <FontAwesomeIcon icon={faComment} className="colorf39813 mr-2" />
              <span>{`${cComment} Comments`}</span>
            </div>
            <a className="colorf39813" href={readmoreLink}>
              Read More &#187;
            </a>
          </div>
        </div>
      </article>
    );
  }
}

class LeftSide extends Component {
  render() {
    return (
      <section className="flex-grow-1 minw320px">
        <div className="pr-3">
          <div className="mb-3">
            <Tabs defaultActiveKey="enson" id="uncontrolled-tab-example">
              <Tab
                eventKey="enson"
                title="Enson oyunlarmiz"
                className="borderr-dee2e6 pr-3 pt-3 text-left"
              >
                {tabListPost.map(el => (
                  <Post context={el} />
                ))}
                <a
                  className="btn bg0292ce rounded-0"
                  href="http://showmoreTabs"
                >
                  Show more
                </a>
              </Tab>
              <Tab eventKey="mahsur" title="Mahsur Oyunlar" className="colorab">
                <div>tab 2</div>
              </Tab>
              <Tab eventKey="videolar" title="Videolar" disabled>
                <div>tab 3</div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>
    );
  }
}

class Developer extends Component {
  render() {
    const { avatar, bg, name, rate } = this.props.context;
    const rateIcons = [];
    for (let i = 0; i < rate; i++) {
      rateIcons.push(<FontAwesomeIcon icon={faStar} />);
    }

    return (
      <div className="pos-relative h80px mt-3">
        <div className="d-flex align-items-center pr-3 pos-absolute h80px top0 right0">
          <img className="h-75" src={bg} alt={name} />
        </div>
        <div className="d-flex h80px pos-absolute left0 top0">
          <img className="w30 img-fit-cover" src={avatar} alt={name} />
          <div className="w70 bgblack86 pl-4 pt-3 text-left">
            <h6>{name}</h6>
            <span className="colorf39813">{rateIcons}</span>
          </div>
        </div>
      </div>
    );
  }
}
class GameItem extends Component {
  render() {
    const { avatar, name, star, rate, action } = this.props.context;
    const startIcons = [];
    for (let i = 0; i < star; i++) {
      startIcons.push(<FontAwesomeIcon icon={faStar} />);
    }

    return (
      <div>
        <a
          href="http://TertibatcilarGameItem"
          className="btn bgefc50f color-black btn-block rounded-0 text-uppercase font-weight-bold"
        >
          Tertibatcilar
        </a>
        <div className="d-flex align-items-center mt-3">
          <div className="d-inline-flex">
            <img src={avatar} alt={name} />
            <div className="pl-2 pt-2">
              <h5 className="font-weight-bold">{name}</h5>
              <div className="mb-3 mt-3">
                <span className="colorf39813">{startIcons}</span>
                <span className="colorab">{rate}</span>
              </div>
              <a className="btn bg0292ce rounded-0" href={action.href}>
                {action.name}
              </a>
            </div>
          </div>
          <h4 className="d-flex flex-column pl-2">
            <FontAwesomeIcon icon={faChevronRight} />
            <FontAwesomeIcon icon={faChevronLeft} className="colorab" />
          </h4>
        </div>
      </div>
    );
  }
}
class RightSide extends Component {
  render() {
    return (
      <aside class="pl-2 w320px pb-5">
        <a
          href="http://Tertibatcilar"
          className="btn bg8f44ad btn-block rounded-0 text-uppercase font-weight-bold"
        >
          Tertibatcilar
        </a>
        <div className="mb-5">
          {developers.map(el => (
            <Developer context={el} />
          ))}
          <a
            href="http://ViewDevelopers"
            className="btn btn-block rounded-0 borderb4bbc1 text-uppercase mt-3"
          >
            View Developers
          </a>
        </div>
        <GameItem context={gameItem} />
      </aside>
    );
  }
}

export default class TabsView extends Component {
  render() {
    return (
      <section className="bge">
        <div className="container pt-4">
          <div className="row">
            <div className="col-12">
              <div className="d-flex bordert-d9 pt-5 dnb-media">
                <LeftSide />
                <RightSide />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
