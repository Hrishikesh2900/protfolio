import React from 'react';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Hrishikesh</h1>
            <p className={styles.description}>I am a Front-End Developer with 3 years of Experience using React. React out to me if you would like to learn more</p>
            <a className={styles.contactBtn} href="mailto:hrishikesh.patil2900@gmail.com">Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="hero Image of me" className={styles.herImg} />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero