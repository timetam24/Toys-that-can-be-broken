"use client";
import React from "react";

const Song = ({ song }) => {
  return (
    <div>
      <p>
        {song.singer}: {song.title}
      </p>
    </div>
  );
};

const SongList = () => {
  const songs = [
    { id: 1, singer: "허회경", title: "김철수 씨 이야기" },
    { id: 2, singer: "NF", title: "Mistake" },
    { id: 3, singer: "Henry Moodie", title: "pick up the phone" },
    { id: 4, singer: "볼빨간사춘기", title: "민들레" },
  ];

  return (
    <div>
      {songs.map((song) => (
        <Song song={song} key={song.id} />
      ))}
    </div>
  );
};

export default SongList;
