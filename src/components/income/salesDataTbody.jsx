export default function SalesDataTbody({ name, identifier, date, price }) {
	return (
		<>
			<div className="flex flex-row justify-between items-center px-4 py-2 border">
				<div className="flex flex-col gap-1 w-1/2">
					<p className="text-wrap text-sm font-bold text-gray-800">{name}</p>
					<p className="text-xs text-gray-500">{identifier}</p>
				</div>
				<div className="w-1/3 text-center">
					<p className="text-sm">{date}</p>
				</div>
				<div className="w-1/3 text-center">
					<p className="text-sm">NT${price}</p>
				</div>
			</div>
		</>
	);
}