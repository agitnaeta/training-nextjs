import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function MediaPlayer({ text, activeSong}){
    const status = activeSong?.songName === undefined ? 0 : 1;
    const label  = status ? <Playing activeSong={activeSong} text={text} /> : <Iddle/>;
    return (
        <div className="bg-black p-10 h-64">
            {label}
        </div>
    )
}
function Counter({time}){
    
    return <p className="text-white">Sebanyak {time}</p>
}

function Iddle(){
    return <p className="text-white">Applikasi Iddle</p>
}

function Playing({text,activeSong}){
    console.log(activeSong.songImages)
    return (
        <div className="p-12 text-center">
            <ImageSong songImages={activeSong.songImages}/>
            <p className="text-white"> 
                Sedang Memutar {activeSong.songName}
            </p>
        </div>
        
    )
}

function ImageSong({songImages}){
    return (
        <Carousel>
            {songImages.map((imageSong,index)=>(
                <div key={index}>
                    <img 
                    height={imageSong.height} 
                    width={imageSong.width} 
                    src={imageSong.url} />
                </div>
            ))}
        </Carousel>
    )
}