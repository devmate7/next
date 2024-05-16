import { UserProvider } from '@/contexts/UserContext';
import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
	const path = usePathname();

	useEffect(
		() => void import('preline/preline').then(
			preline => preline.HSStaticMethods.autoInit()
		),
		[path]
	);

	return (
		<UserProvider>
			<Component {...pageProps} />
		</UserProvider>
	);
}
