import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 6px 0px 6px 0px;
    cursor: pointer;
`;

export const Avatar = styled.img`
    width: 72px;
    height: 72px;
    border-radius: 100%;
`;

export const UserDepartament = styled.p`
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    color: var(--grey-type-4);
    width: fit;
`;

export const UserTag = styled.span`
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: var(--grey-type-3);
`;

export const UserName = styled.p`
    font-size: 16x;
    font-weight: 500;
    line-height: 20px;
    color: var(--black);
`;

export const UserDetails = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 3px 0px 3px 0px;
`;