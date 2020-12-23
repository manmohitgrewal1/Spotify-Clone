import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";
const spotify = new SpotifyWebApi();
function App() {
  // const [token, setToken] = useState(null);
  const [{ token }, dispatch] = useDataLayerValue();
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);

      // Setting token in DataLayer: state container
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.play({
        uris: ["spotify:track:5UKYX8eywMafGPVzBlxsed"]
      }).then((res)=>{
      })
      spotify.getMyTopTracks().then((li) => {
        dispatch({
          type:"SET_TRACKS",
          tracks: li
        })
      });

      spotify.getMyTopArtists().then((li) => {
        dispatch({
          type:"SET_ARTISTS",
          artists: li
        })
      });


      spotify.getUserPlaylists().then((playlist) =>
        dispatch({
          type: "SET_PLAYLIST",
          playlists: playlist,
        })
      );

      spotify.getPlaylist("37i9dQZEVXcIiPnHddtxTo").then((discoverPlaylist) =>
        dispatch({
          type: "SET_DISCOVER",
          discover: discoverPlaylist,
        })
      );

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });
    }
  }, [token, dispatch]);
  

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
