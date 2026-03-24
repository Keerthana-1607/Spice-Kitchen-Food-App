import './index.css'

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      
      <div className="experience-container">

        {/* LEFT CONTENT */}
        <div className="experience-content">

          <span className="experience-subtitle">Our Story</span>

          <h2 className="experience-title">
            Meet Chef <span>Arjun Kapoor</span>
          </h2>

          <p className="experience-description">
            With over 20 years of culinary mastery, Chef Arjun brings the authentic flavours of India to your plate. Trained in the royal kitchens of Rajasthan and modern culinary institutes of London, his dishes are a perfect blend of tradition and innovation.
          </p>

          <div className="stats-container">

            <div className="stat-item">
              <p className="stat-number">20+</p>
              <p className="stat-label">Years Experience</p>
            </div>

            <div className="stat-item">
              <p className="stat-number">500+</p>
              <p className="stat-label">Recipes Crafted</p>
            </div>

            <div className="stat-item">
              <p className="stat-number">15</p>
              <p className="stat-label">Awards Won</p>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&h=600&fit=crop"
          alt="Chef Arjun Kapoor"
          className="experience-image"
        />

      </div>
    </section>
  )
}

export default Experience