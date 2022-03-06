import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import "./style.css"
type Props = {

}

const Header: React.FC = () => {
    return (
       <header>
            <h1 className='pageTitle'>
                <a href="/">pte______hs</a>
            </h1>
            <nav className="navs">
                <ul className='header_ul'>
                    <li className='header_li'><a href="#">ABOUT</a></li>
                    <li className='header_li'><a href="#">CONTACT</a></li>
                 </ul>
            </nav>
       </header>
    );
  }

export default Header;