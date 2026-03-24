import './index.css'
import RatingsCard from '../RatingsCard';
const reviews = [
  {
    id:1,
    name: "Priya Sharma",
    rating: 5,
    text: "The butter chicken here is the best I've ever tasted! The ambiance is warm and inviting. A must-visit for anyone who loves authentic Indian food.",
  },
  {
    id:2,
    name: "James Mitchell",
    rating: 5,
    text: "Absolutely stunning experience. The biryani was perfectly spiced and the staff made us feel right at home. We'll be back for sure!",
  },
  {
    id:3,
    name: "Anita Desai",
    rating: 4,
    text: "A wonderful blend of traditional and modern Indian cuisine. The paneer tikka was heavenly and the desserts were divine.",
  },
  {
    id:4,
    name: "Rahul Verma",
    rating: 5,
    text: "Loved every bite! The flavors were rich and authentic. The naan was soft and perfectly baked.",
  },
  {
    id:5,
    name: "Sophia Williams",
    rating: 4,
    text: "Great place for Indian food lovers. The curries were flavorful and the service was quick and friendly.",
  },
  {
    id:6,
    name: "Arjun Reddy",
    rating: 5,
    text: "The tandoori dishes are amazing! You can really taste the traditional spices. Highly recommended.",
  },
  {
    id:7,
    name: "Emily Johnson",
    rating: 4,
    text: "Beautiful ambiance and delicious food. The mango lassi was refreshing and perfectly sweet.",
  },
  {
    id:8,
    name: "Kiran Kumar",
    rating: 5,
    text: "Authentic taste just like homemade food. The thali was well-balanced and very satisfying.",
  },
  {
    id:9,
    name: "David Brown",
    rating: 4,
    text: "Nice variety of dishes and great presentation. The staff were polite and attentive.",
  },
  {
    id:10,
    name: "Neha Gupta",
    rating: 5,
    text: "Amazing experience! The desserts were the highlight for me. Will definitely visit again.",
  }
];

const Ratings=()=>{
    return(
        <div className="reviews-container">
            {reviews.map(each => (
                <RatingsCard key={each.id} reviews={each} />
            ))}
        </div>
    )
}
export default Ratings