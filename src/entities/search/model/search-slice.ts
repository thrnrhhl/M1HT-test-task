import { getUsersList } from "@/src/shared/api";
import { sortSearchList } from "@/src/shared/config/helpers";
import { TypeDepartment } from "@/src/shared/config/models";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, TypeSort } from "./model";

export const fetchUsers = createAsyncThunk('data/fetchUsers', async(filterType: TypeDepartment, { dispatch }) => {
    try {
        dispatch(setDepartament(filterType));
        const data = await getUsersList(filterType);
        return {
            list: data.items,
            department: filterType
        }
    } catch(err) {
        console.error(err);
        dispatch(setIsError(true));
        dispatch(setIsLoading(false));
    }
});

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.queryState.isLoading = action.payload;
        },
        setIsError: (state, action: PayloadAction<boolean>) => {
            state.queryState.isError = action.payload;
        },
        setSearchString: (state, action: PayloadAction<string>) => {
            state.searchString = action.payload;
        },
        setDepartament: (state, action: PayloadAction<TypeDepartment>) => {
            state.department = action.payload;
        },
        setTypeSort: (state, action: PayloadAction<TypeSort>) => {
            state.typeSort = action.payload;
            state.list = sortSearchList(state.list, action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.queryState.isError = false;
            state.queryState.isLoading = true;
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.queryState.isLoading = false;
            state.list = action.payload?.list || [];
        })
        builder.addCase(fetchUsers.rejected, (state) => {
            state.queryState.isLoading = false;
            state.queryState.isError = true;
        })
    }
});


export const { setIsError, setTypeSort, setIsLoading, setSearchString, setDepartament } = searchSlice.actions;