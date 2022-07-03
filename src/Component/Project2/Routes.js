import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import React from 'react'
import Header from "./Header/Header";
import ShowCart from "./Header/ShowCart";

const Routes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route path="/cart" element={<ShowCart />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routes