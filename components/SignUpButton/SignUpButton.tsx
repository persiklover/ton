import React, { HTMLAttributes } from "react"
import classNames from "classnames";
import styles from './SignUpButton.module.scss';

export default function SignUpButton(props: HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      className={classNames(styles.button, props.className)}
      href="https://t.me/sendTON_to_bot"
      target="_blank"
      rel="noreferrer"
    >
      {props.children ?? 'Claim username'}
    </a>
  )
}