import styled from "styled-components";

export const DividerYearContainer = styled.div`
    color: var(--grey-type-2);
    font-size: 15px;
    line-height: 20px;
    display: flex;
    align-items: center;
    gap: 74px;

    &::before,
    &::after {
        content: '';
        display: block;
        background-color: #C3C3C6;
        width: 100%;
        height: 1px;
    }

    &::before {
        top: 50%;
        left: 0;
    }

    &::after {
        top: 50%;
        right: 0;
    }
`;
