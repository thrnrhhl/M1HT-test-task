import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "../entities/app/model/app-slice";
import { searchSlice } from "../entities/search/model";

export const store = configureStore({
    reducer: {
        search: searchSlice.reducer,
        app: appSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;