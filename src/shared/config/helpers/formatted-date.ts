import { format } from "date-fns";
import {ru} from 'date-fns/locale';

export const formattedDate = (date: string): string => {
    
    return format(new Date(date), 'dd MMMM yyy', { locale: ru });
};