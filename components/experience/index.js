import styles from './index.module.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import Progress from './Progress';

const Experience = () => {
  const skills = {
    lang: [
      { id: 1, name: 'HTML', progress: 100 },
      { id: 2, name: 'CSS', progress: 90 },
      { id: 3, name: 'JavaScript', progress: 100 },
      { id: 4, name: 'TypeScript', progress: 100 },
      { id: 5, name: 'Swift', progress: 60 },
      { id: 6, name: 'PHP', progress: 40 },
      { id: 7, name: 'Java', progress: 40 },
    ],
    lib: [
      { id: 1, name: 'React', progress: 100 },
      { id: 1, name: 'React Native', progress: 95 },
      { id: 1, name: 'Redux', progress: 100 },
      { id: 2, name: 'NextJS', progress: 100 },
      { id: 3, name: 'Framework7', progress: 100 },
      { id: 4, name: 'NodeJS', progress: 80 },
      { id: 5, name: 'VUE', progress: 70 },
      { id: 6, name: 'Stripe', progress: 90 },
      { id: 7, name: 'Vonage', progress: 100 },
    ],
    tech: [
      { id: 1, name: 'GIT', progress: 100 },
      { id: 2, name: 'Cloudflare', progress: 100 },
      { id: 3, name: 'AWS', progress: 30 },
      { id: 4, name: 'Linux / Unix', progress: 80 },
      { id: 5, name: 'Mac', progress: 100 },
      { id: 6, name: 'WebSocket', progress: 100 },
      { id: 7, name: 'WebRTC', progress: 100 },
      { id: 8, name: 'REST', progress: 100 },
      { id: 9, name: 'NoSQL', progress: 75 },
      { id: 10, name: 'MySQL', progress: 60 },
      { id: 11, name: 'Serwerless', progress: 80 },
      { id: 12, name: 'DNS', progress: 80 },
      { id: 13, name: 'HLS', progress: 100 },
      { id: 14, name: 'Blackmagic', progress: 100 },
    ],
  };
  return (
    <section id='experience'>
      <h2>My skills</h2>

      <div className={`container ${styles.experience__container}`}>
        <div>
          <h3>Languages</h3>
          <div className={styles.experience__content}>
            {skills.lang.map((s) => (
              <article key={`lang-${s.id}`} className={styles.experience__details}>
                <BsPatchCheckFill className={styles['experience__details-icon']} />
                <div className={styles.experience__details_container}>
                  <h4>{s.name}</h4>
                  <Progress progress={s.progress} />
                </div>
              </article>
            ))}
          </div>
        </div>
        <div>
          <h3>Lib / Frameworks</h3>
          <div className={styles.experience__content}>
            {skills.lib.map((s) => (
              <article key={`lib-${s.id}`} className={styles.experience__details}>
                <BsPatchCheckFill className={styles['experience__details-icon']} />
                <div className={styles.experience__details_container}>
                  <h4>{s.name}</h4>
                  <Progress progress={s.progress} />
                </div>
              </article>
            ))}
          </div>
        </div>
        <div>
          <h3>Tech</h3>
          <div className={styles.experience__content}>
            {skills.tech.map((s) => (
              <article key={`tech-${s.id}`} className={styles.experience__details}>
                <BsPatchCheckFill className={styles['experience__details-icon']} />
                <div className={styles.experience__details_container}>
                  <h4>{s.name}</h4>
                  <Progress progress={s.progress} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
