import { ChangeEvent, useState } from 'react';

import { Input } from '../common/fields';
import { Button } from '../common/buttons';

import styles from './LoginPage.module.css';

export const LoginPage = () => {
	const [formValue, setFormValue] = useState({ username: '', password: '' });

	return (
		<div className={styles.login_page}>
			<div className={styles.container}>
				<div>header</div>
				<div className={styles.form}>
					<div>
						<div className={styles.input}>
							<Input
								value={formValue.username}
								isError={true}
								helperText="validation"
								placeholder="username"
								onChange={(e: ChangeEvent<HTMLInputElement>) => {
									setFormValue({ ...formValue, username: e.target.value });
								}}
							/>
						</div>
						<div className={styles.input}>
							<Input
								value={formValue.password}
								placeholder="password"
								onChange={(e: ChangeEvent<HTMLInputElement>) => {
									setFormValue({ ...formValue, password: e.target.value });
								}}
							/>
						</div>
						<div>
							<Button>Sign in</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
