import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	useAddBookMutation,
	useUpdateBookMutation,
} from '../features/api/apiSlice';
import Success from './ui/Success';

export default function Form({ book }) {
	const [name, setName] = useState(book?.name || '');
	const [author, setAuthor] = useState(book?.author || '');
	const [thumbnail, setThumbnail] = useState(book?.thumbnail || '');
	const [price, setPrice] = useState(book?.price || '');
	const [rating, setRating] = useState(book?.rating || '');
	const [featured, setFeatured] = useState(book?.featured || false);

	const [addBook, { isSuccess, isLoading }] = useAddBookMutation();
	const [
		updateBook,
		{ isSuccess: isUpdateSuccess, isLoading: isUpdateLoading },
	] = useUpdateBookMutation();
	const navigate = useNavigate();

	const handleAdd = (e) => {
		e.preventDefault();
		addBook({
			name,
			author,
			thumbnail,
			price,
			rating: +rating,
			featured,
		});
	};

	const handleUpdate = (e) => {
		e.preventDefault();
		updateBook({
			bookID: book?.id,
			updatedBook: {
				name,
				author,
				thumbnail,
				price,
				rating: +rating,
				featured,
			},
		});
	};

	useEffect(() => {
		if (isSuccess || isUpdateSuccess) {
			navigate('/');
		}
	}, [isSuccess, isUpdateSuccess, navigate]);

	return (
		<form
			className="book-form"
			onSubmit={book?.id ? handleUpdate : handleAdd}
		>
			<div className="space-y-2">
				<label htmlFor="lws-bookName">Book Name</label>
				<input
					required
					className="text-input"
					type="text"
					id="lws-bookName"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>

			<div className="space-y-2">
				<label htmlFor="lws-author">Author</label>
				<input
					required
					className="text-input"
					type="text"
					id="lws-author"
					name="author"
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				/>
			</div>

			<div className="space-y-2">
				<label htmlFor="lws-thumbnail">Image Url</label>
				<input
					required
					className="text-input"
					type="text"
					id="lws-thumbnail"
					name="thumbnail"
					value={thumbnail}
					onChange={(e) => setThumbnail(e.target.value)}
				/>
			</div>

			<div className="grid grid-cols-2 gap-8 pb-4">
				<div className="space-y-2">
					<label htmlFor="lws-price">Price</label>
					<input
						required
						className="text-input"
						type="number"
						id="lws-price"
						name="price"
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>
				</div>

				<div className="space-y-2">
					<label htmlFor="lws-rating">Rating</label>
					<input
						required
						className="text-input"
						type="number"
						id="lws-rating"
						name="rating"
						min="1"
						max="5"
						value={rating}
						onChange={(e) => setRating(e.target.value)}
					/>
				</div>
			</div>

			<div className="flex items-center">
				<input
					id="lws-featured"
					type="checkbox"
					name="featured"
					className="w-4 h-4"
					checked={featured}
					onChange={(e) => setFeatured(e.target.checked)}
				/>
				<label htmlFor="lws-featured" className="ml-2 text-sm">
					This is a featured book
				</label>
			</div>

			<button
				disabled={isLoading || isUpdateLoading}
				type="submit"
				className="submit"
				id="lws-submit"
			>
				{book?.id ? 'Update Book' : 'Add Book'}
			</button>
			{isSuccess && <Success message="Book added successfully" />}
		</form>
	);
}
