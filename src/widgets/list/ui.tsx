import { ServerError } from "@/src/entities/search/ui/server-error";
import { filterUsersByText, sortByYears, sortSearchList } from "@/src/shared/config/helpers";
import { useAppDispatch, useAppSelector } from "@/src/shared/hooks";
import { DividerYear, WrapperUsersList } from "@/src/shared/ui";
import { format } from "date-fns";
import { useMemo } from "react";
import { ListLoader } from "../list-loader";
import ruLocale from "date-fns/locale/ru";
import { User } from "@/src/shared/config/models";
import { SearchNotFound, SearchUserCard } from "@/src/entities/search";
import { fetchUsers } from "@/src/entities/search/model";
import { ReturnSortByYears } from "@/src/shared/config/types";
import { BirthDateBlock, TextDate } from "./styled";

export const List = () => {
    const searchState = useAppSelector(state => state.search);
    const dispatch = useAppDispatch();

    const handleRefetch = () => {
        dispatch(fetchUsers(searchState.department));
    };

    const list: User[] | ReturnSortByYears = useMemo(() => {

        const sortedList = filterUsersByText(
            sortSearchList([...searchState.list], searchState.typeSort),
            searchState.searchString
        );

        if (searchState.typeSort === 'birthdate') {

            const sortYears = sortByYears(sortedList);
            return sortYears;
        }

        return sortedList

    }, [searchState.list, searchState.typeSort, searchState.searchString])


    // Проверка если произошла ошибка
    if (searchState.queryState.isError) return <ServerError onRefetch={handleRefetch} />;

    // Проверка если идет загрузка
    if (searchState.queryState.isLoading) return <ListLoader />;

    // Проверка если массив пустой
    if (
        (Array.isArray(list) && list.length === 0) ||
        ('years' in list && list.years.length === 0)
    ) return <SearchNotFound />

    if ('years' in list) {
        return (
            <WrapperUsersList>
                {list.years.map((key) => (
                    <div key={key}>
                        <DividerYear text={key} />
                        {list.groupedByYear[key].map((k: any) => (
                            <BirthDateBlock key={k.id}>
                                <SearchUserCard key={k.id} {...k} />
                                <TextDate>
                                    {format(new Date(k.birthday), 'd MMM', { locale: ruLocale }).replace('.', '')}
                                </TextDate>
                            </BirthDateBlock>
                        ))}
                    </div>
                ))}
            </WrapperUsersList>
        );
    }

    return (
        <WrapperUsersList>
            {(list.map((key: any) => (
                <SearchUserCard key={key.id} {...key} />
            )))}
        </WrapperUsersList>
    );
};