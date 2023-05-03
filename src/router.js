import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";

export function Router() {
    const [prods, setProds] = useState([])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home prods={prods}/> }/>
                <Route path="/add" element={ <Create setProds={setProds}/> }/>
            </Routes>
        </BrowserRouter>
    )
}