import AboutUs from "../components/AboutUs/AboutUs";
import Navbar from "../components/Commons/Navbar";
import Home from "../components/Home/Home";
import OurTeam from "../components/OurTeam/OurTeam";

function HomePage() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutUs />
      <OurTeam />
    </>
  );
}

export default HomePage;
