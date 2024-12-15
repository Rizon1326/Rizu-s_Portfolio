import React from "react";
import logo from "./images/llg1.png";
import bannerImg from "./images/rizurisshu_1.png";
//import bannerImg2 from "./images/bannerImg2.png";
import projectOne from "./images/projects/projectOne.jpg";
import projectTwo from "./images/projects/projectTwo.jpg";
import projectThree from "./images/projects/projectThree.jpeg";
import testimonialOne from "./images/testmonial/testimonialOne.png";
import testimonialTwo from "./images/testmonial/testimonialTwo.png";
import quote from "./images/testmonial/quote.png";
import contactImg from "./images/contact/contactImg.png";
import AI_ML1 from "./images/projects/AI_ML1.png";
import AI_ML from "./images/projects/AI_ML.jpeg";
import mern from "./images/projects/mern.png";
import mern1 from "./images/projects/mern1.jpeg";
import ui_ux from "./images/projects/ui_ux.png";
import ui_ux1 from "./images/projects/ui_ux1.jpeg";

export {
  logo,
  bannerImg,
  projectOne,
  projectTwo,
  projectThree,
  testimonialOne,
  testimonialTwo,
  quote,
  contactImg,
  AI_ML1,
  AI_ML,
  mern,
  mern1,
  ui_ux,
  ui_ux1,

};

const App = () => {
  return (
    <div>
      <header style={styles.header}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </header>
    </div>
  );
};

// Inline CSS for logo and header
const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#f8f9fa",
  },
  logo: {
    width: "50px", // Decreased size of the logo
    height: "auto", // Maintain aspect ratio
  },
};

export default App;

