import { FC, HTMLProps } from 'react';

import styles from './Input.module.css';

interface InputProps extends HTMLProps<HTMLInputElement> {
	isError?: boolean;
	helperText?: string;
}

export const Input: FC<InputProps> = ({ isError = false, helperText, ...props }) => {
	// const className = isError ? 'input_error' : '';
	return (
		<>
			<input className={`${styles.input} ${isError ? styles.input_error : ''}`} {...props} />
			{isError && helperText && <div className={styles.helper_text}>{helperText}</div>}
		</>
	);
};
