import React, { useEffect } from 'react';
import './header.css';
import logo from '../../res/main_logo.png';


export default function Header() {
    var page;

    const header = document.getElementsByClassName('header');
    window.addEventListener('scroll', () => {
        var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
        if (scrollTop > 0) {
            header[0].style.height = 20 -  Math.min(10, 10 * scrollTop / 150) + "vh";
        }

        
        if (scrollTop < window.innerHeight / 2) {
            page = 1;
        } else {
            page = Math.floor((scrollTop - window.innerHeight / 2) / window.innerHeight + 2);
        }
        console.log(page);
        var button = document.getElementById("btn" + page);
        button.style.color = "white";
        if (page >= 2) {
            button = document.getElementById("btn" + (page - 1));
            button.style.color = "black";
        }
        if (page <= 4) {
            button = document.getElementById("btn" + (page + 1));
            button.style.color = "black";
        }
    })

    useEffect(() => {
        const menu = document.getElementsByClassName('menu');

        menu[0].children[0].addEventListener('mouseenter', () => {
            menu[0].children[0].style.color = 'rgb(216, 212, 212)';
        })
        menu[0].children[0].addEventListener('mouseleave', () => {
            if (page === 1) {
                menu[0].children[0].style.color = 'white';
            } else menu[0].children[0].style.color = 'black';
        })

        menu[0].children[1].addEventListener('mouseenter', () => {
            menu[0].children[1].style.color = 'rgb(216, 212, 212)';
        })
        menu[0].children[1].addEventListener('mouseleave', () => {
            if (page === 2) {
                menu[0].children[1].style.color = 'white';
            } else menu[0].children[1].style.color = 'black';
        })

        menu[0].children[2].addEventListener('mouseenter', () => {
            menu[0].children[2].style.color = 'rgb(216, 212, 212)';
        })
        menu[0].children[2].addEventListener('mouseleave', () => {
            if (page === 3) {
                menu[0].children[2].style.color = 'white';
            } else menu[0].children[2].style.color = 'black';
        })

        menu[0].children[3].addEventListener('mouseenter', () => {
            menu[0].children[3].style.color = 'rgb(216, 212, 212)';
        })
        menu[0].children[3].addEventListener('mouseleave', () => {
            if (page === 4) {
                menu[0].children[3].style.color = 'white';
            } else menu[0].children[3].style.color = 'black';
        })

        menu[0].children[4].addEventListener('mouseenter', () => {
            menu[0].children[4].style.color = 'rgb(216, 212, 212)';
        })
        menu[0].children[4].addEventListener('mouseleave', () => {
            if (page === 5) {
                menu[0].children[4].style.color = 'white';
            } else menu[0].children[4].style.color = 'black';
        })
    }, [page])


    return (
        <div className="header">
            <div id="logo">
                <img id="logo_img" src={logo} alt="logo"
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: 'smooth'
                        })
                    }}
                />
            </div>

            <div className="menu">
                <button id="btn1" style={{color: 'white'}}
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: 'smooth'
                        })
                    }}
                >
                    ACASA
                </button>

                <button id="btn2"
                    onClick={() => {
                        window.scrollTo({
                            top: window.innerHeight,
                            left: 0,
                            behavior: 'smooth'
                        })
                    }}
                >
                    DESPRE NOI
                </button>

                <button id="btn3"
                    onClick={() => {
                        window.scrollTo({
                            top: 2 * window.innerHeight,
                            left: 0,
                            behavior: 'smooth'
                        })
                    }}
                >
                    GALERIE FOTO
                </button>

                <button id="btn4"
                    onClick={() => {
                        window.scrollTo({
                            top: 3 * window.innerHeight,
                            left: 0,
                            behavior: 'smooth'
                        })
                    }}
                >
                    SERVICII
                </button>

                <button id="btn5"
                    onClick={() => {
                        window.scrollTo({
                            top: 4 * window.innerHeight,
                            left: 0,
                            behavior: 'smooth'
                        })
                    }}
                >
                    CONTACT
                </button>

                <button id="programari"
                    onClick={() => {
                        window.open('https://mero.ro/p/ovidiu-nica');
                    }}
                >
                    PROGRAMARI
                </button>
            </div>
        </div>
    );
}
