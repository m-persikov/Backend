import { FC, HTMLProps } from 'react';

import './Input.css';

interface InputProps extends HTMLProps<HTMLInputElement> {}

export const Input: FC<InputProps> = (props) => {
	return <input {...props} />;
};
