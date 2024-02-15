import { FC, HTMLProps, useState } from 'react';

import styles from './Input.module.css';

interface InputProps extends HTMLProps<HTMLInputElement> {
	isError?: boolean;
	helperText?: string;
}

export const Input: FC<InputProps> = ({ isError = false, helperText, ...props }) => {
	return (
		<div className={styles.input_container}>
			<input className={`${styles.input} ${isError ? styles.input_error : ''}`} {...props} />
		</div>
	);
};
