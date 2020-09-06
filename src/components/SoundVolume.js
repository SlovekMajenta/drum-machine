import React from 'react'

function SoundVolume(props){
    if(props.powerOn){
        return (<div id="soundvolume">
        <div id="sound-name">{props.divText}</div>
        <input type="range" onChange={props.handleVolume}/>
        </div>);
    }
    else{
        return (<div id="soundvolume">
        <div id="sound-name">{props.divText}</div>
        <input disabled type="range" onChange={props.handleVolume}/>
        </div>
        );
    }
}

export default SoundVolume