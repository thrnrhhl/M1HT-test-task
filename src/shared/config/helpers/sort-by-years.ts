import { User } from "../models";
import { ReturnSortByYears } from "../types";

export const sortByYears = (users: User[]): ReturnSortByYears => {
    const groupedByYear = users.reduce((acc, user) => {
        const year = new Date(user.birthday).getFullYear();
        if (!acc[year]) acc[year] = [];
        acc[year].push(user);
        return acc;
    }, {} as Record<number, User[]>);

    const years = Object.keys(groupedByYear).sort((a, b) => b > a ? 1 : -1).map(Number);

    return { years, groupedByYear };
};