import Featured from "../../Components/Featured/Featured";
import FeaturedProperties from "../../Components/FeaturedProperties/FeaturedProperties";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import MailList from "../../Components/MailList/MailList";
import Navbar from "../../Components/Navbar/Navbar";
import PropertyList from "../../Components/PropertyList/PropertyList";
import "./Home.css";

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homecontainer">
           <Featured/>
           <h1 className="hometitle">Browse By Property Type</h1>
           <PropertyList/>
           <h1 className="hometitle">Homes Guests Love</h1>
           <FeaturedProperties/>
           <MailList/>
           <Footer/>
        </div>
    </div>
  )
}

export default Home