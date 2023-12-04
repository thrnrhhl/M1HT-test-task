import styled from "styled-components";

export const DetailMain = styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;


export const UserScreen1 = styled.div`
    background-color: var(--grey-type-1);
`;

export const WrapperBack = styled.div`
    display: flex;
    align-items: center;
    padding: 22px 0px 14px 24px;
`;

export const UserBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 24px;
    padding-right: 24px;
    margin-top: 12px;
    padding-bottom: 24px;
`;

export const UserAvatar = styled.img`
    border-radius: 9999px;
    margin-bottom: 24px;
`;

export const UserDetails = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 12px;
`;

export const UserName = styled.p`
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    color: var(--black);
`;

export const UserTag = styled.span`
    font-size: 17px;
    font-weight: 400;
    color: var(--grey-type-3);
    line-height: 22px;
`;

export const UserDepartament = styled.p`
    font-size: 13px;
    font-weight: 400;
    color: var(--grey-type-4);
    line-height: 16px;
`;

export const ContactBlock = styled.div`
    background: #FFFFFF;
    padding: 0px 16px 0px 16px;
    flex-grow: 1;
`;

export const ContactItem = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    height: 60px;
`;

export const BirthDate = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    color: var(--black);
    flex-grow: 1
`;

export const Age = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: var(--grey-type-3);
    line-height: 20px;
`;

export const Phone = styled.a`
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    color: var(--black);
    flex-grow: 1
`;

export const Divider = styled.div`
    height: 6px;
    border-bottom: 1px solid var(--grey-type-1);
    width: 100%
`;