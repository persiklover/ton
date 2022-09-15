import { User } from "../../types/User";
import { GetServerSideProps } from "next";
import React, { useState } from "react";
import axios from "axios";
import styles from './style.module.scss';
import classNames from "classnames";

const User = ({ user }: { user: User }) => {
  const { username, wallet } = user;

  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState('');

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <span className={styles.suptitle}>Send TON to</span>
        <a
          className={styles.username}
          href={`@${username}`}
          title={username}
        >
          <span>@{username}</span>
        </a>

        <div className={styles.inputs}>
          <div className={styles.inputWrapper}>
            <span className={styles.convertedCurrency}>$ {0}</span>
            <input
              className={classNames(styles.input, styles.amount)}
              type="text"
              value={amount}
              onChange={e => {
                const value = e.target.value.replace(/[A-Za-z]/ig, "");
                setAmount(+value);
              }}
            />
            <svg className={styles.tonIcon} width="4rem" height="4rem" viewBox="0 0 40 40" fill="none">
              <path d="m27.685 16.928-6.88 11.8a.97.97 0 0 1-1.68-.009l-6.73-11.81c-.871-1.527.232-3.425 1.99-3.425h11.32c1.769 0 2.87 1.917 1.98 3.444Z" fill="#08C" />
              <path d="M20.838 25.334V15.202h4.83c.476 0 .773.516.533.927l-5.363 9.205ZM19.209 25.334V15.202h-4.83a.617.617 0 0 0-.533.927l5.363 9.205Z" fill="var(--bg-color)" />
            </svg>
          </div>

          <input
            className={styles.input}
            type="text"
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Add a message (optional)"
          />

          <a
            className={styles.button}
            href={`ton://transfer/${wallet}?amount=${amount}&text=${message}`}
            target="_blank"
            rel="noreferrer"
          >
            Continue
          </a>
        </div>

      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const { query } = context;
  const { username } = query;

  const response = await axios.get('http://38.242.202.243:8080/api/user', {
    params: { username }
  });
  const { data: user } = response;

  return {
    props: {
      user
    }
  };
};

export default User;