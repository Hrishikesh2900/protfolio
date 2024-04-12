import React, { useEffect, useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleDownload = (e) => {
    const resumeUrl = 'https://drive.google.com/uc?export=download&id=1IepMTV8P5rmeqYnmd-fRbhge3aCHmrOL';
    e.preventDefault();
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'your_resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 830); 
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>
        Protfolio
      </a>
      <div className={styles.menu}>
        {isMobile && <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          onClick={() => setMenuOpen(!menuOpen)}
          alt="menu-btn"
        />}
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="/" onClick={handleDownload}>
              Resume
            </a>{" "}
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
