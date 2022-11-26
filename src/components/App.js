import React, {useState, useEffect} from "react";
import { Route, Routes} from "react-router";
import  NavigationBar  from "./NavigationBar"
import ByAuthor from "./ByAuthor"
import ByGenre from "./ByGenre"
import CompletedReads from "./CompletedReads"
import Home from "./Home"

function App() {

    return (
        <div>
            'Hello,world'
            <NavigationBar/>
            <Routes>
                <Route path="/search_by_author" element={<ByAuthor 
                />} />
                <Route path="/search_by_genre" element={<ByGenre 
                />} />
                <Route path="/completed_reads" element={<CompletedReads 
                />} />
                <Route path="/" element={<Home
                />} />
            </Routes>
        </div>
    )

}

export default App;
