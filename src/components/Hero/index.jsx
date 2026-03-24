import './index.css'

const Hero = () => {
  const scrollToMenu=(id)=>{
    let section=document.getElementById(id)
    section.scrollIntoView({behavior:"auto"})
  }
  return (
    <section className="hero-section" id="home">

      <div className="hero-content">
        <span className="hero-subtitle">
          Authentic Indian Cuisine
        </span>

        <h1 className="hero-title">
          Experience the <span className="highlight">Flavours</span> of India
        </h1>

        <p className="hero-description">
          Journey through the rich tapestry of Indian cuisine, where every dish tells a story of tradition, spice, and passion.
        </p>

        <div className="hero-actions">
          <button className="btn primary-btn" onClick={()=>scrollToMenu("menu")}>Explore Menu</button>
          <button className="btn secondary-btn">Order Now</button>
        </div>
      </div>

      <div className="hero-img-container">
        <img
          src="https://img.freepik.com/premium-photo/tempting-food-photography-showcasing-diverse-array-global-cuisines-appetizing-food-photography-highlighting-variety-global-culinary-delights_507704-10172.jpg"
          alt="Delicious food"
          className="hero-image"
        />
      </div>

    </section>
  )
}

export default Hero