export default function BookLoader() {
	return (
		<div className="book-card">
			<div className="h-[240px] w-[170px] bg-gray-200 object-cover"></div>
			<div className="flex-1 h-full pr-2 pt-2 flex flex-col">
				<div className="space-y-2 mt-4 h-full">
					<p className="bg-gray-200 text-slate-200 h-6 rounded animate-pulse"></p>
					<p className="bg-gray-200 text-slate-200 h-4 w-3/4 rounded animate-pulse"></p>
					<p className="bg-gray-200 text-slate-200 h-4 w-1/3 rounded animate-pulse"></p>
				</div>
			</div>
		</div>
	);
}
