"use client";
import React, {useState, useEffect} from "react";
export default function MusicList({title, songs, text, setText, setActiveSong}){

    function handleClick(e){
        let songImages;
        songs.map((song)=>{
            if(song.data.id === e.target.id){
                songImages = song.data.albumOfTrack.coverArt.sources
            }
        })
        setActiveSong({
            songId : e.target.id,
            songName: e.target.dataset.songname,
            songImages: songImages,
        })
    }
    return(
        <div className="p-12 text-white bg-slate-700 h-96">
            <h3 className="text-white">{title}</h3>
            <ul>
                {songs.map((song, index)=>(
                    <li onClick={handleClick} 
                        style={{cursor:'pointer'}}
                        data-songname={song.data.name}
                        id={song.data.id}>
                        {index+1} {song.data.name} 
                    </li>
                ))}

            </ul>
        </div>
    )
}
