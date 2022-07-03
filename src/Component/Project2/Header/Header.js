import React from 'react';
import "./Header.css";
import "../../main.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
import Body from '../Body/Body';
import "../../main.css";
import "../Body/body.css"
import { Button, Card, Col, Row } from 'antd';
import Products from '../product';
import { useState } from 'react';
import ShowCart from './ShowCart';
import { Link } from 'react-router-dom';
const { Meta } = Card;


const Header = () => {
    const [value, setValue] = useState(0)

    const [cartDAta, setCartDAta] = useState([])
    const [show, setShow] = useState(false)


    const sendData = (product) => {
        setValue(value +1)
        cartDAta.push(product)
    }


    return (
        <>
            <div className='header'>
                <div className='flex'>
                    <h2 >Shopping Cart </h2>
                    <div className='cart flex'>
                        <div >
                            {/* <Link to="/cart" > */}
                            <a href="/cart" >
                            <AiOutlineShoppingCart fontSize={40} onClick={() => setShow(true)} className="cart_page"/>
                            </a>
                            {/* </Link> */}
                        </div>
                        <div className='cart_content'>  {cartDAta?.length}</div>
                    </div>
                </div>
            </div>
  {/* <Body /> */}

  <div className='container'>
           <h1 className='heading'> Our Items</h1>
            <div className='card flex'>
              
                      {
                          Products.map( (item) =>
                          <Card
                          key={item.id}            
                          hoverable
                          className='card-border'
                          cover={<img alt="example" src={item.image} className='img shirt_img' />}
                      >
                          <div className='card_body' >
                          <h3>{item.name}</h3>
                          <p>{item.description}</p>
                          <h4>price : Rs {item.price} <span className='light-del'><del>Rs {item.offer}</del></span></h4>
  
                          <Button type='primary' className='btn' onClick={()=> sendData(item)}> Add to Cart</Button>
                          </div>
                      </Card>
                          )
                      }
            
                      
                                    
            </div>
        </div>

        </>
    )
}

export default Header