import AboutUs from "../components/AboutUs/AboutUs";
import BoxTree from "../components/Commons/BoxTree/BoxTree";
import Navbar from "../components/Commons/Navbar/Navbar";
import Wassap from "../components/Commons/WhatsappButton/Wassap";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import OurServices from "../components/Our services/OurServices";
import OurTeam from "../components/OurTeam/OurTeam";
import Testimonials from "../components/Testimonials/Testimonials";

function HomePage() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutUs />
      <OurTeam />
      <OurServices />
      <BoxTree />
      <Footer />
      <Wassap />
    </>
  );
}

export default HomePage;
