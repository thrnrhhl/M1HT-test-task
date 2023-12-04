import { styled } from "styled-components";


export const Input = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 16px;
    background-color: var(--grey-type-1);
    padding: 0px 44px 0px 44px;
    font-size: 15px;
    outline: none;
    &::placeholder {
        font-size: 15px;
        color: var(--grey-type-2);
        font-weight: 500;
        line-height: 20px;
    }
`;