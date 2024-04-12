import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Front-End Developer</h3>
              <p>
                Experienced frontend developer proficient in HTML, CSS,
                JavaScript, and React.js with a demonstrated track record of
                delivering polished, user-centric web solutions. Passionate
                about crafting elegant interfaces and pushing the boundaries of
                web development. Eager collaborator with a keen eye for detail,
                committed to creating exceptional digital experiences that
                captivate and inspire. Let's build something extraordinary
                together.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
