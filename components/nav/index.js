import styles from './index.module.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { BsPatchCheckFill } from "react-icons/bs";
import { useState, useContext, useEffect } from 'react';
import { ScrollContext } from '../../helpers/scroll-observer';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const [is_hero, setIsHero] = useState(false);
  const scrollY = useContext(ScrollContext);

  const inView = (e) => {
    const el = document.getElementById(e);
    const rect = el.getBoundingClientRect();
    const percentVisible = 30;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return !(
      Math.floor(100 - ((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100) < percentVisible ||
      Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
    );
  };

  useEffect(() => {
    const heroHeight = document.getElementById('hero').clientHeight;

    setIsHero(scrollY.scrollY > heroHeight - 200);

    ['about', 'experience', 'portfolio', 'contact'].forEach((e) => {
      if (inView(e)) setActiveNav('#' + e);
    });
  }, [scrollY]);

  return (
    <nav className={`${styles.nav} ${is_hero ? styles.nav__bar_active : ''}`}>
      <a href='#' className={activeNav === '#' ? styles.nav__active : ''} onClick={() => setActiveNav('#')}>
        <AiOutlineHome />
      </a>
      <a
        href='#about'
        className={activeNav === '#about' ? styles.nav__active : ''}
        onClick={() => setActiveNav('#about')}>
        <AiOutlineUser />
      </a>
      <a
        href='#experience'
        className={activeNav === '#experience' ? styles.nav__active : ''}
        onClick={() => setActiveNav('#experience')}>
        <BsPatchCheckFill />
      </a>
      <a
        href='#portfolio'
        className={activeNav === '#portfolio' ? styles.nav__active : ''}
        onClick={() => setActiveNav('#portfolio')}>
        <RiServiceLine />
      </a>
      <a
        href='#contact'
        className={activeNav === '#contact' ? styles.nav__active : ''}
        onClick={() => setActiveNav('#contact')}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
