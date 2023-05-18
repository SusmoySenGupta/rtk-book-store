import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Error404 from './components/ui/Error404';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import Index from './pages/Index';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/books/add" element={<AddBook />} />
				<Route path="/books/:bookID/edit" element={<EditBook />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</Router>
	);
}

export default App;
