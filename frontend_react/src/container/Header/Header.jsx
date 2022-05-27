import { motion } from "framer-motion";
import AppWrap from "../../components/wrapper/AppWrap";

import { images } from "../../constants";
import "./Header.scss";

const Header = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: { duration: 1, ease: "easeInOut" },
    },
  };
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Yudhis</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg"></img>
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.circle}
          alt="profile_circle"
        />
      </motion.div>
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circle"
      >
        {[images.flutter, images.redux, images.sass].map((item) => (
          <div className="circle-cmp app__flex" key={`circle-${item}`}>
            <img src={item} alt="circle"></img>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
