import { Wrapper, Avatar, UserDepartament, UserDetails, UserName } from "./styled";

export const LoadingUserCard = () => {
    return (
        <Wrapper>
            <Avatar />
            <UserDetails>
                <UserName />
                <UserDepartament />
            </UserDetails>
        </Wrapper>
    );
};