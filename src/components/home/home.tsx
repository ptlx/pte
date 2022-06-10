import React, { useState } from "react";
import "./style.css";
import Header from "../header/header";
import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/GitHub";
import defaultWords from "../../data/words";
import myIcon from "../../images/patchouli2.png";

type Props = {
    hurry: number;
    setdisp: React.Dispatch<React.SetStateAction<string>>;
    disp: string;
}


export const Home: React.FC<Props> = (props: Props) => {
    if (props.hurry >= 1) props.setdisp("急かすな")
    if (props.hurry >= 2) props.setdisp("急かすな！！！！")
    if (props.hurry >= 5) props.setdisp("ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ")
    const setOnClick = (str: string) => ( () => props.setdisp(str) )
    return (
        <>
            <Header 
                hurry={props.hurry} 
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
                        <p className="comment">{props.disp}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
