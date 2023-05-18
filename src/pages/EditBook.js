import { useParams } from 'react-router-dom';
import Form from '../components/Form';
import Layout from '../components/Layout';
import { useGetBookQuery } from '../features/api/apiSlice';

export default function EditBook() {
	const { bookID } = useParams();
	const { data: book, isLoading, isError } = useGetBookQuery(bookID);

	let content = null;
	if (isLoading) {
		content = <div>Loading...</div>;
	} else if (isError) {
		content = <div>Error</div>;
	} else if (book?.id) {
		content = <Form book={book} />;
	}

	return (
		<Layout>
			<div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
				<h4 className="mb-8 text-xl font-bold text-center">
					Edit Book
				</h4>
				{content}
			</div>
		</Layout>
	);
}
