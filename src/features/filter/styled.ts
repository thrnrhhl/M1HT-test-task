import styled from "styled-components";

export const FilterButton = styled.button`
    position: absolute;
    top: 8px;
    right: 12px;
`;


export const Spacer20 = styled.div`
    width: 100%;
    height: 20px;
`;

export const FilterDialogHeadWrapper = styled.div`
    position: relative;
    margin-top: 4px;
`;

export const FilterDialogTitle = styled.h3`
    color: var(--black);
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
`;

export const WrapperInputs = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 16px;
`;

export const FilterLabelSort = styled.label`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 16px;
    color: var(--black);
    font-weight: 500;
    line-height: 20px;
    padding: 18px 0px 18px 0px;
    cursor: pointer;
`;