import React from "react";
import "./Body.css";
import Header from "./Header";
import SongList from "./SongList";
// import discover from "./discover.jpeg"
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function Body({ spotify }) {
  const [{ discover, item, playing }, dispatch] = useDataLayerValue();
  // console.log("🐟", discover);
  let id = 9;
  let something = `spotify:track:${id}`;
  // console.log("🧨", something);

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcIiPnHddtxTo`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    console.log(spotify, `spotify:track:${id}`)
    spotify.play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r,e) => {
          console.log(e)
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  console.log("Items 🎆" , item  )
  return (
    <div className="Body">
      <Header />
      <div className="Body__middle">
        <img className="body__middle_img" src={discover?.images[0]?.url} />
        <div className="body__middle_info">
          <h5>MADE FOR MANMO</h5>
          <h1>Discover Weekly</h1>
          <h4>{discover?.description}</h4>
        </div>
      </div>
      <div className="Body__lower">
        <div className="Body__lower_top">
          <PlayCircleFilledIcon
            style={{ fontSize: "65px", color: "#1ed15e" }}
            onClick={playPlaylist}
          />
          <FavoriteBorderIcon style={{ paddingLeft: "15px" }} />
        </div>
        <div className="Body__lower_songsList">
          {discover?.tracks?.items?.map((item, index) => (
            <SongList
              key={index.toString()}
              id={item.track.id}
              playSong={playSong}
              artists={item.track.artists}
              title={item.track.name}
              duration={item.track.duration_ms}
            />
          ))}
          {/* {arr.map(ele=> <SongList duration= {"195898"}/>)} */}
        </div>
      </div>
    </div>
  );
}

export default Body;
