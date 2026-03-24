import Hero from "../Hero";
import Menu from "../Menu";
import Experience from "../Experience";
import Ratings from "../Ratings";
import Contact from "../Contact";
import Gallery from "../Gallery";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const HomePage = ({ cartList, setCartList }) => {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollToId) {
        // Delay scroll to ensure element is rendered
        setTimeout(() => {
            const section = document.getElementById(location.state.scrollToId);
            section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        }
    }, [location.state]);
  return (
    <div id="home">
      <Hero />
      <Menu cartList={cartList} setCartList={setCartList} />
      <Experience />
      <Ratings />
      <Gallery/>
      <Contact />
    </div>
  );
};

export default HomePage;