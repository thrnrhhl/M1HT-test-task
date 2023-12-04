import { User } from "../models";

export const filterUsersByText = (list: User[], searchString: string): User[] => {

    if(!searchString.trim().length) return list;
    
    let filteredList = list.filter((item) => {
        const firstLastName = `${item.firstName} ${item.lastName}`.toLowerCase();
        // Условие поиска по имени и фамилии
        const condition1 = firstLastName.indexOf(searchString.toLowerCase().trim()) !== -1;
        // Условие поиска по userTag
        const condition2 =  item.userTag.toLowerCase().indexOf(searchString.toLowerCase().trim()) !== -1;

        if(condition1 || condition2) {
            return true;
        }

        return false;
    });

    return filteredList
};