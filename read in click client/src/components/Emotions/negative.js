import React, { useState } from 'react';
import './emotions.css'
import { useDrop } from 'react-dnd'

import Picture from './picture';

const PictureList = [

    {
      img: require(`./images/3.JPG`),
      title: 'Sink',
    id:"2",
  
    },
    {
      img: require(`./images/4.JPG`),
      title: 'Kitchen',
      id:"-1",
  
    },
    {
      img: require(`./images/5.JPG`),
      title: 'Blinds',
      id:"3",
  
    },
    {
      img: require(`./images/6.JPG`),
      title: 'Chairs',
      id:"4",
    },
    {
      img: require(`./images/7.JPG`),
      title: 'Laptop',
      id:"-2",
    },
    {
      img: require(`./images/8.JPG`),
      title: 'Doors',
      id:"5",
    },
    {
      img: require(`./images/9.JPG`),
      title: 'Coffee',
      id:"-3",
    },
    {
      img: require(`./images/10.JPG`),
      title: 'Storage',
      id:"-4",
  
    },
    {
      img: require(`./images/11.JPG`),
      title: 'Candle',
      id:"-5",
  
    },
    {
      img: require(`./images/1.JPG`),
      title: 'Coffee table', 
      id:"1",
  
    },
  ];
export default function Negative(props) {

    const [board, setBoard] = useState([]);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));


    const addImageToBoard = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id);
        if(id<0){
        setBoard((board) => [...board, pictureList[0]]);}
    }
    return (<div>

        <div style={{ textAlign: "center" }}>רגשות שליליים</div>
        <div
            className="Board"
            ref={drop}
            style={{ border: isOver ? "5px solid black" : "2px solid black" }}>
            {board.map((picture) => {
                return <Picture url={picture.img} id={picture.id} />
            })}
        </div>


    </div>)

}




