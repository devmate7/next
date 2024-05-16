import Header from '@/components/account/header';
import Sidebar from '@/components/account/sidebar';
import type { Fruitful } from '@/types';
import { useId } from 'react';

export default function Account({ children }: Fruitful) {
	const sidebar = 'sidebar' /* BUG: workaround for useId() */;

	return (
		<>
			<Header />
			<Sidebar id={sidebar} />
			{children}
		</>
	);
}
