import { useSelector } from 'react-redux';
import { useGetBooksQuery } from '../../features/api/apiSlice';
import BookLoader from '../ui/BookLoader';
import Error from '../ui/Error';
import Book from './Book';

export default function Books() {
	const { data: books, isError, isLoading } = useGetBooksQuery();
	const { tag, search } = useSelector((state) => state.filter);

	let content = null;
	if (isLoading) {
		content = (
			<>
				<BookLoader />
				<BookLoader />
				<BookLoader />
			</>
		);
	} else if (isError) {
		content = <Error message="There was an error!" />;
	} else if (books?.length === 0) {
		content = <Error message="No books found!" />;
	} else if (books?.length) {
		content = books
			.filter((book) => {
				if (tag === 'featured') {
					return book.featured === true;
				}
				return book;
			})
			.filter((book) => {
				return book?.name?.toLowerCase().includes(search.toLowerCase());
			})
			.map((book) => <Book key={book.id} book={book} />);
	}

	return (
		<div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
			{content}
		</div>
	);
}
