import { useState } from 'react'

import './App.css'
import Header from './components/Header/index.jsx'
import HomePage from './components/HomePage/index.jsx'
// import CartPage from './components/CartPage/index.jsx'
import Cart from './components/Cart/index.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  const [cartList, setCartList] = useState([]);
  return (
    <BrowserRouter>
      <Header cartList={cartList} className="header"/>
    <Routes>
        <Route
          path="/"
          element={<HomePage cartList={cartList} setCartList={setCartList} />}
        />
        <Route path="/cart" element={<Cart cartList={cartList} clearCart={() => setCartList([])} />} />
      </Routes>
    </BrowserRouter>
  
  )
}
export default App