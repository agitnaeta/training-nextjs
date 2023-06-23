"use client";
import MusicList from './components/MusicList'
import SearchBar from './components/SearchBar'
import MediaPlayer from './components/MediaPlayer'

import info from './data/info.json'
import songs from  './data/songs.json'

import { useState } from 'react';

export default function Home(){
  const [text, setText] = useState();
  const [songs, setSongs]= useState([]);
  const [activeSong, setActiveSong] = useState();

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1">
        <MusicList 
          setText={setText} 
          text={text} 
          title={info.music_list}
          setActiveSong={setActiveSong}
          songs={songs}/>
      </div>
      <div className='col-span-3'>
        <div className='grid-rows-12 grid'>
          <div className='row-span-1 bg-slate-700'>
            <SearchBar 
              setText={setText} 
              text={text} 
              setSongs = {setSongs}
              title={info.find_music}/>
          </div>
          <div className='row-span-auto'>
            <MediaPlayer text={text} activeSong={activeSong}/>
          </div>
        </div>
       
      </div>
    </div>
  )
}