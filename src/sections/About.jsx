import { ABOUT } from "../constants";
import about from "../assets/about.jpeg";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section className="container mx-auto mb-8 " id="about">
      <h2 className="mb-8 text-center text-3xl lg:text-4xl">About Us</h2>
      <div className="flex flex-wrap justify-between">
        <div className="w-full p-4 lg:w-[49%]">
          <img
            src={about}
            alt="about-image"
            className="rounded-3xl lg:-rotate-3"
          />
        </div>
        <div className=" w-full px-2 lg:w-[49%]">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl tracking-tighter lg:text-6xl"
          >
            {ABOUT.header}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 mt-1 h-2 w-36 bg-rose-300 lg:-rotate-3"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="m-8 text-2xl leading-relaxed tracking-tight"
          >
            {ABOUT.content}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
