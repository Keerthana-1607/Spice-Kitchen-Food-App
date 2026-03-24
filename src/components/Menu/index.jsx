import { useEffect,useState } from 'react'
import Items from '../Items'
// import Cart from '../Cart'
import './index.css'
const Menu=({cartList=[],setCartList})=>{
    const [menuList, setMenuList] = useState([])
    // const [cartList, setCartList] = useState([])
    useEffect(()=>{
        const itemsData=async()=>{
            let apiUrl="https://nxtwave-assessments-backend-nxtwave-media-static.s3-ap-south-1.amazonaws.com/topin_beta/media/content_loading/uploads/5ba7588b-5c53-4aef-a473-b5eaf2e6dca4_food.json"
            let response= await fetch(apiUrl)
            let responseData=await response.json()
            console.log(responseData)
            let formattedData=responseData.map(item=>({
                id:item.id,
                image:item.image,
                price:item.price,
                currency:item.currency,
                dishName:item.dish_name
        }))
        setMenuList(formattedData)

        }
        itemsData()

    },[])

    const addToCart = (item) => {
    const existingItem = cartList.find(each => each.id === item.id)

    if (existingItem) {
        const updatedCart = cartList.map(each =>
            each.id === item.id
                ? { ...each, qty: each.qty + 1 }
                : each
        )
        setCartList(updatedCart)
    } 
    else {
        setCartList([...cartList, { ...item, qty: 1 }])
    }
    }
    const decreaseCartQty = (id) => {
        const existingItem = cartList.find(each => each.id === id)
        if (!existingItem) return
        if (existingItem.qty === 1) {
            // Remove item when qty becomes 0
            setCartList(cartList.filter(each => each.id !== id))
        } else {
            const updatedCart = cartList.map(each =>
                each.id === id ? { ...each, qty: each.qty - 1 } : each
            )
            setCartList(updatedCart)
        }
    }
    return(
        <section className="menu-section" id="menu">
            <div>
            <div>
                <span>Our Menu</span>
                <h2>Featured Dishes</h2>
                <p>Handpicked favourites from our kitchen, crafted with the finest spices and freshest ingredients.</p>
            </div>
            <div className="menu-list">
                {menuList.map(eachItem => (
                    <Items key={eachItem.id} itemDetails={eachItem}  addToCart={addToCart} decreaseCartQty={decreaseCartQty} cartList={cartList}/>
                ))}
            </div>
            {/* <Cart cartList={cartList}/>        */}


        </div>

    </section>
    )
}
export default Menu