import Axios from "axios";
import { TypeDepartment, User } from "../config/models";
import { setupCache } from 'axios-cache-interceptor';

export const axios = setupCache(Axios, {ttl: 300000}); 

export const getUsersList = async (filter: TypeDepartment="all"): Promise<{ items: User[] } | never> => {
    try {
        const url = 'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example='+filter;
        const headers = {
            'Content-Type': 'application/json'
        };
        
        const res = await axios.get(url, { headers });
        
        return res.data;
    } catch(e) {
        throw new Error('Ошибка при получении пользователей');
    }
};


export const getUser = async ({ id }: Pick<User, 'id'>): Promise<User | never | undefined> => {
    try {
        const getAllUsers = await getUsersList();

        if(!getAllUsers) return;

        const user = getAllUsers.items.filter(item => item.id === id);

        if(!user[0]) return;

        return user[0]
    } catch(e) {
        throw new Error('Ошибка при получении пользователя');
    }
};