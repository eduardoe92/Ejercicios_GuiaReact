import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Pokedex from "./components/Pokedex";
import Menu from "./components/Menu";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="Menu" element={<Menu/>}/>
                <Route path="/pokedex" element={<Pokedex />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
