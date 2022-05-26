import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { images } from "../../constants";
import "./About.scss";

const About = () => {
  const about = [
    {
      title: "Web Development",
      description: "I am a good web developer",
      imgUrl: images.about01,
    },
    {
      title: "Web Design",
      description: "I am a good web design",
      imgUrl: images.about02,
    },
  ];
  return (
    <>
      <h2 className="head-text">
        I Know That <span>Good Design</span>
        <br /> means <span>Good Business</span>{" "}
      </h2>
      <div className="app__profiles">
        {about.map((item, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profiles-item"
            key={about.title + index}
          >
            <img src={item.imgUrl} alt={item.title}></img>
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {item.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
