import { LoadingUserCard } from "@/src/entities/search";
import { WrapperUsersList } from "@/src/shared/ui";

export const ListLoader = () => {
    return (
        <WrapperUsersList>
            {Array(6).fill(null).map((_, index) => <LoadingUserCard key={index} />)}
        </WrapperUsersList>
    );
};