import React from 'react';
import "../../main.css";
import "./body.css"
import { Button, Card, Col, Row } from 'antd';
import Products from '../product';
import { useState } from 'react';
const { Meta } = Card;



const Body = ({sendData}) => {

    return (
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
  
                          <Button type='primary' className='btn' onClick={() => sendData(item)}> Add to Cart</Button>
                          </div>
                      </Card>
                          )
                      }
            
                      
                                    
            </div>
        </div>
    )
}

export default Body