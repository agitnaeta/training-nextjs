import MusicList from './components/MusicList'
import SearchBar from './components/SearchBar'
import MediaPlayer from './components/MediaPlayer'

import info from './data/info.json'
import songs from  './data/songs.json'
export default function Home(){
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-0">
      <div className="row-span-3">
        <MusicList title={info.music_list} songs={songs}/>
      </div>
      <div className="col-span-6">
        <SearchBar title={info.find_music}/>
      </div>
      <div className="row-span-2 col-span-6">
        <MediaPlayer status={1}/>
      </div>
    </div>
  )
}