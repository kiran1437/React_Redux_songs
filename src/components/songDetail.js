import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (song) {
    return (
      <div>
        <h3>Details</h3>
        <p>Title {song.title}</p>
        <p>Duratipon: {song.duration}</p>
      </div>
    );
  } else return <div>Select song</div>;
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetail);
