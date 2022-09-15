import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <div className={styles.footerBlock}>
            <span className={styles.footerBlockPrefix}>Usernames for</span>
            <a
              className={styles.tonLogo}
              href="https://ton.org"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <circle cx="14" cy="14" r="14" fill="#08C"/>
                  <path d="m19.575 11.737-4.992 8.561a.703.703 0 0 1-1.219-.006l-4.884-8.57a1.662 1.662 0 0 1 1.444-2.484h8.215a1.662 1.662 0 0 1 1.436 2.499Z" fill="#fff"/>
                  <path d="M14.607 17.836v-7.352h3.505c.345 0 .56.375.387.673l-3.892 6.679ZM13.425 17.836v-7.352H9.92a.448.448 0 0 0-.386.673l3.89 6.679Z" fill="#08C"/>
              </svg>
              <span>TON</span>
            </a>
          </div>

          <div className={styles.footerBlock}>
            <span className={styles.footerBlockPrefix}>Short domains for TON wallet</span>
            <a
              className={styles.bot}
              href="https://t.me/sendTON_to_bot"
              target="_blank"
              rel="noreferrer"
            >
              @send_ton
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;