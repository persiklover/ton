import type { NextPage } from 'next';
import Image from 'next/image';
import Search from '../components/Search';
import styles from './index.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <div className="container">
        <div className={styles.homeInner}>
          <div className={styles.img}>
            <Image
              src="/gem.png"
              alt="Gem"
              layout="fill"
              quality={100}
            />
          </div>
          <h1 className={styles.title}>SENDTON.TO</h1>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
