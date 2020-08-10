export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";

const clientId = "a2ceb5a437f543c4a1862c8b033c59f5";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
export const getTokenFromUrl=()=>{
    console.log(window.location)
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item)=> {
        let parts= item.split('=');
        initial[parts[0]]= decodeURIComponent(parts[1])
        return initial;
    },{})
}
export const loginUri = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
console.log(loginUri);
// "https://accounts.spotify.com/api/token"
