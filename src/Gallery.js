import React, { useState } from 'react';
import './galllery.css';
import CloseIcon from '@material-ui/icons/Close';
import img1 from './image/img1.jpg';
import img2 from './image/img2.jpg';
import img3 from './image/img3.jpg';
import img4 from './image/img4.jpg';
import img5 from './image/img5.jpg';
import img6 from './image/img6.jpg';

const Gallery=()=> {
let data=[
    {
        id:1,
        imgSrc:img1,
    },
    {
        id:2,
        imgSrc:img2,
    },
    {
        id:3,
        imgSrc:img3,
    },
    {
        id:4,
        imgSrc:img4,
    },
    {
        id:5,
        imgSrc:img5,
    },
    {
        id:6,
        imgSrc:img6,
    }



]
const[model,setModel]=useState(false);
const[tempimgSrc,setTempImgSrc]=useState('');
const getImg=(imgSrc)=>{
    setTempImgSrc(imgSrc);
    setModel(true); 
}

return(
       <>
       <div className={model? "model open" : "model"}>
       <img src={tempimgSrc} />
       <CloseIcon onClick={()=>  setModel(false) }/>
       </div>
       <div className='gallery'>
        {
            data.map((item,index)=>{
                return(
              <div className='pics' key={index} onClick={()=>getImg(item.imgSrc)}>
            <img src={item.imgSrc} alt='error' style={{width:'100%'}}></img>
              </div>
                )
            })
        }

       </div>
       </>
    )
}

export default Gallery;
