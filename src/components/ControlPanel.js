import React from 'react'
import ControlButton from './ControlButton'
import SoundVolume from './SoundVolume';

function ControlPanel(props){
    return (
    <div id="right">
        <ControlButton name="Power" 
        handlePower={props.handlePower} 
        marginl={props.marginl} 
        marginr={props.marginr}/>
        <SoundVolume powerOn={props.powerOn} divText={props.divText} handleVolume={props.handleVolume}/>
        <ControlButton name="Bank" powerOn={props.powerOn}
        handleBank={props.handleBank}
        marginlb={props.marginlb} 
        marginrb={props.marginrb}/>
    </div>);
}

export default ControlPanel