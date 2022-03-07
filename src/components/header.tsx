import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import "./style.css"
type Props = {
    hurry: number;
    onClick: any;
}

const Header: React.FC<Props> = (props) => {
    return (
       <header>
            <h1 className='pageTitle'>
                <a href="https://ptlx.github.io/pte">pte______hs</a>
            </h1>
            <nav className="navs">
                <ul className='header_ul'>
                    <li className='header_li'><button onClick={props.onClick}>ABOUT(まて)</button></li>
                    <li className='header_li'><button onClick={props.onClick}>CONTACT(まて)</button></li>
                 </ul>
            </nav>
       </header>
    );
  }

export default Header;