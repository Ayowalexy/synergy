import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: false,
};
const NavSlice = createSlice({
  name: "nav",
  initialState: initialState,
  reducers: {
    toggleSearch: (state) => {
      return {
        ...state,
        search: !state.search,
      };
    },
  },
});

// Extract the action creators object and the reducer
const { actions, reducer } = NavSlice;
// Extract and export each action creator by name
export const { toggleSearch } = actions;
// Export the reducer, either as a default or named export
export const navReducer = reducer;
