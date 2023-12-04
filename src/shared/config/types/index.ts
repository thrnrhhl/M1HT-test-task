import { User } from "../models";

export type ReturnSortByYears = {
    years: number[];
    groupedByYear: Record<number, User[]> 
};