export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover: null,
  artists: null,
  tracks: null,
  token: null,

  // token:
  // "BQDBSxejNfyUB0HvxwzRN2hHSCGo2dEMhQhQ5PjNwMqEV03hp4JsaK7t6CxCxO99gvu9TMJs3iV_g1rAtUpKK5Cvq4R8B88NVkvtZXCFZqil00jc7WEcPw5OiWwKAfBYozF3fVoY0_1BlRf-Y7jo6ocAaRCZt7DOS7mdN7gyCPtxMa65",
};
const reducer = (state, action) => {
  //   console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER":
      return {
        ...state,
        discover: action.discover,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_ARTISTS":
      return {
        ...state,
        artists: action.artists,
      };
    case "SET_TRACKS":
      return {
        ...state,
        tracks: action.tracks,
      };
    default:
      return state;
  }
};
export default reducer;
