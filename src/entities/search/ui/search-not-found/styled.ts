import { WrapperUsersList } from "@/src/shared/ui";
import styled from "styled-components";

export const SearchNotFoundWrapper = styled(WrapperUsersList)`
    display: flex;
    justify-content: center;
`;

export const CenteredContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const BigEmoji = styled.p`
    font-size: 56px;
    line-height: 56px;
`;

export const Title = styled.h3`
    font-size: 17px;
    color: var(--black);
    font-weight: 600;
    line-height: 22px;
    margin-top: 8px;
`;

export const Description = styled.p`
    font-size: 16px;
    color: var(--grey-type-3);
    font-weight: 400;
    line-height: 20px;
    margin-top: 12px;
`;