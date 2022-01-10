import React from 'react'
import './showImages.css'

export function ShowImages(props) {

    return (<div>
        <img className="imgFamily" src={props.src}></img>
    </div>)
}


