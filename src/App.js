import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Body from "./Component/Project2/Body/Body.js";
import Header from "./Component/Project2/Header/Header.js"
import ShowCart from "./Component/Project2/Header/ShowCart.js";
import CustomRouter from "./Component/Project2/RoutesCustom.js";
// import 'antd/dist/antd.css';
function App() {
  const [show, setShow] = useState(true)
  const [value, setValue] = useState(0)

// uplift the data from Body component
  const [cartDAta, setCartDAta] = useState([])

  const sendData = (product) => {
      setValue(value +1)
      // cartDAta.push(product)
      setCartDAta([...cartDAta,product])
      console.log(cartDAta)

  }
  // console.log(cartDAta)
  return (
  <>
   <BrowserRouter>
  <Header setShow ={setShow} value= {value} />
  <CustomRouter />
  {show?<Body sendData={sendData} /> : <ShowCart cartDAta={cartDAta} />}
  </BrowserRouter>
  </>
  );
}

export default App;
