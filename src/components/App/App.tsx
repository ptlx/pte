import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./style.css";
import Header from "../header/header";
import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/GitHub";
import defaultWords from "../../data/words";
import myIcon from "../../images/patchouli2.png";


const App: React.FC = () => {
    const [hurry, setHurry] = useState(0);
    const [disp, setdisp] = useState(defaultWords[Math.floor(Math.random() * defaultWords.length)]);
    if (hurry >= 1) setdisp("急かすな")
    if (hurry >= 2) setdisp("急かすな！！！！")
    if (hurry >= 5) setdisp("ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ")
    const setOnClick = (str: string) => ( () => setdisp(str) )
    return (
        <>
            <Header 
                hurry={hurry} 
                onClick={setOnClick}
            />
            <div className="pageComponent">
                <div className="profile">
                    <div className="imgIconSet">
                        <img 
                            className="iconImage" 
                            src={myIcon}
                            alt="アイコン画像"
                        />
                        <a href="https://twitter.com/pte_hs" className="snsicon"><TwitterIcon/></a>
                        <a href="https://github.com/ptlx" className="snsicon"><GithubIcon/></a>
                    </div>
                    <div>
                        <h4 className="myname">pte</h4>
                    </div>
                    <div className="comment">
                        <p className="comment">{disp}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;