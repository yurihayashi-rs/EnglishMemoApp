import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    const navStyle = {
        color:"white"
    };

    return (
        <div className="home">
        <nav>

            <ul className='nav-links'>
                <Link style={navStyle} to='/home'>
                <li>HOME</li>
                </Link>
                <Link style={navStyle} to='leisure'>

                </Link>
            </ul>
            
        </nav>
        
             　
        

        </div>
    )
}

export default Nav
