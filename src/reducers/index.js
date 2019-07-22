import { combineReducers } from "redux";

const songs = () => {
  return [
    { title: "No scrubs", duration: "4:40" },
    { title: "stellaris", duration: "3:30" },
    { title: "nier", duration: "2:20" },
    { title: "no time for caution", duration: " 5:50" }
  ];
};

const selectedSong = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs,
  selectedSong
});
