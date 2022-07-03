import { Button } from 'antd'
import React from 'react'
import "./Header.css";
import "../../main.css"

const ShowCart = ({cartDAta}) => {
    console.log(cartDAta)
  return (
<>
<h1>Your Cart</h1>
  {
      cartDAta.map( (item) => {
          console.log(item)
        return(
            <>
              <div>
        <div>
            {/* <img src={item.img}  /> */}
        </div>
        <div>
            <h2></h2>
            <p></p>
            <h3></h3>
        </div>
        <div><Button className='btn'></Button></div>
    </div></>
        )
      })
  }
    </>
  )
}

export default ShowCart