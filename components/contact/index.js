import styles from './index.module.css';
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { GrDocumentPdf } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import Alert from './Alert';

const Contact = () => {
  const form = useRef();
  const [alertBox, setAlertBox] = useState({ text: '', active: false });

  const showAlert = (text) => {
    setAlertBox((state) => {
      return {
        text: text,
        active: !state.active,
      };
    });
    setTimeout(() => {
      setAlertBox({ text: '', active: false });
    }, 4000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    document.getElementById('submitForm').disabled = true;

    emailjs
      .sendForm('service_sadpltr', 'template_uux67ol', form.current, '1Fs8triwynLJyzF0P')
      .then(
        (result) => {
          e.target.reset();
          showAlert('Thanks, message sended.');
        },
        (error) => {
          showAlert('Error, try agin.');
          console.error(error);
        }
      )
      .finally(() => (document.getElementById('submitForm').disabled = false));
  };

  return (
    <section id='contact'>
      <Alert alert={alertBox} />
      <h2>Contact me</h2>
      <div className={`container ${styles.contact__container}`}>
        <div className={styles.contact__options}>
          <article className={styles.contact__option}>
            <IconContext.Provider value={{ className: styles.contact__option_icon }}>
              <div>
                <GrDocumentPdf />
              </div>
            </IconContext.Provider>
            <h4>About me</h4>
            <a href='/assets/vema_dev.pdf' className='btn' download={true}>
              download
            </a>
          </article>
        </div>
        <form className={styles.contact__form} ref={form} onSubmit={sendEmail}>
          <input className={styles.contact__inputs} type='text' name='name' placeholder='Name' required />
          <input className={styles.contact__inputs} type='email' name='email' placeholder='E-mail' required />
          <textarea
            className={styles.contact__inputs}
            name='message'
            id=''
            rows='7'
            placeholder='Write something...'></textarea>
          <button type='submit' className='btn btn-primary' id='submitForm'>
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
