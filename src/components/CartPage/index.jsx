import Cart from '../Cart'

const CartPage = ({ cartList }) => {
  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <Cart cartList={cartList} />
    </div>
  )
}

export default CartPage