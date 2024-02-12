import { FC, HTMLProps } from 'react';

import './Button.css';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ children }) => {
	return <button>{children}</button>;
};
