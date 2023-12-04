import { setSearchString } from "@/src/entities/search/model";
import { useAppSelector } from "@/src/shared/hooks";
import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { Input } from "./styled";

export const InputSearch = () => {
    const searchString = useAppSelector(state => state.search.searchString);
    const dispatch = useDispatch();

    const handleChangeInput = (ev: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchString(ev.target.value));
    };

    return <Input
        type="text"
        value={searchString}
        onChange={handleChangeInput}
        placeholder="Введи имя, тег, почту..."
    />;
};