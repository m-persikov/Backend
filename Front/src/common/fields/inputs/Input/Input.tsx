import { FC, InputHTMLAttributes, useRef, useState } from 'react';

import styles from './Input.module.css';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {
	label: string;
	isError?: boolean;
	helperText?: string;
}

export const Input: FC<InputProps> = ({ isError = false, helperText, label, ...props }) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [isFocus, setFocus] = useState(!!props.value ?? false);

	return (
		// <div className={styles.input_container}>
		<div
			className={`${styles.input_container} ${isError ? styles.input_container : ''} 
			${isFocus ? styles.focused : ''}`}
			onClick={() => {
				inputRef.current?.focus();
				setFocus(true);
			}}
		>
			<label htmlFor="" className={styles.input_label}>
				{label}
			</label>
			<input
				ref={inputRef}
				className={styles.input}
				//TODO: best practice
				onBlur={() => !props.value && setFocus(false)}
				{...props}
			/>
			{isError && helperText && <div className={styles.helper_text}>{helperText}</div>}
		</div>
	);
};
