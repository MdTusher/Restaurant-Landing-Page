import heroVideo from "../assets/hero.mp4";
import heroImg from "../assets/hero.jpeg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <video
          src={heroVideo}
          className="h-full w-full object-cover"
          muted
          loop
          autoPlay
          playsInline
          poster={heroImg}
        ></video>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 50 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="font-roboto bg-slate-700 px-4 rounded-lg text-8xl tracking-widest font-extrabold opacity-70 text-slate-300">
          B R A N D "L O G O"
        </h1>

        <p className="text-slate-200 tracking-wider px-4">Dhaka, bangladesh</p>
      </motion.div>
    </section>
  );
};

export default Hero;
