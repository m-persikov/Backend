import { useCallback, useState } from 'react';

interface Config<T> extends Omit<RequestInit, 'body'> {
	body?: T;
}

interface UseMutationParams<T> {
	url: string;
	config: Config<T>;
}

export const useMutation = <T, K>({ url, config }: UseMutationParams<T>) => {
	const [status, setStatus] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const mutation = useCallback(async () => {
		setIsLoading(true);
		try {
			const response = await fetch(url, {
				credentials: 'same-origin',
				// ...config,
				headers: {
					'Content-Type': 'application/json'
					// ...config.headers
				},
				...(config.body && { body: JSON.stringify(config.body) })
			});
			setStatus(response.status);
			return (await response.json()) as Promise<K>;
		} catch (e: any) {
			setIsLoading(false);
			setError(e);
		} finally {
			setIsLoading(false);
		}
	}, []);

	return { mutation, error, isLoading, status };
};
