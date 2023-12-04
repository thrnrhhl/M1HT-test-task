import { User } from "@/src/shared/config/models";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Avatar, UserDepartament, UserDetails, UserName, UserTag, Wrapper } from "./styled";

interface Props extends User { }

export const SearchUserCard: FC<Props> = ({ id, firstName, lastName, position, userTag, avatarUrl }) => (
    <Link to={'/details/' + id}>
        <Wrapper>
            <Avatar src={avatarUrl} />
            <div>
                <UserDetails>
                    <UserName>{firstName} {lastName}</UserName>
                    <UserTag>{userTag}</UserTag>
                </UserDetails>
                <UserDepartament>{position}</UserDepartament>
            </div>
        </Wrapper>
    </Link>
);