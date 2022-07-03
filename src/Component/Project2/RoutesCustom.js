import ReactDOM from "react-dom/client";
import {
    Routes,
    Route,
} from "react-router-dom";

import React from 'react'
import Header from "./Header/Header";
import ShowCart from "./Header/ShowCart";
import Body from "./Body/Body";

const CustomRouter = () => {
    return (
       
            <Routes>
                <Route >
                {/* <Route exact path="/" element={<Body />} /> */}
                    
                    <Route exact path="/cart" element={<ShowCart />} />
                </Route>
            </Routes>

    )
}

export default CustomRouter