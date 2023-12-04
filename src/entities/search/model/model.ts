import { TypeDepartment, User } from "@/src/shared/config/models";

export type TypeInitialState = {
    list: User[];
    department: TypeDepartment;
    queryState: {
        isLoading: boolean;
        isError: boolean;
    },
    searchString: string;
    typeSort: TypeSort
};

export type TypeSort = 'alphabet' | 'birthdate';

export const initialState: TypeInitialState = {
    department: 'all',
    queryState: {
        isLoading: false,
        isError: false,
    },
    searchString: '',
    typeSort: 'alphabet',
    list: [],
};