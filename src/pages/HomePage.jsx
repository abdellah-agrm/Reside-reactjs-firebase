import Hero from "./sections/Hero";
import About from "./sections/About";
import Service from "./sections/Service";
import Property from "./sections/Property";
import Blog from "./sections/Blog";
import Cta from "./sections/Cta";
import Footer from "./sections/Footer";
import {AuthChecker, checkEmailVerification} from "../auth/AuthChecker";
import ConfettiAfterSignIn from "../elements/ConfettiAfterSignIn";

export default function HomePage(){
  AuthChecker();
  checkEmailVerification();
  return(
    <section>
      <ConfettiAfterSignIn />
      <Hero />
      <About />
      <Service />
      <Property />
      <Blog />
      <Cta />
      <Footer />
    </section>
  )
  }