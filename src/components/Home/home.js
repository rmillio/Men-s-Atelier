import React from 'react';
import './home.css';
import facebook from '../../res/facebook_icon.png';
import instagram from '../../res/insta_icon.png';
import scroll from '../../res/scroll.png';

export default function Home() {
    return (
        <div className="home">
          <div className="text">
            <div>
                Irure cillum sunt sit elit.
            </div>
            <div className="-bold" style={{paddingTop: "15px"}}>
                Mollit Lorem tempor id non est voluptate duis do.
            </div>

            <button
              onClick={() => {
                window.open('https://mero.ro/p/ovidiu-nica');
              }}
            >
                PROGRAMEAZA-TE
            </button>
          </div>
          <div className="social_media">
            <img style={{margin: "5px"}} src={facebook} alt="facebook"
              onClick={() => {
                window.open('https://www.facebook.com/Ovidiu-Nica-Mens-Atelier-107019037891921');
              }}
            />
            <img style={{margin: "5px"}} src={instagram} alt="instagram"
              onClick={() => {
                window.open('https://www.instagram.com/nicaovidiuatelier/');
              }}
            />
          </div>

          <div className="scrollBtn">
            <img src={scroll} alt="scroll" 
                onClick={() => {
                  window.scroll({
                    top: window.innerHeight,
                    left: 0, 
                    behavior: 'smooth'
                  });
                }}  
            />
          </div>
        </div>
    );
}
