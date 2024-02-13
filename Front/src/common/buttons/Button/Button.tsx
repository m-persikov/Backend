import { FC, HTMLProps } from 'react';

import styles from './Button.module.css';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ children }) => {
	return <button className={styles.button}>{children}</button>;
};
