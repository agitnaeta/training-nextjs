"use client";
import React, {useState, useEffect} from "react";

import {search} from '../services/SongService'

export default function SearchBar({title,text, setText, setSongs}){

    function handleTyping(e){
        setText(e.target.value)
    }

    async function handleClick(){
        const songdata = await search(text)
        setSongs(songdata.data.tracks.items)
    }


    return (
        <div className="p-2 flex">
            <input
                onKeyUp={handleTyping}
                name="searchbar" 
                className="form-control rounded block max-w-xs" 
                placeholder="Masukan nama musik"
                type="text"/>
            <button
            onClick={handleClick} 
            className="bg-black text-white p-3 rounded">Cari</button>
        </div>
    )
}