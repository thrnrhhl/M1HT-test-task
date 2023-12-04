import {User} from '../models';

export const sortSearchList = (list: User[], type: 'alphabet' | 'birthdate') => {
    if(type === 'alphabet') {
        list.sort((a, b) => `${a.firstName} ${a.lastName}` > `${b.firstName} ${b.lastName}` ? 1 : -1);
        return list
    }
    
    list.sort((a, b) => Date.parse(a.birthday) > Date.parse(b.birthday) ? 1 : -1)
    
    return list;
};