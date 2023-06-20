import MusicList from './components/MusicList'
import SearchBar from './components/SearchBar'
import MediaPlayer from './components/MediaPlayer'

export default function Home(){
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-1">
      <div className="row-span-3">
        <MusicList/>
      </div>
      <div className="col-span-2">
        <SearchBar/>
      </div>
      <div className="row-span-2 col-span-2">
        <MediaPlayer/>
      </div>
    </div>
  )
}