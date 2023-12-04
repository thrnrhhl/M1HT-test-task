import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 6px 0px 6px 0px;
    cursor: pointer;
`;

export const Avatar = styled.div`
   width: 72px;
   height: 72px;
   border-radius: 9999px;
   background: linear-gradient(to right, #F3F3F6, #FAFAFA);
`;

export const UserDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

export const UserName = styled.div`
    width: 144px;
    height: 16px;
    border-radius: 9999px;
    background-image: linear-gradient(to right, #F3F3F6, #FAFAFA);
`;

export const UserDepartament = styled.div`
    width: 80px;
    height: 12px;
    border-radius: 9999px;
    background-image: linear-gradient(to right, #F3F3F6, #FAFAFA);
`;