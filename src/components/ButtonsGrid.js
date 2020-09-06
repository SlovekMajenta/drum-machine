import React from 'react'

function ButtonsGrid(props){
    const arr2 = [
        {
            name:'Q',
            marginLeft:     props.Q.marginL,
            marginTop:      props.Q.marginT,
            color:          props.Q.color,
            backgroundColor:props.Q.backColor,
            boxShadow:      props.Q.boxShadow
        }, {
            name:'W',
            marginLeft:     props.W.marginL,
            marginTop:      props.W.marginT,
            color:          props.W.color,
            backgroundColor:props.W.backColor,
            boxShadow:      props.W.boxShadow
        }, {
            name:'E',
            marginLeft:     props.E.marginL,
            marginTop:      props.E.marginT,
            color:          props.E.color,
            backgroundColor:props.E.backColor,
            boxShadow:      props.E.boxShadow
        }, {
            name:'A',
            marginLeft:     props.A.marginL,
            marginTop:      props.A.marginT,
            color:          props.A.color,
            backgroundColor:props.A.backColor,
            boxShadow:      props.A.boxShadow
        }, {
            name:'S',
            marginLeft:     props.S.marginL,
            marginTop:      props.S.marginT,
            color:          props.S.color,
            backgroundColor:props.S.backColor,
            boxShadow:      props.S.boxShadow
        }, {
            name:'D',
            marginLeft:     props.D.marginL,
            marginTop:      props.D.marginT,
            color:          props.D.color,
            backgroundColor:props.D.backColor,
            boxShadow:      props.D.boxShadow
        }, {
            name:'Z',
            marginLeft:     props.Z.marginL,
            marginTop:      props.Z.marginT,
            color:          props.Z.color,
            backgroundColor:props.Z.backColor,
            boxShadow:      props.Z.boxShadow
        }, {
            name:'X',
            marginLeft:     props.X.marginL,
            marginTop:      props.X.marginT,
            color:          props.X.color,
            backgroundColor:props.X.backColor,
            boxShadow:      props.X.boxShadow
        }, {
            name:'C',
            marginLeft:     props.C.marginL,
            marginTop:      props.C.marginT,
            color:          props.C.color,
            backgroundColor:props.C.backColor,
            boxShadow:      props.C.boxShadow
        }
    ];
    if(props.powerOn){
        return (
            <form id='buttons-grid'>
               {
                arr2.map((elem) => 
                <input className="buttons" id={elem.name} key={elem.name} style={{
                    marginLeft: elem.marginLeft,
                    marginTop:elem.marginTop,
                    color:elem.color,
                    backgroundColor:elem.backgroundColor,
                    boxShadow:elem.boxShadow}} value={elem.name} type="button" onKeyPress={props.handleKeyPress} onMouseUp={props.handleSoundBTN}/>)
               }
            </form>);
    }
    else{
        return (
            <form id='buttons-grid'>
               {
                arr2.map((elem) => 
                <input className="buttons" id={elem.name} key={elem.name} disabled style={{
                    marginLeft: elem.marginLeft,
                    marginTop:elem.marginTop,
                    color:elem.color,
                    backgroundColor:elem.backgroundColor,
                    boxShadow:elem.boxShadow}} value={elem.name} type="button" onKeyPress={props.handleKeyPress} onMouseUp={props.handleSoundBTN}/>)
               }
            </form>);
    }
}

export default ButtonsGrid
