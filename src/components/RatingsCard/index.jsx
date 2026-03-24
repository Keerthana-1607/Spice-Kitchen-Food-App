import './index.css'

const RatingsCard=(props)=>{
    const{reviews}=props
    const{name,rating,text,id}=reviews
    let initial=name[0].toUpperCase()
    const stars = "★".repeat(rating) + "☆".repeat(5 - rating)
    return(
        <div className="review-card">
            <div className="review-header">
                <div className="avatar">{initial}</div>
                <p className="review-name">{name}</p>
            </div>
            <p className="review-stars">{stars}</p>
            <p className="review-text">{text}</p>
       </div>


    )
}
export default RatingsCard