import blg from "./assets/img/_0001_blg.png";
import g from "./assets/img/_0000_g.png";
import facebook from "./assets/img/_0002_f.png";
import twitter from "./assets/img/_0003_tw.png";
import pinterest from "./assets/img/_0004_p.png";
import o from "./assets/img/_0005_o.png";
import ytub from "./assets/img/_0006_y.png";
import instagram from "./assets/img/_0007_i.png";
import rck from "./assets/img/_0009_rocket.png";
import homeIc from "./assets/img/_0010_home.png";
import gameIc from "./assets/img/_0011_game.png";
import settingsIc from "./assets/img/_0012_settings.png";
import investIc from "./assets/img/_0013_invest.png";
import saveIc from "./assets/img/_0014_save.png";
import searchIc from "./assets/img/_0015_search.png";
import langIc from "./assets/img/_0016_lang.png";
import logoIc from "./assets/img/_0008_logo.png";
import bgNv from "./assets/img/bg/nv.png";
import bgNv2 from "./assets/img/bg/nv2.jpg";
import bgNv3 from "./assets/img/bg/nv3.jpg";
import bgNv4 from "./assets/img/bg/nv4.png";
import RStar from "./assets/img/bg/Rstar.png";
import csgo from "./assets/img/bg/csgo.png";
import streammer from "./assets/img/avatar/streammer.jpg";
import streammer2 from "./assets/img/avatar/streammer2.jpg";
import gamepromo from "./assets/img/avatar/gamepromo.jpg";

export const footerListMap = [
  {
    id: 1,
    head: "Game Portal",
    listItem: [
      { id: 1, name: "Home", link: "http://home" },
      { id: 2, name: "Game News", link: "http://gameNews" },
      { id: 3, name: "Annoucements", link: "http://Annoucements" },
      { id: 4, name: "Videos", link: "http://videos" }
    ]
  },
  {
    id: 2,
    head: "About Games",
    listItem: [
      { id: 1, name: "Latest Reviews", link: "http://LatestReviews" },
      { id: 2, name: "Top Rated Games", link: "http://TopRatedGames" },
      { id: 3, name: "Games of 2020", link: "http://Gamesof2020" },
      { id: 4, name: "Videos", link: "http://videos" }
    ]
  },
  {
    id: 3,
    head: "Learn More",
    listItem: [
      { id: 1, name: "Support", link: "http://Support" },
      { id: 2, name: "Login/Sign up", link: "http://Login_SignUp" },
      { id: 3, name: "Custommer Service", link: "http://CustommerService" },
      { id: 4, name: "Get Started", link: "http://GetStarted" }
    ]
  }
];
export const listEvent = [
  {
    date: { day: "31 Jan", year: "2020" },
    head: "Problem with my game? The NVIDIA panel does not",
    thread: { title: "Forum Title no.1", link: "http://thread1" },
    text: `Lorem ipsum dolor sit amet, consectetur adpisicing elit, sed do eiusmod tempor`,
    active: true
  },
  {
    date: { day: "28 Jun", year: "2019" },
    head: "he ARM panel does not",
    thread: { title: "Forum Title no.2", link: "http://thread2" },
    text: `Lorem ipsum dolor sit amet, consectetur adpisicing elit, sed do eiusmod tempor`
  },
  {
    date: { day: "28 Jun", year: "2020" },
    head: "he ARM panel does not",
    thread: { title: "Forum Title no.3", link: "http://thread3" },
    text: `Consectetur adpisicing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet`
  }
];
export const newsPosts = [
  {
    avatar: bgNv,
    head: "How Good is Withcher 3: Blood & Wnine Realese on Stream",
    dateTime: "Jan 32, 2020 ago",
    text: `Ubinsoft's crown jewel of the holiday release seasong  first reactions for Ragnarok are in, and they're lookng good. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis`,
    link: "http://newsPost1"
  },
  {
    avatar: bgNv2,
    head: "How Good is Withcher 3: Blood & Wnine Realese on Stream",
    dateTime: "June 32, 2020 ago",
    text: `Ubinsoft's crown jewel of the holiday release seasong  first reactions for Ragnarok are in, and they're lookng good. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis`,
    link: "http://newsPost2"
  },
  {
    avatar: bgNv3,
    head:
      "How Good is Avenger 4: Blood & Wnine Realese on Stream e holiday release seasong  first reaction",
    dateTime: "March 32, 2020 ago",
    text: `They're lookng good. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis`,
    link: "http://newsPost3"
  }
];

export const gameItem = {
  avatar: gamepromo,
  name: "A Hat In Time",
  star: 5,
  rate: 4.7,
  action: { name: "Tertibatcilar", href: "http://gotogame" }
};
export const tabListPost = [
  {
    avatar: bgNv,
    head: "Thor: Ragnarok - Rifst Reaction WTwitter Roundup",
    time: "5hrs ago",
    text: `The first reactions for Ragnarok are in, and they're lookng good Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis`,
    cComment: 270,
    readmoreLink: "http://readmore1"
  },
  {
    avatar: bgNv2,
    head: "Aventer -  Rifst Reaction WTwitter Roundup",
    time: "2hrs ago",
    text: `The first reactions for Avenger habitant morbi tristique senectus et netus et malesuada fames ac turpis`,
    cComment: 570,
    readmoreLink: "http://readmore2"
  },
  {
    avatar: bgNv3,
    head: "Thor: Ragnarok - Rifst Reaction WTwitter Roundup",
    time: "2hrs ago",
    text: `Lookng good Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis`,
    cComment: 70,
    readmoreLink: "http://readmore3"
  }
];
export const developers = [
  { avatar: streammer, bg: RStar, name: "Chris Flower", rate: 4 },
  { avatar: streammer2, bg: csgo, name: "Ronal Tower", rate: 5 }
];

export const socialLink = [
  { id: 1, src: blg, alt: "blog" },
  { id: 2, src: g, alt: "g+" },
  { id: 3, src: facebook, alt: "facebook" },
  { id: 4, src: twitter, alt: "twitter" },
  { id: 5, src: pinterest, alt: "pinterest" },
  { id: 6, src: o, alt: "o" },
  { id: 7, src: ytub, alt: "ytub" },
  { id: 8, src: instagram, alt: "instagram" }
];

export const rocket = { src: rck };
export const latestGameList = [
  {
    id: 1,
    info: {
      name: "Need For Speed",
      price: "$49.86",
      img: bgNv,
      href: "http://needforspeed"
    },
    react: { seen: 200, like: 100, comment: "900" }
  },
  {
    id: 2,
    info: {
      name: "Need For PUPG",
      price: "$29.86",
      img: bgNv2,
      href: "http://pupg"
    },
    react: { seen: 200, like: 100, comment: "1202" }
  },
  {
    id: 3,
    info: {
      name: "Half life",
      price: "$9.86",
      img: bgNv3,
      href: "http://hafllife"
    },
    react: { seen: 900, like: 600, comment: "1080" }
  },
  {
    id: 4,
    info: {
      name: "LoL",
      price: "$9.4",
      img: bgNv4,
      href: "http://lol"
    },
    react: { seen: 900, like: 600, comment: "1989" }
  },
  {
    id: 5,
    info: {
      name: "Half life",
      price: "$9.86",
      img: bgNv3,
      href: "http://0_5life"
    },
    react: { seen: 900, like: 600, comment: "1508" }
  },
  {
    id: 6,
    info: {
      name: "Need For PUPG",
      price: "$29.86",
      img: bgNv2,
      href: "http://pupg"
    },
    react: { seen: 200, like: 100, comment: "1234" }
  },
  {
    id: 7,
    info: {
      name: "Need For Speed",
      price: "$49.86",
      img: bgNv,
      href: "http://needforspeed"
    },
    react: { seen: 200, like: 100, comment: "cmt Speed" }
  },
  {
    id: 8,
    info: {
      name: "LoL",
      price: "$9.4",
      img: bgNv4,
      href: "http://lol"
    },
    react: { seen: 900, like: 600, comment: "6790" }
  }
];

export const icons = {
  logo: logoIc,
  search: searchIc,
  lang: langIc
};

export const pagination = [
  {
    head: "Azerbaycanin en mehsur oyununu teqdim edirik",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elusmod tempor incididunt ut labore et",
    bg: bgNv,
    tag: { name: "Oyliniar", color: "bgd55401" },
    active: true
  },
  {
    head: "Azerbaycanin en mehsur oyununu teqdim edirik",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elusmod tempor incididunt ut labore et",
    bg: bgNv2,
    tag: { name: "Tag 2", color: "bg9b58b5" }
  },
  {
    head: "Azerbaycanin en mehsu2 ik",
    text:
      "Lorem ipsum dolor sit amet, c sed do elusmod tempor incididunt ut labore et",
    bg: bgNv4,
    tag: { name: "Tag 3", color: "bgefc50f" }
  }
];

export const promotionSidebar = [
  {
    head: "Bandai Namco announce God Eater 3: Giant",
    tag: { color: "bg9b58b5", name: "Icma" },
    bg: bgNv2
  },
  {
    head: "Namco announce God Eater Giant Bandai",
    tag: { name: "Media", color: "bgefc50f" },
    bg: bgNv3
  },
  {
    head: "God Easter 3: Giant by Namco game review",
    tag: { name: "Forum", color: "bg9b58b5" },
    bg: bgNv4
  }
];

export const navList = [
  {
    type: "home",
    icon: { bg: homeIc, class: "bg-img-home" },
    name: "Ana Sahifa"
  },
  {
    type: "game",
    icon: { bg: gameIc, class: "bg-img-game" },
    name: "Oyunlar",
    id: "dnbSubmenuOyunlar",
    subMenu: [
      { name: "Tertibatcilar", href: "" },
      { name: "Serhciler", href: "" },
      { name: "Investorlar", href: "" },
      { name: "Destek edenler", href: "" }
    ]
  },
  {
    type: "settings",
    icon: { bg: settingsIc, class: "bg-img-settings" },
    name: "Tartibatcilar"
  },
  {
    type: "invest",
    icon: { bg: investIc, class: "bg-img-invest" },
    name: "Investisiya",
    id: "dnbSubmenuInvestisiya",
    subMenu: [
      { name: "Investisiya", href: "" },
      { name: "Destek Serhciler", href: "" }
    ]
  },
  {
    type: "save",
    icon: { bg: saveIc, class: "bg-img-save" },
    name: "Bagis etmak"
  }
];
