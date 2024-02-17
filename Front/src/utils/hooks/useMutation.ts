import { useCallback, useState } from 'react';

type MutationMethods = 'POST' | 'PUT' | 'DELETE';

export const useMutation = <T>(
	url: string,
	method: MutationMethods,
	config?: Omit<RequestInit, 'method'>
) => {
	const [status, setStatus] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const mutation = useCallback(async (body: T) => {
		setIsLoading(true);
		try {
			const response = await fetch(url, {
				credentials: 'same-origin',
				...config,
				method,
				headers: {
					'Content-Type': 'application/json',
					...(!!config?.headers && config.headers)
				},
				...(!!body && { body: JSON.stringify(body) })
			});

			setStatus(response.status);
			return await response.json();
		} catch (error) {
			setIsLoading(false);
			setError((error as Error).message);
		} finally {
			setIsLoading(false);
		}
	}, []);

	return { mutation, error, isLoading, status };
};
