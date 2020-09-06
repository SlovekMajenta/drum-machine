import React from 'react'

function ControlButton(props){
    if(props.name === "Power"){
        return (
            <div>
                <p className="right-p">{props.name}</p>
                <button className="perekluch buttons" onClick={props.handlePower}>
                    <div className="perekluch-div" style={{marginLeft:props.marginl, marginRight:props.marginr}}></div>
                </button>
            </div>
            );
    }
    else if(props.powerOn){
        return (
            <div>
                <p className="right-p">{props.name}</p>
                <button className="perekluch buttons" onClick={props.handleBank}>
                    <div className="perekluch-div" style={{marginLeft:props.marginlb, marginRight:props.marginrb}}></div>
                </button>
            </div>
            );
    }
    else{
        return (
            <div>
                <p className="right-p">{props.name}</p>
                <button disabled className="perekluch buttons" onClick={props.handleBank}>
                    <div className="perekluch-div" style={{marginLeft:props.marginlb, marginRight:props.marginrb}}></div>
                </button>
            </div>
            );
    }
}

export default ControlButton