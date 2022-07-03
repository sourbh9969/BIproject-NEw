import React from 'react';
import { useNavigate } from 'react-router-dom';

import "./Header.css";
import "../../main.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
import Body from '../Body/Body';
import "../../main.css";
import "../Body/body.css"
import { Button, Card, Col, Row } from 'antd';
import Products from '../product';
import { useState } from 'react';
const { Meta } = Card;



const Header = ({setShow,value}) => {


    // const [value, setValue] = useState(0)

    
    const navigatetoCart = () => {
        setShow(false)
    }

    return (
        <>
            <div className='header'>
                <div className='flex'>
                    <h2 onClick={() => setShow(true)} className="logo" >Shopping Cart </h2>
                    <div className='cart flex'>
                        <div >
                           
                            <AiOutlineShoppingCart fontSize={40} onClick={navigatetoCart} className="cart_page"/>
                        </div>
                        <div className='cart_content'>  {value}</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header