import { Dishes } from "./sections/Dishes";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Mission from "./sections/Mission";
import Expertise from "./sections/Expertise";
import Review from "./sections/Review";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <main className="overflow-hidden font-poppins text-neutral-200 antialiased">
      <Hero />
      <Navbar />
      <Dishes />
      <About />
      <Mission />
      <Expertise />
      <Review />
      <Contact />
      <Footer />
    </main>
  );
}
