import { Link } from 'react-router-dom';

export default function Error404() {
	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center">
			<h4 className="mb-8 text-xl font-bold text-center text-gray-700">
				404 - Page Not Found
			</h4>
			<Link to="/" className="px-3 py-2 border rounded">
				Go Back
			</Link>
		</div>
	);
}
