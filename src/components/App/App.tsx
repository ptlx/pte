import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./style.css";
import defaultWords from "../../data/words";
import { Home } from "../home/home";


const App: React.FC = () => {
    const [hurry, setHurry] = useState(0);
    const [disp, setdisp] = useState(defaultWords[Math.floor(Math.random() * defaultWords.length)]);
    if (hurry >= 1) setdisp("急かすな")
    if (hurry >= 2) setdisp("急かすな！！！！")
    if (hurry >= 5) setdisp("ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ")
    const setOnClick = (str: string) => ( () => setdisp(str) )
    return (
        <>
            <Home
                disp={disp}
                setdisp={setdisp}
                hurry={hurry}
            />
        </>
    );
}

export default App;