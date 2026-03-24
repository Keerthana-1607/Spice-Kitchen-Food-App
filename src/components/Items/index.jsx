import './index.css'
import { useState } from 'react'
const Items = (props)=>{
    const{itemDetails,addToCart,decreaseCartQty, cartList=[]}=props
    const{id,image,currency,price,dishName}=itemDetails
    // const [qty, setQty] = useState(0)

    // Prevent undefined error
    const itemInCart = cartList.find(each => each.id === id) || null
    const qty = itemInCart ? itemInCart.qty : 0
    // const increaseQty = () => {
    //     setQty(prev => prev + 1)
    // }

    // const decreaseQty = () => {
    //     if (qty > 1) {
    //         setQty(prev => prev - 1)
    //     } else {
    //         setQty(0)   
    //     }
    // }
    return(
        <div className="menu-card">
            <img src={image} alt={dishName} className="menu-image" />

            <div className="menu-content">
                <h3 className="dish-name">{dishName}</h3>

                <p className="price">
                    <span>{currency}</span> {price}
                </p>

                {qty === 0 ? (
                    <button className="order-btn" onClick={()=>addToCart(itemDetails)}>
                        Add to Cart
                    </button>
                ) : (
                    <div className="qty-container">
                        <button onClick={() => decreaseCartQty(id)}>-</button>
                        <p>{qty}</p>
                        <button onClick={() => addToCart(itemDetails)}>+</button>
                    </div>
                    // <div className="qty-container">
                    //     <button onClick={decreaseQty}>-</button>
                    //     <p>{qty}</p>
                    //     <button onClick={increaseQty}>+</button>
                    // </div>
                )}
            </div>
        </div>

    )
}
export default Items