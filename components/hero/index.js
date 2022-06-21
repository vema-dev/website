import React, { useRef, useContext } from 'react';
import styles from './index.module.css';
import Image from 'next/image';
import { ScrollContext } from '../../helpers/scroll-observer';

const Header = () => {
  const refContainer = useRef(null);
  const scrollY = useContext(ScrollContext);
  let progress = 0;
  const { current: elContainer } = refContainer;

  if (elContainer) {
    progress = Math.min(1, scrollY.scrollY / elContainer.clientHeight);
  }
  return (
    <section
      id='hero'
      className={styles.hero__section}
      ref={refContainer}
      style={{
        transform: `translateY(-${progress * 25}vh)`,
      }}>
      <video className={styles.hero__video} autoPlay loop muted playsInline>
        <source src='/assets/website-background.mp4' type='video/mp4' />
      </video>
      <div className={`container ${styles['hero__section-container']}`}>
        <div className={styles.hero_logo_wrapper}>
          <Image src='/assets/logo_vema.png' layout='fill' objectFit='contain' alt='Vema logo' />
        </div>
        <h3 className={styles.hero__subtitle}>simple | flexible | effective</h3>
      </div>
    </section>
  );
};

export default Header;
