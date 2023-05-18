import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000/' }),
	tagTypes: ['Books', 'Book'],
	endpoints: (builder) => ({
		getBooks: builder.query({
			query: () => 'books',
			keepUnusedDataFor: 600,
			providesTags: ['Books'],
		}),
		getBook: builder.query({
			query: (bookID) => `books/${bookID}`,
			providesTags: (result, error, arg) => [{ type: 'Book', id: arg }],
		}),
		addBook: builder.mutation({
			query: (newBook) => ({
				url: 'books',
				method: 'POST',
				body: newBook,
			}),
			invalidatesTags: ['Books'],
		}),
		updateBook: builder.mutation({
			query: ({ bookID, updatedBook }) => ({
				url: `books/${bookID}`,
				method: 'PATCH',
				body: updatedBook,
			}),
			invalidatesTags: (result, error, arg) => [
				'Books',
				{ type: 'Book', id: arg.bookID },
			],
		}),
		deleteBook: builder.mutation({
			query: (bookID) => ({
				url: `books/${bookID}`,
				method: 'DELETE',
			}),
			invalidatesTags: (result, error, arg) => [
				'Books',
				{ type: 'Book', id: arg },
			],
		}),
	}),
});

export const {
	useGetBooksQuery,
	useGetBookQuery,
	useAddBookMutation,
	useUpdateBookMutation,
	useDeleteBookMutation,
} = apiSlice;
