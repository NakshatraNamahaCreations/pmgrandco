import Header from "./Components/Header"
import HomeSlider from "./Components/HomeSlider"
import AboutSection from "./Components/AboutSection"
import ServiceSection from "./Components/ServiceSection"
import HomePage from "./Home/HomePage"
import AbtSection from "./Home/AbtSection"
import ServicePortfolio from "./Home/ServicePortfolio"
import ProcessSection from "./Home/ProcessSection"
import CoreExpertise from "./Home/CoreExpertise"
import ContactForm from "./Home/ContactForm"
import Footer from "./Home/Footer"
import HeroSlider from "./Home/HeroSlider"

export default function Home() {
  return (
  <>
 {/*} <Header/>
  <HomeSlider/>
  <AboutSection/>
  <ServiceSection/>*/}
  <HomePage/>
  <HeroSlider height={400} interval={5000}/>
  <AbtSection/>
  <ServicePortfolio/>
  <ProcessSection/>
 {/*} <CoreExpertise/>*/}
  <ContactForm/>
  <Footer/>
  </>
  );
}
