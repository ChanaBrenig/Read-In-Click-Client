import React from "react";
import { useDrag } from 'react-dnd';
function Picture(props) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item:{id: props.id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))
    return (
        <>
        <img 
        ref={drag}
        src={props.url} 
        width="150 px"
        style={{opacity: isDragging ? "0.5" : "1.0"}} />
       {/* <label >{props.title}</label> */}
        </>
       )
}

export default Picture;