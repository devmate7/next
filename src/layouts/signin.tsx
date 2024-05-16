import { Fruitful } from '@/types';

export default function Signin({ children }: Fruitful) {
	return (
		<div className="bg-gray-100 flex h-full items-center py-16 dark:bg-neutral-800">
			<main className="w-full max-w-md mx-auto p-6">
				{children}
			</main>
		</div>
	);
}
