import React, { Component } from "react";
import { newsPosts, listEvent } from "../../assets";
import "../body.css";

class Post extends Component {
  render() {
    const { avatar, head, dateTime, text, link } = this.props.context;
    return (
      <article className="d-flex h180px mb-3">
        <div className="w40 mr-4 h180px">
          <img className="w-100 h180px img-fit-cover" src={avatar} alt={head} />
        </div>
        <div className="text-left ml-4 pt-0 pr-3 w58">
          <div className="mb-1">
            <h6 className="font-weight-bold mb-0 lineclamp2">{head}</h6>
            <p className="d-inline-block color0177bf mb-2 small">{dateTime}</p>
          </div>
          <p className="mb-2 lineclamp3">{text}</p>
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

class LeftSide extends Component {
  render() {
    return (
      <section className="flex-grow-1 minw320px">
        <div className="pr-2">
          <div className="text-left">
            <h4>Bizim Bloqdan</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adspiscing edit, sed do
            </p>
          </div>
          <div className="text-uppercase text-left font-weight-bold">
            <span className="mr-3 color727274">En Cox Baxilan</span>
            <button
              type="button"
              className="btn round50 border0d8fc3 text-uppercase text-white font-weight-bold"
            >
              <p className="mt-1 mb-1 ml-3 mr-3 small">En Son</p>
            </button>
          </div>
          <div className="pt-3">
            {newsPosts.map(el => (
              <Post context={el} />
            ))}
          </div>
          <div className="pt-3 text-left">
            <a
              href="http://MoreAricles"
              className="btn round50 border0d8fc3 text-uppercase text-white"
            >
              <p className="mt-1 mb-1 ml-3 mr-3 small">More Aricles</p>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
class EventItem extends Component {
  render() {
    const { date, head, thread, text, active } = this.props.context;
    return (
      <div className={`h110px ${active ? "bgblack86" : ""} mt-3 mb-4`}>
        <div className="d-flex h110px pt-2">
          <div className="w30 text-center pt-3 pl-2 pr-2">
            <h5 className="text-uppercase">{date.day}</h5>
            <h6 className="bg0177bf pt-1 pb-1">{date.year}</h6>
          </div>
          <div className="text-left w70 pl-1 small">
            <h6 className="lineclamp2 mb-0">{head}</h6>
            <div>
              <a className="color0177bf" href={thread.link}>
                {thread.title}
              </a>
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
      <aside className="pl-2 w320px pb-5 borderl1f1f21">
        <div className="text-center">
          <h3>From the forum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adpisicing elit, sed do
            eiusmod tempor
          </p>
        </div>
        <div className="pt-1">
          {listEvent.map(el => (
            <EventItem context={el} />
          ))}
        </div>
        <div className="text-center pt-3">
          <a
            href="http://GoToForumsAricles"
            className="btn round50 border0d8fc3 text-uppercase text-white"
          >
            <p className="font-weight-light mt-2 mb-2 ml-3 mr-3 small">
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
      <section class="bg151517">
        <div class="container pt-4 pb-5">
          <div class="row">
            <div class="col-12">
              <div class="d-flex pt-5 dnb-media">
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
