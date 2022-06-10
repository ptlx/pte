import React  from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style.css";
import { Home } from "../home/home";


const App: React.FC = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route index element={<Home/>}/>
                </Routes>
            </Router>

        </>
    );
}

export default App;