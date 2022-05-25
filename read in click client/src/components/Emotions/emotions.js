import React, { useState } from 'react';
import './emotions.css'
import { useDrop } from 'react-dnd'

import Picture from './picture';
import Negative from './negative';
// const userList = "https://jsonplaceholder.typicode.com/users";
const PictureList = [

  {
    img: require(`./images/3.JPG`),
    title: 'צוֹחֵק',
    id: "2",

  },
  {
    img: require(`./images/4.JPG`),
    title: 'חוֹשֵׁשׁ',
    id: "-1",

  },
  {
    img: require(`./images/5.JPG`),
    title: 'מִתְבַּדֵּחַ',
    id: "3",

  },
  {
    img: require(`./images/6.JPG`),
    title: 'מְאֻשָּׁר',
    id: "4",
  },
  {
    img: require(`./images/7.JPG`),
    title: 'עָצוּב',
    id: "-2",
  },
  {
    img: require(`./images/8.JPG`),
    title: 'שָׂמֵחַ',
    id: "5",
  },
  {
    img: require(`./images/9.JPG`),
    title: 'בּוֹכֶה',
    id: "-3",
  },
  {
    img: require(`./images/10.JPG`),
    title: 'כּוֹעֵס',
    id: "-4",

  },
  {
    img: require(`./images/11.JPG`),
    title: 'מִתְלַבֵּט',
    id: "-5",

  },
  {
    img: require(`./images/1.JPG`),
    title: 'מַבְּסוּט',
    id: "1",

  },
];
export default function Emotions() {

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
    if (id > 0) {
      setBoard((board) => [...board, pictureList[0]]);
    }
  }
  return (<div >
    <div className="d">
    <div className='t'>משחק הרגשות</div>
    <div>יש לגרור כל אחד מהאימוג'ים הבאים לתיבה המתאימה</div></div>
    <div className="PicturesList">
    <table ><tr>
      {PictureList.map((picture) => {
        return (<td><Picture url={picture.img} id={picture.id} title={picture.title} /></td>)
      })}
      </tr>
      <tr>{PictureList.map((p)=>{return (<td className='td'>{p.title}</td>)})}</tr>
</table></div>
<a href="http://localhost:3000/choose" className="ahref">לעמוד הראשי</a>
    <br /><br />
    <div className='td'>רְגָשׁוֹת חִיּוּבִיִּים</div>
    <div
      className="Board"
      ref={drop}
      style={{ border: isOver ? "5px solid black" : "2px solid black" }}>
      {board.map((picture) => {
        return <Picture url={picture.img} id={picture.id} />
      })}
    </div>
    <br /> <br />
    <Negative list={PictureList} />
  </div>
  )
}




