import { ChangeEvent, useState } from 'react';
import { Input } from '../common/fields';

import './LoginPage.css';

export const LoginPage = () => {
	const [formValue, setFormValue] = useState({ username: '', password: '' });

	return (
		<div className="login_page">
			<div className="login_page_container">
				<div>header</div>
				<div className="login_page_form_container">
					<div>
						<div>
							<Input
								value={formValue.username}
								placeholder="username"
								onChange={(e: ChangeEvent<HTMLInputElement>) => {
									setFormValue({ ...formValue, username: e.target.value });
								}}
							/>
						</div>
						<div>
							<Input
								value={formValue.password}
								placeholder="password"
								onChange={(e: ChangeEvent<HTMLInputElement>) => {
									setFormValue({ ...formValue, password: e.target.value });
								}}
							/>
						</div>
						<button>sign in</button>
					</div>
				</div>
			</div>
		</div>
	);
};
