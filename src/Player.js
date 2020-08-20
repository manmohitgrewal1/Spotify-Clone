import React from "react";
import Body from "./Body";
import SideBar from "./Sidebar";
import Footer from "./Footer";
import "./Player.css";
function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <SideBar />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}
export default Player;
