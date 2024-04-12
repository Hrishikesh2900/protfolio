import React from "react";
import { getImageUrl } from "../../utils";
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to react out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="email Icon" />
          <a href="mailto:hrishikesh.patil290@gmail.com">hrishikesh.patil2900@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon" />
          <a href="https://www.linkedin.com/in/hrishikesh-patil-17b961188/">linkedin.com/Hrishikesh</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
          <a href="https://github.com/Hrishikesh2900">github.com/Hrishikesh</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
