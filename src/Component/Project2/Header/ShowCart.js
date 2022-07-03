import { Button } from 'antd'
import React from 'react'
import "./Header.css";
import "../../main.css"

const ShowCart = ({cartDAta}) => {
    // console.log(cartDAta)
    const filterItem = () => {
        console.log("filter")
    }
  return (
<>
<h1>Your Cart</h1>
  {
      cartDAta.map( (item) => {
          console.log(item)
        return(
            <>
              <div key={item.id} className="flex" style={{textAlign:"center"}}>
        <div>
            <img src={item.image} className="img" />
        </div>
        <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <h3></h3>
        </div>
        <div><Button className='btn' onClick={filterItem}>Remove</Button></div>
    </div></>
        )
      })
  }
    </>
  )
}

export default ShowCart