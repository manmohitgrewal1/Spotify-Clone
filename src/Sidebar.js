import React from "react";
import "./Sidebar.css";
import logo from "./loginLogo.png";
import SildebarOptions from "./SidebarOptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import { useDataLayerValue } from "./DataLayer";
function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
 
  return (
    <div className="SideBar">
      <img className="Sidebar__logo" src={logo} alt="logo" />
      <SildebarOptions Icon={HomeIcon} options="Home" />
      <SildebarOptions Icon={SearchIcon} options="Search" />
      <SildebarOptions Icon={QueueMusicIcon} options="Your Library" />
      <strong>PLAYLISTS</strong>
      <hr></hr>
     { playlists?.items?.map((playlist) => (
    <SildebarOptions options={playlist.name} />
  ))}
    </div>
  );
}

export default Sidebar;
