import styles from './index.module.css';

const data = [
  {
    id: 1,
    //image: IMG1,
    title: 'How i work',
    service: 'Youtube',
    serviceUrl: 'https://youtu.be/q_k4fHreVVk',
    liveUrl: null,
  },
  {
    id: 2,
    //image: IMG1,
    title: 'Weather App',
    service: 'Github',
    serviceUrl: 'https://github.com/vema-dev/weather',
    liveUrl: null,
  },
  {
    id: 3,
    //image: IMG1,
    title: 'Dev Toolkit',
    service: 'Github',
    serviceUrl: 'https://github.com/vema-dev/toolkit',
    liveUrl: 'https://vema-dev.github.io/toolkit/www/',
  },
];
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>My demos</h2>
      <div className={`container ${styles.folio__container}`}>
        {data.map(({ id, title, service, serviceUrl, liveUrl }) => {
          return (
            <article className={styles.folio__item} key={id}>
              <div className={styles['folio__item-image']}>
                {/* <Image className={styles['folio__item-image']} layout='responsive' src={image} /> */}
              </div>
              <h3>{title}</h3>
              <div className={styles['folio__item-cta']}>
                {serviceUrl && (
                  <a href={serviceUrl} className='btn' target='_blank' rel='noreferrer'>
                    {service}
                  </a>
                )}
                {liveUrl && (
                  <a href={liveUrl} className='btn btn-primary' target='_blank' rel='noreferrer'>
                    Live demo
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
