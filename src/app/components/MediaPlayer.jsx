export default function MediaPlayer({status}){
    const label  = status ? <Playing/> : <Iddle/>;
    return (
        <div className="bg-black p-10 h-64">
            {label}
            <Counter time={1}/>
            <Counter time={1}/>
            <Counter time={1}/>
            <Counter time={1}/>
            
        </div>
    )
}
function Counter({time}){
    
    return <p className="text-white">Sebanyak {time}</p>
}

function Iddle(){
    return <p className="text-white">Applikasi Iddle</p>
}

function Playing(){
    return <p className="text-white bg-zinc-800"> Sedang Memutar ...</p>
}

