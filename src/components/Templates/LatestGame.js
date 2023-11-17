import React, { useRef, useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { latestGameList } from "../../assets";
import GameItem from "../Atoms/GameItem";
import "../body.css";

export default function LatestGame() {
  const [show, setShow] = useState(false);
  const listGameRef = useRef();

  const onClickShowAll = (e) => {
    e.preventDefault();
    setShow(true)
  }
  const onScrollX = (e, isRight) => {
    e.preventDefault()
    const lstGameDom = listGameRef.current
    const scrLeft = isRight ? lstGameDom.scrollLeft + (1.8 * 159) : lstGameDom.scrollLeft - (1.8 * 159)
    lstGameDom.scrollTo({
      left: scrLeft, behavior: "smooth"
    })
  }
  const handleClose = () => setShow(false);
  const flexWidth = latestGameList.length * 159
  return (
    <section className="bge">
      <div className="container pt-4">
        <div className="d-flex justify-content-between bordert-d9 pt-5">
          <div className="text-left">
            <h6 className="text-uppercase mb-0">Latest Games</h6>
            <span>---------</span>
          </div>
          <ul className="pagination mb-2">
            <li className="page-item">
              <a className="page-link color4e" href="See all"
                onClick={onClickShowAll} >See All</a>
            </li>
            <li className="page-item">
              <a className="page-link color4e" href="<"
                onClick={e => { onScrollX(e, false) }}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </a>
            </li>
            <li className="page-item">
              <a className="page-link color4e" href=">"
                onClick={e => { onScrollX(e, true) }} >
                <FontAwesomeIcon icon={faChevronRight} />
              </a>
            </li>
          </ul>
        </div>
        <div className="overflow-hidden" ref={listGameRef}>
          <div className="d-flex flex-wrap" style={{ width: `${flexWidth}px`, height: `207px` }}>
            {latestGameList.map(({ id, info, react }) => (
              <GameItem info={info} react={react} key={id} />
            ))}</div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} fullscreen={true}
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title>Latest Games</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">Wow!!</div>
          <div className="d-flex flex-wrap">
            {latestGameList.map(({ id, info, react }) => (
              <GameItem info={info} react={react} key={id} />
            ))}</div>
        </Modal.Body>
      </Modal>
    </section>
  )
}
