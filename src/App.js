import React from "react";
import NavBar from "./components/Templates/Navigator";
import Header from "./components/Templates/Header";
import Promotion from "./components/Templates/Promotion";
import LatestGame from "./components/Templates/LatestGame";
import TabsView from "./components/Templates/TabsView";
import SectionNews from "./components/Templates/SectionNews";
import Footer from "./components/Templates/Footer";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="dnb-loading w-100 bg0177bf" />
      <Header />
      <NavBar />
      <Promotion />
      <LatestGame />
      <TabsView />
      <SectionNews />
      <Footer />
    </div>
  );
}
