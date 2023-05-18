import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	tag: 'all',
	search: '',
};

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setTag: (state, action) => {
			state.tag = action.payload;
		},
		setSearch: (state, action) => {
			state.search = action.payload;
		},
	},
});

export default filterSlice.reducer;
export const { setTag, setSearch } = filterSlice.actions;
