import React from 'react';
import Link from 'next/link';
import ThemeSwitcher from '../ThemeSwitcher';
import SignUpButton from '../SignUpButton';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <div className={styles.switchesContainer}>
            <button disabled aria-label="English">EN</button>
            <nav>
              <Link href='/about'>
                <a>About</a>
              </Link>
            </nav>
          </div>

          <div className={styles.userInfo}>
            <SignUpButton />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;