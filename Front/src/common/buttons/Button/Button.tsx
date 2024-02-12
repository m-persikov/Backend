import { FC, HTMLProps } from 'react';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ children }) => {
	return <button>{children}</button>;
};
