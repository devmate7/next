import { Fruitful } from '@/types';
import { cookies } from 'next/headers';
import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext({});

export function useUser() {
	return useContext(UserContext);
}

export function UserProvider({ children }: Fruitful) {
	const [user, setUser] = useState({});

	useEffect(
		() => void cookies().get('SESSION_TOKEN')
			&& fetch('/api').then(r => r.json()).then(data => setUser(data)),
		[]
	);

	return (
		<UserContext.Provider value={user}>
			{children}
		</UserContext.Provider>
	);
}
