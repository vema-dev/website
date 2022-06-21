import styles from './index.module.css';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import { BsPatchCheckFill } from 'react-icons/bs';

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>
      <div className={`container ${styles.about__container}`}>
        <div className={styles.about__content}>
          <div className={styles.about__cards}>
            <article className={styles.about__card}>
              <BsPatchCheckFill className={styles.about__icon} />
              <h5>Experience</h5>
              <small>20+ years working</small>
            </article>
            <article className={styles.about__card}>
              <FiUsers className={styles.about__icon} />
              <h5>Clients</h5>
              <small>100+ wordwide</small>
            </article>
            <article className={styles.about__card}>
              <VscFolderLibrary className={styles.about__icon} />
              <h5>Projects</h5>
              <small>200+ completed projects</small>
            </article>
          </div>
          <h3>Hi 👋</h3>
          <p>I&apos;m Mariusz. Welcome on my website 😉</p>
          <p>
            I have been interested in programming since I was a child. In the beginning, I created a code on pieces of
            paper because I did not have a computer. Later, when I got Atari at the age of 11, I was able to finally try
            out my ideas for software and games.
          </p>
          <p>
            Many years have passed since then and programming is still my passion. I like to challenge myself, learn
            about modern technologies and solve problems. Various projects appeared in my career - I created mobile
            applications, CRM systems, comprehensive platforms from scratch. I dealt with both frontend and backend, I
            got to know many different environments and frameworks. Currently, however, I&apos;m focusing on frontend
            and React.
          </p>
          <p>
            Privately, I&apos;m a fan of cycling, camping and generally being outdoors. In the past, I was involved in
            film editing and designing and programming light and music shows.
          </p>
          <p>
            If you have a question for me or think I could help you with anything, please feel free to leave a message
            🙂
          </p>
          <a href='#contact' className='btn btn-primary'>
            contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
