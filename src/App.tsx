import React from 'react';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/section/main/Main";
import {Skills} from "./layout/section/skills/Skills";
import {Fiture} from "./layout/section/fiture/Fiture";
import {Testimony} from "./layout/section/testimony/Testimony";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Fiture/>
            <Testimony/>
        </div>
    );
}

export default App;
