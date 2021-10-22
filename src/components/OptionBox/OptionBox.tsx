import React from 'react'
import "./OptionBoxStyle.css"


const OptionBox = (props: any) => {
    return (
        <div className='box'>
            <div className='choice' onClick={props.handleClick}>{props.optionVal} </div>
         </div>
    )
}

export default OptionBox
