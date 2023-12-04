import { fetchUsers } from "@/src/entities/search/model";
import { SearchInput } from "@/src/widgets/search-input";
import { TABS } from "@/src/shared/config/constants";
import { useAppDispatch, useAppSelector } from "@/src/shared/hooks";
import { useEffect } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { TypeDepartment } from "@/src/shared/config/models";
import { List } from "@/src/widgets/list";
import { HomeMainContaner } from "./styled";

export const HomePage = () => {
    const department = useAppSelector(state => state.search.department);
    const dispatch = useAppDispatch();

    const getData = (value: string) => {
        dispatch(fetchUsers(value as TypeDepartment));
    };

    useEffect(() => { getData('all'); }, []);

    return (
        <HomeMainContaner>
            <div>
                <SearchInput />
                <Tabs.Root defaultValue="all" value={department} onValueChange={getData} className="mt-[8px]">
                    <Tabs.List className="tabs__list">
                        {TABS.map((key) => <Tabs.Trigger key={key.key} value={key.key} className="tabs__trigger flex-shrink-0">{key.name}</Tabs.Trigger>)}
                    </Tabs.List>
                </Tabs.Root>
            </div>
            <List />
        </HomeMainContaner>
    );
};