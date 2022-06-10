import React from "react";
import "./style.css";
type Props = {
    hurry: number;
    onClick: (str: string) => () => void;
};

const Header: React.FC<Props> = (props) => {

    return (
       <header>
            <h1 className="pageTitle">
                <a href="https://ptlx.github.io/pte">pte______hs</a>
            </h1>
            <nav className="navs">
                <ul className="navsList">
                    <li className="navsList">
                        <button onClick={props.onClick("圏論などをやっています。\nネギトロが好きです。")}>ABOUT</button>
                    </li>
                    <li className="navsList">
                        <button onClick={props.onClick("Twitterはありません。")}>CONTACT</button>
                    </li>
                    <li className="navsList">
                        <button onClick={props.onClick("まだないっす")}>DIARY</button>
                    </li>
                 </ul>
            </nav>
       </header>
    );
  }

export default Header;
