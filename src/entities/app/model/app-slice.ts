import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TypeInitialState = {
    isOnline: boolean;
};

const initialState: TypeInitialState = {
    isOnline: true,
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setIsOnline: (state, action: PayloadAction<boolean>) => {
            state.isOnline = action.payload;
        }
    }
});


export const { setIsOnline } = appSlice.actions;