import { FC, HTMLAttributes } from "react";
import { StyledDiv } from "./styled";

interface Props extends HTMLAttributes<HTMLDivElement> { }

export const WrapperUsersList: FC<Props> = ({ className = "", children, ...props }) => {

    return (
        <StyledDiv className={className} {...props}>
            {children}
        </StyledDiv>
    );
};