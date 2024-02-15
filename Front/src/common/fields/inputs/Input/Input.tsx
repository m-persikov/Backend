import { FC, InputHTMLAttributes } from 'react';

import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	isError?: boolean;
	helperText?: string;
}

export const Input: FC<InputProps> = ({ isError = false, helperText, ...props }) => {
	props.type = '';
	return (
		<div className={styles.input_container}>
			<input className={`${styles.input} ${isError ? styles.input_error : ''}`} {...props} />
		</div>
	);
};
