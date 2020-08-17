import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useDataLayerValue } from "./DataLayer";
function Header() {
    const [{ user }, dispatch] = useDataLayerValue();
    // console.log( "💠",  user)
  return (
    <div className="Header">
      <div className="Header__left">
        <SearchIcon style={{color: "black"  }}/>
        <input
          className="Header__left_input"
          placeholder="Search for Artists, Songs or Podcasts"
        />
      </div>
      <div className="Header__right">
          {user?.images[0]?.url ? <Avatar src={user?.images[0]?.url}/> : <Avatar >M</Avatar> }
        
  <h6>{user?.display_name}</h6>
      </div>
    </div>
  );
}

export default Header;
