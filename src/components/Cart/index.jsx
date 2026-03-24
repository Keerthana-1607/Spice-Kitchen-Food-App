import './index.css'
const Cart = ({ cartList }) => {
    const totalAmount = cartList.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
    )
    return (
        <div className="cart-container">
            <h2>Your Cart Items</h2>

            {cartList.map(item => (
                <div className="cart-item" key={item.id}>

                    <img src={item.image} className="cart-img" />

                    <div className="cart-details">
                        <p className="cart-name">{item.dishName}</p>
                        <p>Qty: {item.qty}</p>
                        <p>
                          {item.currency} {item.price * item.qty}
                        </p>
                    </div>
                    

                </div>
            ))}
            <div className="cart-total">
                <p>Total Amount: <span>{cartList[0]?.currency}{totalAmount}</span></p>
            </div>

        </div>
    )
}
export default Cart