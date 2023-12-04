import { memo } from "react";
import { Filter } from "@/src/features/filter";
import { InputSearch } from "@/src/features/input-search";
import { useAppSelector } from "@/src/shared/hooks";
import { SearchIcon, SearchInputHeadWrapper, TextMessage, Title, WrapperContent1, WrapperContent2 } from "./styled";

export const SearchInput = memo(() => {
    const isLoading = useAppSelector(state => state.search.queryState.isLoading);
    const isOnline = useAppSelector(state => state.app.isOnline);

    return (
        <div>
            <SearchInputHeadWrapper $loadingStyle={isLoading} $offlineStyle={!isOnline}>
                <Title $loadingStyle={isLoading} $offlineStyle={!isOnline}>Поиск</Title>
            </SearchInputHeadWrapper>

            {(!isLoading && isOnline) && (
                <WrapperContent1 $loadingStyle={isLoading} $offlineStyle={!isOnline}>
                    <div className="relative">
                        <SearchIcon src="/search.svg" width="24" height="24" alt="search" className="absolute top-[8px] left-[12px]" />
                        <InputSearch />
                        <Filter />
                    </div>
                </WrapperContent1>
            )}

            {(isLoading || (!isOnline)) && (
                <WrapperContent2 $loadingStyle={isLoading} $offlineStyle={!isOnline}>
                    <TextMessage>
                        {!isOnline && 'Не могу обновить данные. Проверь соединение с интернетом.'}
                        {isLoading && 'Секундочку, гружусь...'}
                    </TextMessage>
                </WrapperContent2>
            )}
        </div>

    );
});