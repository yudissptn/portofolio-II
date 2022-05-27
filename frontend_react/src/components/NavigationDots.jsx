import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "testimmonials", "contact"].map(
        (item, i) => (
          <a
            className="app__navigation-dot"
            href={`#${item}`}
            // onClick={() => setToggle(false)}
            key={item + i}
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
          >
            {""}
          </a>
        )
      )}
    </div>
  );
};

export default NavigationDots;
