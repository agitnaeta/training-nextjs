import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReactAudioPlayer from 'react-audio-player';
import Image from "next/image";

export default function MediaPlayer({ text, activeSong}){
    const status = activeSong?.songName === undefined ? 0 : 1;
    const label  = status ? <Playing activeSong={activeSong} text={text} /> : <Iddle/>;
    return (
        <div className="bg-black h-screen text-center">
            {label}
        </div>
    )
}
function Counter({time}){
    
    return <p className="text-white">Sebanyak {time}</p>
}

function Iddle(){
    return <p className=" p-10 text-white">Applikasi Iddle</p>
}

function Playing({text,activeSong}){
    return (
        <div class="grid grid-cols-3 gap-4">
            <div className="col-start-2">
                <ImageSong songImages={activeSong.songImages}/>
                <p className="text-white text-center">Sedang Memutar {activeSong.songName}
                </p>
                <AudioPlayer songUrl={activeSong.songUrl}/>
            </div>
        </div>
        
        
    )
}

function ImageSong({songImages}){
    return (
        <Carousel dynamicHeight={true} className="bg-red-300" autoPlay={true}>
            {songImages.map((imageSong,index)=>(
                <div key={index}>
                    <Image 
                    alt="Image"
                    // height={imageSong.height} 
                    // width={imageSong.width} 
                    src={imageSong.url} />
                </div>
            ))}
        </Carousel>
    )
}

function AudioPlayer({songUrl}){
    return (
        <ReactAudioPlayer
        src={songUrl}
        // autoPlay
        controls
        />
    )
}