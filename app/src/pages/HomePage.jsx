import AboutUs from "../components/AboutUs/AboutUs";
import Navbar from "../components/Commons/Navbar/Navbar";
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
      <Testimonials />
      <Footer />
    </>
  );
}

export default HomePage;
