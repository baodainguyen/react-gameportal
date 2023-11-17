import React, { useState } from "react";
import NavBar from "./components/Templates/Navigator";
import Header from "./components/Templates/Header";
import Promotion from "./components/Templates/Promotion";
import LatestGame from "./components/Templates/LatestGame";
import TabsView from "./components/Templates/TabsView";
import SectionNews from "./components/Templates/SectionNews";
import Footer from "./components/Templates/Footer";

import './App.css';

function App() {
  const [user, setUser] = useState(null)

  const onLogin = (e, name) => {
    e.preventDefault()
    setUser(name)
  }
  const onLogOut = (e) => {
    e.preventDefault()
    setUser(null)
  }

  return (
    <div className="App">
      <div className="dnb-loading w-100 bg0177bf" />
      <Header user={user} onLogin={onLogin} onLogOut={onLogOut} />
      <NavBar user={user} />
      <Promotion />
      <LatestGame />
      <TabsView />
      <SectionNews />
      <Footer />
    </div>
  );
}

export default App;
