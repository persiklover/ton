import React, { useEffect, useState } from 'react';
import useMediaQuery from '../../hooks/use-media-query';
import styles from './ThemeSwitcher.module.scss';

export default function ThemeSwitcher() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [theme, setTheme] = useState(prefersDarkMode ? 'dark' : 'light');

  useEffect(() => {
    document.documentElement.className = `${theme}-theme`;
  }, [theme]);

  useEffect(() => {
    setTheme(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      setTheme(theme);
    }
  }, []);

  return (
    <label className={styles.wrapper}>
      <input
        className="visually-hidden"
        type="checkbox"
        checked={theme === 'dark'}
        onChange={e => {
          const theme = e.target.checked ? 'dark' : 'light';
          setTheme(theme);
          localStorage.setItem('theme', theme);
        }}
      />
      <span className={styles.switch} />
    </label>
  );
};