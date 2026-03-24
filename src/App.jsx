import { useState } from 'react'

import './App.css'
import Header from './components/Header/index.jsx'
import HomePage from './components/HomePage/index.jsx'
// import Hero from './components/Hero/index.jsx'
// import Menu from './components/Menu/index.jsx'
// import Experience from './components/Experience/index.jsx'
// import Contact from './components/Contact/index.jsx'
// import Ratings from './components/Ratings/index.jsx'
import CartPage from './components/CartPage/index.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Cart from './components/Cart/index.jsx'
function App() {
  const [cartList, setCartList] = useState([]);
  // const[showCart,setShowCart] = useState(false) 
  return (
    <BrowserRouter>
      <Header cartList={cartList} className="header"/>
    <Routes>
        <Route
          path="/"
          element={<HomePage cartList={cartList} setCartList={setCartList} />}
        />
        <Route path="/cart" element={<CartPage cartList={cartList} />} />
      </Routes>
    </BrowserRouter>
  // <div>
  //   <Header 
  //       cartList={cartList} 
  //       toggleCart={() => setShowCart(prev => !prev)} 
  //   />
  //   <Hero/>
  //   {showCart ? (
  //       <Cart cartList={cartList} />
  //     ) : (
  //       <Menu cartList={cartList} setCartList={setCartList} />
  //     )}
  //   {/* <Menu cartList={cartList} setCartList={setCartList}/> */}
  //   <Experience/>
  //   <Ratings/>
  //   <Contact/>
  //   </div>
  )
}
export default App