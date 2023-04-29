import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";

export function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }/>
                <Route path="/add" element={ <Create /> }/>
            </Routes>
        </BrowserRouter>
    )
}