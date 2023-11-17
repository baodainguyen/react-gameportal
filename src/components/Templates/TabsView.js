import React, { Component, useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import {
  faStar, faClock,
  faComment,
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gameItems, developers, tabListPost } from "../../assets";
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
        <div className="w30 me-4 h130px">
          <img className="w-100 h130px img-fit-cover" src={avatar} alt={head} style={{objectPosition: `left top`}}/>
        </div>
        <div className="ms-4 pt-3 pe-3 w63 text-left">
          <div className="text-start">
            <a href={readmoreLink} className="me-2 color4e" onClick={e => e.preventDefault()}>
              <strong className="d-inline-block font-weight-bold mb-2">{head}</strong>
            </a>
          </div>
          <p className="mb-2 lineclamp2 text-start hide-onfone">{text}</p>
          <div className="d-flex justify-content-between">
            <div className="d-inline-flex">
              <p className="mb-1 ms-3 small"><FontAwesomeIcon icon={faComment} className="colorf39813 me-1" />{`${cComment} Comments`}</p>
              <p className="mb-1 ms-3 small"><FontAwesomeIcon icon={faClock} className="colorf39813 me-1" />{time}</p>
            </div>
            <a className="colorf39813" href={readmoreLink}
              onClick={e => e.preventDefault()}>Read More &#187;</a>
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
        <div className="pe-3">
          <div className="mb-3">
            <Tabs defaultActiveKey="enson" id="uncontrolled-tab-example">
              <Tab className="borderr-dee2e6 pe-3 pt-3 text-left"
                eventKey="enson" title="Enson oyunlarmiz" >
                {tabListPost.map(el => <Post context={el} />)}
                <a onClick={e => e.preventDefault()}
                  className="btn bg0292ce rounded-0"
                  href="http://showmoreTabs">Show more</a>
              </Tab>
              <Tab eventKey="mahsur" title="Mahsur Oyunlar" className="colorab pt-3">
                <div style={{ backgroundColor: '#263038', height: '300px', paddingTop: '36px' }}>
                  <span className="loader"></span></div>
              </Tab>
              <Tab eventKey="videolar" title="Videolar" disabled></Tab>
            </Tabs>
          </div>
        </div>
      </section>
    )
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
        <div className="d-flex align-items-center pe-3 pos-absolute h80px top0 right0">
          <img className="h-75" src={bg} alt={name} />
        </div>
        <div className="d-flex h80px pos-absolute left0 top0 w100">
          <img className="w30 img-fit-cover" src={avatar} alt={name} />
          <div className="w70 bgblack86 ps-4 pt-3 text-left">
            <h6>{name}</h6>
            <span className="colorf39813">{rateIcons}</span>
          </div>
        </div>
      </div>
    );
  }
}
function ListGameItem(props) {
  const listGame = props.context;
  const [index, setIndex] = useState(0)
  const getStart = (star) => {
    const startIcons = [];
    for (let i = 0; i < star; i++) {
      startIcons.push(<FontAwesomeIcon icon={faStar} />);
    }
    return startIcons
  }
  const onNextGame = (e) => {
    if (listGame.length - 1 <= index) return
    setIndex(index + 1)
  }
  const onPrevGame = (e) => {
    if (index <= 0) return
    setIndex(index - 1)
  }
  return (
    <div>
      <a onClick={e => e.preventDefault()}
        className="btn bgefc50f color-black btn-block rounded-0 text-uppercase font-weight-bold"
        href="http://TertibatcilarGameItem">Tertibatcilar</a>
      <div className="d-flex align-items-center mt-3 overflow-hidden"
        style={{ maxWidth: `312px`, minWidth: `312px` }}>
        <div className="d-inline-flex" style={{ maxWidth: '288px', minWidth: '288px' }}>
          <img src={listGame[index].avatar} alt={listGame[index].name} width={146} height={146} />
          <div className="ps-2 pt-2">
            <h5 className="font-weight-bold">{listGame[index].name}</h5>
            <div className="mb-3 mt-3">
              <span className="colorf39813">{getStart(listGame[index].star)}</span>
              <span className="colorab">{listGame[index].rate}</span>
            </div>
            <a className="btn bg0292ce rounded-0"
              onClick={e => e.preventDefault()}
              href={listGame[index].action.href}>{listGame[index].action.name}</a>
          </div>
        </div>
        <h4 className="d-flex flex-column ps-2">
          <FontAwesomeIcon icon={faChevronRight} onClick={onNextGame}
            className={listGame.length - 1 <= index ? 'colorab' : ''} />
          <FontAwesomeIcon icon={faChevronLeft} onClick={onPrevGame}
            className={index < 1 ? 'colorab' : ''} />
        </h4>
      </div>
    </div>
  )
}
class RightSide extends Component {
  render() {
    return (
      <aside className="ps-2 w320px pb-5">
        <a className="btn bg8f44ad btn-block rounded-0 text-uppercase font-weight-bold"
          href="http://Tertibatcilar" onClick={e => e.preventDefault()}>
          Tertibatcilar
        </a>
        <div className="mb-5">
          {developers.map(el => <Developer context={el} />)}
          <a className="btn btn-block rounded-0 borderb4bbc1 text-uppercase mt-3"
            onClick={e => e.preventDefault()}
            href="http://ViewDevelopers">View Developers</a>
        </div>
        <ListGameItem context={gameItems} />
      </aside>
    )
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
