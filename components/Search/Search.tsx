import { User } from '../../types/User';
import Link from 'next/link';
import React, { useCallback, useEffect, useState, useTransition } from 'react';
import axios from 'axios';
import SignUpButton from '../SignUpButton';
import styles from './Search.module.scss';

export const useDebouncedEffect = (effect: Function, deps: any[], delay: number) => {
  useEffect(() => {
    const handler = setTimeout(() => effect(), delay);

    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...(deps || []), delay]);
}

export default function Search() {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [found, setFound] = useState(true);

  const fetchUsers = useCallback(async () => {
    try {
      const response = await axios.get('http://38.242.202.243:8080/api/users', {
        params: { search }
      });
      const { data } = response;
      setUsers(data);
    }
    catch (error) {
      console.error(error);
    }
  }, [search]);

  useEffect(() => {
    if (!search) {
      setUsers([]);
      return;
    }
    fetchUsers();
  }, [search, fetchUsers]);

  useDebouncedEffect(() => {
    setFound((!search || (search && users?.length)) as boolean);
  }, [search, users], 100);

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchWrapper}>
        <svg className={styles.icon} viewBox="0 0 20 20" width="2rem" height="2rem" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m13.604 12.416 4.483 4.483a.84.84 0 0 1-1.189 1.188l-4.483-4.483a6.667 6.667 0 1 1 1.188-1.188h.001Zm-5.27.917a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
            fill="#778995"
          />
        </svg>
        <input
          className={styles.input}
          type="text"
          onChange={e => {
            setSearch(e.target.value);
          }}
          placeholder="Find username"
        />
        {!found &&
          <div className={styles.notFound}>
            <span>Not found</span>
            <SignUpButton>
              Claim username
            </SignUpButton>
          </div>
        }
      </div>
      {users?.length !== 0 &&
        // TODO: Allow navigating through results with arrow keys
        <ul className={styles.results}>
          {users?.map((user, index) => {
            const { username, wallet } = user;
            return (
              <li key={index}>
                <Link href={`/username/${username}`}>
                  <a>
                    <span>@{username}</span>
                    <span className={styles.wallet} title={wallet}>
                      {wallet.slice(0, 6)}...{wallet.slice(-3)}
                    </span>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
}