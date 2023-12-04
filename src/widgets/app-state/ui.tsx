import { setIsOnline } from "@/src/entities/app/model/app-slice";
import { fetchUsers } from "@/src/entities/search/model";
import { useAppDispatch, useAppSelector } from "@/src/shared/hooks";
import { useEffect } from "react";

export const AppState = () => {
    const searchState = useAppSelector(state => state.search);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const handleOnline = () => {
            dispatch(setIsOnline(true));
            dispatch(fetchUsers(searchState.department))
        };
        const handleOffline = () => dispatch(setIsOnline(false));

        !navigator.onLine && handleOffline();

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, [searchState.department]);

    return null;
};