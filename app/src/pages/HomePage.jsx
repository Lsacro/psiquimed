import AboutUs from "../components/AboutUs/AboutUs";
import Navbar from "../components/Commons/Navbar/Navbar";
import Wassap from "../components/Commons/WhatsappButton/Wassap";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Mapa from "../components/Mapa/Mapa";
import OurServices from "../components/Our services/OurServices";
import OurTeam from "../components/OurTeam/OurTeam";

function HomePage() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutUs />
      <OurTeam />
      <OurServices />
      <Mapa />
      <Footer />
      <Wassap />
    </>
  );
}

export default HomePage;
