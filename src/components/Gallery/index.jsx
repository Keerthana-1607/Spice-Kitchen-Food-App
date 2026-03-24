import './index.css'

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=400&fit=crop", alt: "Indian thali" },
  { src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop", alt: "Samosa platter" },
  { src: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400&h=400&fit=crop", alt: "Naan bread" },
  { src: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=400&fit=crop", alt: "Desserts" },
  { src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=400&fit=crop", alt: "Grilled dishes" },
  { src: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=400&fit=crop", alt: "Curry bowl" },
];

const Gallery=()=>{
    return(
        <section className='gallery-section'>
            <div>
                <span>Gallery</span>
                <h2>From Our Kitchen</h2>
                <p>A visual feast of flavours, colours, and culinary artistry.</p>
                <div>

                </div>
            </div>
            <div>
                {galleryImages.map(eachImage=>(
                    <img src={eachImage.src} alt={eachImage.alt}/>
                ))}
            </div>
        </section>
    )
}
export default Gallery