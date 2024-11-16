"use client";
import React, {useState, useEffect} from "react";
import {play} from '../services/SongService'

export default function MusicList({title, songs, text, setText, setActiveSong}){

    async function handleClick(e){
        let songImages;
        songs.map((song)=>{
            if(song.data.id === e.target.id){
                songImages = song.data.albumOfTrack.coverArt.sources
            }
        })
        const track = await play(e.target.id);
        setActiveSong({
            songId : e.target.id,
            songName: e.target.dataset.songname,
            songImages: songImages,
            songUrl: track.data.tracks[0].preview_url
        })
    }
    return(
        <div className="p-12 text-white bg-slate-700 h-screen">
            <h3 className="text-white">{title}</h3>
            <ul>
                {songs.map((song, index)=>(
                    <li key={index} onClick={handleClick} 
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
