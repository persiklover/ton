/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import useMediaQuery from '../../hooks/use-media-query';
import styles from './About.module.scss';

const About = () => {
  const mobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className={classNames("container", styles.wrapper)}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>About</h1>
        <p className={styles.description}>
          Starting 2020, TON has grown thanks to the tireless efforts of a worldwide decentralized community of crypto enthusiasts, developers, designers, and other professionals. Our community is the key to TON's future, and we'd love for you to join us.
        </p>

        {mobile &&
          <div className={styles.img} style={{ margin: '0 auto' }}>
            <Image
              src="/about.png"
              alt="Mobile App"
              layout="fill"
              quality={100}
              style={{ borderRadius: '1.6rem' }}
            />
          </div>
        }

        <ol className={styles.howto}>
          <li>
            <h3>Request username</h3>
            <p>Claim your username now via our telegram bot or by applying on the website.</p>
          </li>
          <li>
            <h3>Verify via @some_bot</h3>
            <p>Claim your username now via our telegram bot or by applying on the website.</p>
          </li>
          <li>
            <h3>Use it everywhere!</h3>
            <p>Claim your username now via our telegram bot or by applying on the website.</p>
          </li>
          <li>
            <h3>Like and share</h3>
            <p>
              Come on, take care of the ones you love and start the revolution against the fascist russian regime that is threatening the whole world with the nuclear war
            </p>
          </li>
        </ol>
      </div>

      {!mobile &&
        <div className={styles.img}>
          <Image
            src="/about.png"
            alt="Mobile App"
            layout="fill"
            quality={100}
            style={{ borderRadius: '1.6rem' }}
          />
        </div>
      }
    </div>
  )
};

export default About;