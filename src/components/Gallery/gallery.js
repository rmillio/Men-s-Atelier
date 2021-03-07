import React, { useEffect, useState } from 'react';
import './gallery.css';
import img1 from '../../res/nicaovidiuatelier/1.jpg';
import img2 from '../../res/nicaovidiuatelier/2.jpg';
import img3 from '../../res/nicaovidiuatelier/3.jpg';
import img4 from '../../res/nicaovidiuatelier/4.jpg';
import img5 from '../../res/nicaovidiuatelier/5.jpg';
import img6 from '../../res/nicaovidiuatelier/6.jpg';
import img7 from '../../res/nicaovidiuatelier/7.jpg';
import img8 from '../../res/nicaovidiuatelier/8.jpg';
import img9 from '../../res/nicaovidiuatelier/9.jpg';

import left from '../../res/left.png';
import right from '../../res/right.png';

import Carousel, { consts } from "react-elastic-carousel";
import Servicii from "../Servicii/servicii";

var leftBtn;
var rightBtn;
var gal;

export default function Gallery() { 
    const myArrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? left : right;
        if (isEdge === true) {
            return (
            <button style={{backgroundColor: "transparent", border: "none", cursor: "default"}}>
                <img src={pointer} onClick={onClick} style={{cursor: "pointer", opacity: "0.5"}}/>
            </button>
            );
        }
        return (
            <button style={{backgroundColor: "transparent", border: "none", cursor: "default"}}>
                <img src={pointer} onClick={onClick} style={{cursor: "pointer"}}/>
            </button>
          
        )
    }

    
    useEffect(() => {
        leftBtn = document.getElementById("left");
        rightBtn = document.getElementById("right");
        gal = document.getElementsByClassName("gallery")[0];
    }, []);

    return (
        <div className="gallery-container">
            <Carousel className="gallery" itemsToShow={4} itemsToShow={4} enableAutoPlay autoPlaySpeed={5000} renderArrow={myArrow}>
                <Picture src={img1} />
                <Picture src={img2} />
                <Picture src={img3} />
                <Picture src={img4} />
                <Picture src={img5} />
                <Picture src={img6} />
                <Picture src={img7} />
                <Picture src={img8} />
                <Picture src={img9} />
            </Carousel>

            <Servicii />
        </div>
        
    );
}

function Picture(props) {
    return (
        <div>
            <img src={props.src} alt={props.src} className="pic">
            </img>
        </div>
    );
}
