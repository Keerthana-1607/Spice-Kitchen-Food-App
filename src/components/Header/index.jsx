import './index.css'
import { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import {useNavigate,useLocation} from 'react-router-dom'

const Header =({cartList=[]})=>{
    const [showPopup, setShowPopup] = useState(false)
    const [isBooked, setIsBooked] = useState(false)
    const navigate = useNavigate()
    const location=useLocation()
    const submitBooking = (e) => {
        e.preventDefault()
        setIsBooked(true)
    }   
    const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      // If not on home page, go to "/"
      navigate("/", { state: { scrollToId: id } });
    } else {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };
    const totalItems = cartList.reduce((acc, item) => acc + item.qty, 0)
    return(
        <div>
        <header className="header-bg">
            
                <h1 className='logo-name'>Spice <span>Kitchen</span></h1>
                <nav className='nav-links'>
                    <p onClick={() => scrollToSection("home")}>Home</p>
                    <p onClick={() => scrollToSection("menu")}>Menu</p>
                    <p>About</p>
                    <p onClick={() => scrollToSection("experience")}>Experience</p>
                    <p onClick={() => scrollToSection("contact")}>Contact</p>
                                        
                </nav>
                <div className="header-right">
                    <button className='book-table-btn' onClick={() => setShowPopup(true)}>
                        Book a Table
                    </button>

                    {/* Cart Icon */}
                    <div className="cart-icon" onClick={() => navigate("/cart")}>
                        <FaShoppingCart size={24} />
                        {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
                    </div>
                </div>
            
        </header>
        {showPopup && (
                <div className="popup">

                    <div className="popup-card">

                    {!isBooked ? (
                        <>
                        <h2>Book a Table</h2>

                        <form onSubmit={submitBooking}>
                            <input type="text" placeholder="Your Name" required />
                            <input type="tel" placeholder="Phone Number" required />
                            <input type="date" required />
                            <input type="time" required />

                            <select required>
                            <option value="">No. of People</option>
                            <option>2 People</option>
                            <option>3 People</option>
                            <option>4 People</option>
                            <option>5 People</option>
                            <option>6+ People</option>
                            </select>

                            <button type="submit">Confirm Booking</button>
                        </form>
                        </>
                    ) : (
                        <div className="success-message">
                        <h2>✅ Your table booked successfully</h2>
                        <p>We are excited to serve you</p>

                        <button onClick={() => {
                            setShowPopup(false)
                            setIsBooked(false)
                        }}>
                            Done
                        </button>
                        </div>
                    )}

                </div>

            </div>
        
        )}
        </div>
    
    )
}
export default Header