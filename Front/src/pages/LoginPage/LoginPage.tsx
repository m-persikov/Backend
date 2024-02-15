import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@common/buttons';
import { Input, InputPassword } from '@common/fields';

import styles from './LoginPage.module.css';

const validateIsEmpty = (value: string) => {
	if (!value) return 'field required';
	return null;
};

const validateUsername = (value: string) => {
	return validateIsEmpty(value);
};

const validatePassword = (value: string) => {
	return validateIsEmpty(value);
};

const loginFormValidateSchema = {
	username: validateUsername,
	password: validatePassword
};

const validateLoginForm = (name: keyof typeof loginFormValidateSchema, value: string) => {
	return loginFormValidateSchema[name](value);
};

interface FormErrors {
	username: string | null;
	password: string | null;
}

export const LoginPage = () => {
	const [formValue, setFormValue] = useState({ username: '', password: '' });
	const [formErrors, setFormErrors] = useState<FormErrors>({ username: null, password: null });

	const navigate = useNavigate();

	return (
		<div className={styles.login_page}>
			<div className={styles.container}>
				<div className={styles.header_container}>DOGGEE</div>
				<div className={styles.form_container}>
					<div className={styles.input_container}>
						<Input
							value={formValue.username}
							type="text"
							label="username"
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								const username = e.target.value;
								setFormValue({ ...formValue, username });

								const error = validateLoginForm('username', username);
								//TODO: why are we doing this?
								// if (error) return setFormErrors({ ...formErrors, username: error });
								setFormErrors({ ...formErrors, username: error });
							}}
							{...(!!formErrors.username && {
								isError: !!formErrors.username,
								helperText: formErrors.username
							})}
						/>
					</div>
					<div className={styles.input_container}>
						<InputPassword
							value={formValue.password}
							isError={!!formErrors.password}
							placeholder="password"
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								const password = e.target.value;
								setFormValue({ ...formValue, password });

								const error = validateLoginForm('password', password);
								setFormErrors({ ...formValue, password: error });
							}}
							{...(!!formErrors.password && {
								isError: !!formErrors.password,
								helperText: formErrors.password
							})}
						/>
					</div>
					<div>
						<Button>Sign in</Button>
					</div>
				</div>
				<div className={styles.sing_up_container} onClick={() => navigate('/registration')}>
					Create new accaunt
				</div>
			</div>
		</div>
	);
};
