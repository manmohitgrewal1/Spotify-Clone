import React from "react";
import "./SongList.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

function SongList(props) {
  //   console.log("🔻", props.artists, props.duration);
  let ms = props.duration / 60000;
  let min = (ms.toFixed(2) + "").split(".");
    console.log(props.id)
  function clickCheck(key) {
    // alert(key);
  }
  return (
    <div className="SongList" onClick={() => props.playSong(props.id)}>
      <MusicNoteIcon style={{ color: "white", paddingTop: "8px" }} />
      <div className="SongList__info">
        <p>{props.title}</p>
        <p className="SongList__artist">
          {props.artists?.map((li, index) =>
            index == 0 ? li.name + " " : ", " + li.name
          )}
        </p>
      </div>
      <div className="SongList__duration">
        <p className="SongList__duration_tag">
          {min[0]}:{min[1]}
        </p>
      </div>
    </div>
  );
}

export default SongList;
