import "../assets/css/styles.css";
import About from "../component/About";
import CallToAction from "../component/CallToAction";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Header from "../component/Header";
import NavBar from "../component/NavBar";
import Portfolio from "../component/Portfolio";
import Services from "../component/Services";
export default function Homepage() {
  return (
    <div>
      {/* Navigation*/}
      <NavBar />
      {/* Masthead*/}
      <Header />

      {/* About*/}
      <About />
      {/* Services*/}
      <Services />
      {/* Portfolio*/}
      <Portfolio />
      {/* Call to action*/}
      <CallToAction />
      {/* Contact*/}
      <Contact />
      {/* Footer*/}
      <Footer />
    </div>
  );
}
