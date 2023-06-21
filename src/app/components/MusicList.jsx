export default function MusicList({title, songs}){
    return(
        <div className="p-12 text-white bg-slate-700 h-96">
            <h3 className="text-white">{title}</h3>
            <ul>
                {songs.map((song, index)=>(
                    <li>{index+1}.{song.name}</li>
                ))}

            </ul>
        </div>
    )
}