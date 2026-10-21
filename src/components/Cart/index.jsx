
import './index.css'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Cart = ({ cartList,clearCart}) => {
    const navigate=useNavigate()
    const [checkout, setCheckout] = useState(false)
    const [payAmount, setPayAmount] = useState(false)
    const [address, setAddress] = useState({
        fullName: '',
        mobile: '',
        houseAddress: '',
        landmark: '',
        city: '',
        pinCode: ''
    })

    const totalCount = cartList.reduce(
        (total, item) => total + item.qty,
        0
    )

    const totalAmount = cartList.reduce(
        (total, item) => total + item.price * item.qty,
        0
    )

    const currency = cartList.length > 0
        ? cartList[0].currency
        : '£'

    const handleAddressChange = (e) => {
        const { name, value } = e.target

        setAddress(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handlePay = (e) => {
        e.preventDefault()
        setCheckout(false)
        setPayAmount(true)
        clearCart()
    }

    return (
        <div className="cart-container">
            <h2>Your Cart Items</h2>

            {cartList.length > 0 ? (
                <>
                    <h3>Total Items: {totalCount}</h3>

                    {cartList.map(item => (
                        <div className="cart-item" key={item.id}>
                            <img
                                src={item.image}
                                className="cart-img"
                                alt={item.dishName}
                            />

                            <div className="cart-details">
                                <p className="cart-name">
                                    {item.dishName}
                                </p>

                                <p>Qty: {item.qty}</p>

                                <p>
                                    {item.currency}{' '}
                                    {item.price * item.qty}
                                </p>
                            </div>
                        </div>
                    ))}

                    <div className="cart-total">
                        <p>
                            Total Amount: {currency}{totalAmount}
                        </p>
                    </div>

                    <button
                        className="checkout-btn"
                        onClick={() => setCheckout(true)}
                    >
                        Proceed to Checkout
                    </button>
                </>
            ) : (
                <h3>No Items in Your Cart</h3>
            )}

            {/* Background overlay and right-side checkout drawer */}
            {checkout && cartList.length > 0 && (
                <div
                    className="checkout-overlay"
                    onClick={() => setCheckout(false)}
                >
                    <div
                        className="checkout-drawer"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="drawer-header">
                            <div>
                                <p className="checkout-eyebrow">
                                    ALMOST THERE!
                                </p>
                                <h2>Checkout</h2>
                                <p>Where should we deliver your food?</p>
                            </div>

                            <button
                                type="button"
                                className="drawer-close"
                                onClick={() => setCheckout(false)}
                                aria-label="Close checkout"
                            >
                                &times;
                            </button>
                        </div>

                        <div className="delivery-banner">
                            <span className="delivery-icon">📍</span>
                            <div>
                                <strong>Delivery address</strong>
                                <p>
                                    Enter your details for a smooth delivery.
                                </p>
                            </div>
                        </div>

                        <form onSubmit={handlePay}>
                            <div className="address-fields">
                                <label>
                                    Full name *
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Enter your full name"
                                        value={address.fullName}
                                        onChange={handleAddressChange}
                                        required
                                    />
                                </label>

                                <label>
                                    Mobile number *
                                    <input
                                        type="tel"
                                        name="mobile"
                                        placeholder="10-digit mobile number"
                                        value={address.mobile}
                                        onChange={handleAddressChange}
                                        pattern="[0-9]{10}"
                                        maxLength={10}
                                        inputMode="numeric"
                                        title="Enter a valid 10-digit mobile number"
                                        required
                                    />
                                </label>

                                <label>
                                    House / Flat / Street address *
                                    <textarea
                                        name="houseAddress"
                                        placeholder="House number, street, area"
                                        value={address.houseAddress}
                                        onChange={handleAddressChange}
                                        rows={3}
                                        required
                                    />
                                </label>

                                <label>
                                    Landmark (optional)
                                    <input
                                        type="text"
                                        name="landmark"
                                        placeholder="Near a landmark"
                                        value={address.landmark}
                                        onChange={handleAddressChange}
                                    />
                                </label>

                                <div className="address-row">
                                    <label>
                                        City *
                                        <input
                                            type="text"
                                            name="city"
                                            placeholder="City"
                                            value={address.city}
                                            onChange={handleAddressChange}
                                            required
                                        />
                                    </label>

                                    <label>
                                        PIN code *
                                        <input
                                            type="text"
                                            name="pinCode"
                                            placeholder="6-digit PIN"
                                            value={address.pinCode}
                                            onChange={handleAddressChange}
                                            pattern="[0-9]{6}"
                                            maxLength={6}
                                            inputMode="numeric"
                                            title="Enter a valid 6-digit PIN code"
                                            required
                                        />
                                    </label>
                                </div>
                            </div>

                            <div className="drawer-order-summary">
                                <h3>Bill Summary</h3>

                                <div className="summary-line">
                                    <span>Items ({totalCount})</span>
                                    <span>
                                        {currency}{totalAmount.toFixed(2)}
                                    </span>
                                </div>

                                <div className="summary-line">
                                    <span>Delivery fee</span>
                                    <span className="free-delivery">
                                        FREE
                                    </span>
                                </div>

                                <div className="summary-line summary-total">
                                    <strong>To Pay</strong>
                                    <strong>
                                        {currency}{totalAmount.toFixed(2)}
                                    </strong>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="pay-btn"
                            >
                                Place Order · {currency}
                                {totalAmount.toFixed(2)}
                            </button>

                            <p className="secure-note">
                                🔒 Demo checkout · No real payment will be taken
                            </p>
                        </form>
                    </div>
                </div>
            )}

            {/* Order success screen */}
            {payAmount && (
                <div className="success-overlay">
                    <div className="success-card">
                        <button
                            className="success-close"
                            onClick={() => setPayAmount(false)}
                            aria-label="Close confirmation"
                        >
                            &times;
                        </button>

                        <div className="success-icon">✓</div>

                        <h2>Order Placed Successfully!</h2>

                        <p className="success-message">
                            Thank you, {address.fullName}!
                        </p>

                        <p>
                            Your delicious food is on its way to:
                        </p>

                        <div className="success-address">
                            <strong>{address.fullName}</strong>
                            <p>{address.houseAddress}</p>
                            {address.landmark && (
                                <p>Landmark: {address.landmark}</p>
                            )}
                            <p>
                                {address.city} - {address.pinCode}
                            </p>
                            <p>Mobile: {address.mobile}</p>
                        </div>

                        <div className="success-total">
                            Order total
                            <strong>
                                {currency}{totalAmount.toFixed(2)}
                            </strong>
                        </div>

                        <p className="demo-order-note">
                            This is a demo order confirmation.
                        </p>

                        <button
                            className="success-btn"
                            onClick={() => {
                                setPayAmount(false)
                                navigate('/')
                            }}
                        >
                            Continue Browsing
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart
