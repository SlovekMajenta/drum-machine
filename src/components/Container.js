import React from 'react'
import ButtonsGrid from './ButtonsGrid'
import ControlPanel from './ControlPanel'

function Container(props){
    return (
    <div id='container'>
        <div id="footer"><a href="tg://resolve?domain=steveblowjobs666" target="_blank">Slava Merkulov Production</a></div>    
        <div id="inner-container">
        <ButtonsGrid 
        powerOn={props.powerOn}

        handleSoundBTN={props.handleSoundBTN}
        handleKeyPress={props.handleKeyPress}
        W={props.W}
        Q={props.Q}
        E={props.E}
        A={props.A}
        S={props.S}
        D={props.D}
        Z={props.Z}
        X={props.X}
        C={props.C}
        />
        <ControlPanel 
        powerOn={props.powerOn}
        handlePower={props.handlePower} 
        marginl={props.marginl} 
        marginr={props.marginr}
        
        handleBank={props.handleBank}
        marginlb={props.marginlb} 
        marginrb={props.marginrb}
        
        handleVolume={props.handleVolume}
        
        divText={props.divText}/>
    </div></div>);
}

export default Container