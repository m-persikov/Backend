import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Input, InputPassword, ChecBox } from '@common/fields';
import { Button } from '@common/buttons';

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
	const [formValues, setFormValues] = useState({
		username: '',
		password: '',
		notMyComputer: false
	});
	const [formErrors, setFormErrors] = useState<FormErrors>({ username: null, password: null });
	const navigate = useNavigate();

	return (
		<div className={styles.login_page}>
			<div className={styles.container}>
				<div className={styles.header_container}>DOGGEE</div>
				<div className={styles.form_container}>
					<div className={styles.input_container}>
						<Input
							value={formValues.username}
							type="text"
							label="username"
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								const username = e.target.value;
								setFormValues({ ...formValues, username });

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
							value={formValues.password}
							isError={!!formErrors.password}
							label="password"
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								const password = e.target.value;
								setFormValues({ ...formValues, password });

								const error = validateLoginForm('password', password);
								setFormErrors({ ...formValues, password: error });
							}}
							{...(!!formErrors.password && {
								isError: !!formErrors.password,
								helperText: formErrors.password
							})}
						/>
					</div>
					<div className={styles.input_container}>
						<ChecBox
							checked={formValues.notMyComputer}
							label="This is not my device"
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								const notMyComputer = e.target.checked;
								setFormValues({ ...formValues, notMyComputer });
							}}
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
