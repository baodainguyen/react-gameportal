import React, { Component, useState } from "react";
import { newsPosts, listEvent } from "../../assets";
import "../body.css";

class Post extends Component {
  render() {
    const { avatar, head, dateTime, text, link } = this.props.context;
    return (
      <article className="d-flex h180px mb-3">
        <div className="w40 me-4 h180px">
          <img className="w-100 h180px img-fit-cover" src={avatar} alt={head}
            style={{ objectPosition: 'left top' }} />
        </div>
        <div className="text-left ms-4 pt-0 pe-3 w58">
          <div className="mb-1 text-start">
            <h6 className="font-weight-bold mb-0 lineclamp2">{head}</h6>
            <p className="d-inline-block color0177bf mb-2 small">{dateTime}</p>
          </div>
          <p className="mb-2 lineclamp3 text-start">{text}</p>
          <div className="d-flex justify-content-between">
            <a className="color0177bf" href={link}>
              Read More &#187;
            </a>
          </div>
        </div>
      </article>
    );
  }
}

function LeftSide() {
  const [max, setMax] = useState(3)
  const onLoadMore = (e) => {
    e.preventDefault()
    if (max >= newsPosts.length) return

    setMax(max + 1)
  }

  return (
    <section className="flex-grow-1 minw320px">
      <div className="pe-2">
        <div className="text-left">
          <h4>Bizim Bloqdan</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adspiscing edit, sed do
          </p>
        </div>
        <div className="text-uppercase text-left font-weight-bold">
          <span className="me-3 color727274">En Cox Baxilan</span>
          <button onClick={e => e.preventDefault()}
            className="btn round50 border0d8fc3 text-uppercase text-white font-weight-bold"
            type="button" >
            <p className="mt-1 mb-1 ms-3 me-3 small">En Son</p>
          </button>
        </div>
        <div className="pt-3" style={{ maxHeight: '604px', overflowY: 'auto' }}>
          {newsPosts.map((el, i) => i < max ? <Post context={el} key={`new-post-${i}`} /> : null)}
        </div>
        <div className="pt-3 text-left">
          {
            max < newsPosts.length ? <a onClick={onLoadMore}
              className="btn round50 border0d8fc3 text-uppercase text-white"
              href="http://MoreAricles">
              <p className="mt-1 mb-1 ms-3 me-3 small">More Aricles</p>
            </a> : null
          }
        </div>
      </div>
    </section>
  )
}
class EventItem extends Component {
  render() {
    const { date, head, thread, text, active } = this.props.context;
    return (
      <div className={`h110px ${active ? "bgblack86" : ""} mt-3 mb-4`}>
        <div className="d-flex h110px pt-2">
          <div className="w30 text-center pt-3 ps-2 pe-2">
            <h5 className="text-uppercase">{date.day}</h5>
            <h6 className="bg0177bf pt-1 pb-1">{date.year}</h6>
          </div>
          <div className="text-left w70 ps-1 small">
            <h6 className="lineclamp2 mb-0">{head}</h6>
            <div>
              <a className="color0177bf" href={thread.link}
                onClick={e => e.preventDefault()}>{thread.title} </a>
            </div>
            <p className="lineclamp2 mb-0">{text}</p>
          </div>
        </div>
      </div>
    );
  }
}

class RightSide extends Component {
  render() {
    return (
      <aside className="ps-2 w320px pb-5 borderl1f1f21">
        <div className="text-center">
          <h3>From the forum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adpisicing elit, sed do
            eiusmod tempor
          </p>
        </div>
        <div className="pt-1">
          {listEvent.map((el, i) => <EventItem context={el} key={`list-event-${i}`} />)}
        </div>
        <div className="text-center pt-3">
          <a onClick={e => e.preventDefault()}
            className="btn round50 border0d8fc3 text-uppercase text-white"
            href="http://GoToForumsAricles" >
            <p className="font-weight-light mt-2 mb-2 ms-3 me-3 small">
              Go To Forums Aricles
            </p>
          </a>
        </div>
      </aside>
    );
  }
}

export default class SectionNews extends Component {
  render() {
    return (
      <section className="bg151517">
        <div className="container pt-4 pb-5">
          <div className="row">
            <div className="col-12">
              <div className="d-flex pt-5 dnb-media">
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
