import React, { useEffect, useState } from "react";
import "./Footer.css";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/Repeat";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import cover from "./cover.jpg";
import { useDataLayerValue } from "./DataLayer";

function Footer({ spotify }) {
  const [{ token, item, playing }, dispatch] = useDataLayerValue();

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      console.log(r);

      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, [spotify]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
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
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
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
  };
  
  return (
    <div className="Footer">
      <div className="Footer__info">
        <img
          src={item?.album.images[0].url}
          className="Footer__info_cover"
          alt="Album cover"
        />
        {item ? (
          <div className="Footer__info__artistInfo">
            <h5>{item.name}</h5>
            <h6>{item.artists.map((artist) => artist.name).join(", ")}</h6>
          </div>
        ) : (
          <div className="Footer__info__artistInfo">
            <h5>NO SONG PLAYING..</h5>
            <h6></h6>
          </div>
        )}

        {/* <Favorite   BorderIcon className="fav" style={{ fontSize: "medium" }} /> */}
      </div>
      <div className="Footer__player">
        <ShuffleIcon style={{ fontSize: "large", color: "#1ed15e" }} />
        <SkipPreviousIcon style={{ fontSize: "large" }} />
       {playing ?
        <PlayCircleOutlineIcon  onClick={handlePlayPause} style={{ fontSize: 40 }} />
        : <PauseCircleOutlineIcon onClick={handlePlayPause} style={{ fontSize: 40 }}/>}
        <SkipNextIcon style={{ fontSize: "large" }} />
        <RepeatIcon style={{ fontSize: "large", color: "#1ed15e" }} />
      </div>
      <div className="Footer__config">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider
              aria-labelledby="continuous-slider"
              style={{ color: "#1ed15e", width: "50%" }}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
