import { useDispatch, useSelector } from 'react-redux';
import Books from '../components/books/Books';
import Layout from '../components/Layout';
import { setTag } from '../features/filters/filterSlice';

export default function Index() {
	const dispatch = useDispatch();
	const { tag } = useSelector((state) => state.filter);

	const handleFilter = (tag) => {
		dispatch(setTag(tag));
	};

	return (
		<Layout>
			<div className="order-2 xl:-order-1">
				<div className="flex items-center justify-between mb-12">
					<h4 className="mt-2 text-xl font-bold">Book List</h4>

					<div className="flex items-center space-x-4">
						<button
							onClick={() => handleFilter('all')}
							className={`lws-filter-btn ${
								tag === 'all' && 'active-filter'
							}`}
						>
							All
						</button>
						<button
							onClick={() => handleFilter('featured')}
							className={`lws-filter-btn ${
								tag === 'featured' && 'active-filter'
							}`}
						>
							Featured
						</button>
					</div>
				</div>
				<Books />
			</div>
		</Layout>
	);
}
