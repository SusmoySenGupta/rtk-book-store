import { Link, useMatch } from 'react-router-dom';
import logoImage from '../assets/images/logo.png';
import Search from './ui/Search';

export default function Navbar() {
	const isIndexPage = useMatch('/');
	const isAddBookPage = useMatch('/books/add');

	return (
		<nav className="py-4 2xl:px-6">
			<div className="container flex items-center justify-between">
				<div
					style={{
						fontFamily: 'Lobster, cursive',
						fontSize: '1.5rem',
						display: 'flex',
						alignItems: 'center',
						gap: '0.5rem',
					}}
				>
					<img
						src={logoImage}
						width="60px"
						className="object-contain"
						alt="Logo"
					/>
					<span>RTK Book Store</span>
				</div>

				<ul className="hidden md:flex items-center space-x-6">
					<Link
						className={`${
							isIndexPage && 'font-semibold'
						} cursor-pointer`}
						to="/"
						id="lws-bookStore"
					>
						<li>Home</li>
					</Link>
					<Link
						className={`${
							isAddBookPage && 'font-semibold'
						} cursor-pointer`}
						to="/books/add"
						id="lws-addBook"
					>
						<li>Add Book</li>
					</Link>
				</ul>

				<Search />
			</div>
		</nav>
	);
}
