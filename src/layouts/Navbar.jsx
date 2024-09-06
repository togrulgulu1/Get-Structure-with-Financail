import React, { useState } from 'react'
import logo from "./image/navlogo.svg"
// import cont from "./image/cont.svg"
import "./css/navbar.css"

const Navbar = () => {

    let [active, setActive] = useState(false)

    const click = () => {
        setActive(!active)

        if(!active){
            document.body.classList.add('menu-open')
        }else{
            document.body.classList.remove('menu-open')
        }
    }


    return (
        <header id='header'>

            <div className="con flex">

                <div className="navLogo">
                    <img src={logo} alt="#" />
                </div>

                <div className={`burgerMenu ${active ? 'active': ''}`}>
                    <button onClick={click}>
                        <ul>
                            <li className="bar"></li>
                            <li className="bar"></li>
                            <li className="bar"></li>
                        </ul>
                    </button>
                </div>

                <div className={`navMenu ${active ? 'active' : ''}`}>

                    <div className="navbar">
                        <nav>
                            <ul className='flex'>
                                <li>Learn</li>
                                <li>Compare</li>
                                <li>Services</li>
                            </ul>
                        </nav>
                    </div>

                    <div className="contact flex">
                        <div className='contBtn'><span>Contact Us</span></div>
                        {/* <img src={cont} alt="" /> */}
                        <div className='userIcon'><i class="fa-solid fa-user-plus"></i></div>
                    </div>


                </div>


            </div>

        </header>
    )
}

export default Navbar