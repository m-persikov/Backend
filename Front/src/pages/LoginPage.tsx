import { ChangeEvent, useState } from 'react';

import { Input } from '../common/fields';
import { Button } from '../common/buttons';

import styles from './LoginPage.module.css';

const validateUsername = (value: string) => {
	if (!value) return 'field required';
	return null;
};

const validatePassword = (value: string) => {
	if (!value) return 'field required';
	return null;
};

const loginFormValidateSchema = {
	username: validateUsername,
	password: validatePassword
};

const validateLoginForm = (name: 'username' | 'password', value: string) => {
	return loginFormValidateSchema[name](value);
};

interface FormErrors {
	username: string | null;
	password: string | null;
}

export const LoginPage = () => {
	const [formValue, setFormValue] = useState({ username: '', password: '' });
	const [formErrors, setFormErrors] = useState<FormErrors>({ username: null, password: null });

	return (
		<div className={styles.login_page}>
			<div className={styles.container}>
				<div className={styles.header_container}>DOGGEE</div>
				<div className={styles.form_container}>
					<div className={styles.input_container}>
						<Input
							value={formValue.username}
							placeholder="username"
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
						<Input
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
				<div className={styles.sing_up_container}>Create new accaunt</div>
			</div>
		</div>
	);
};
