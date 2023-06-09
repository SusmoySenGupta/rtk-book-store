import Form from '../components/Form';
import Layout from '../components/Layout';

export default function AddBook() {
	return (
		<Layout>
			<div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
				<h4 className="mb-8 text-xl font-bold text-center">
					Add New Book
				</h4>
				<Form />
			</div>
		</Layout>
	);
}
