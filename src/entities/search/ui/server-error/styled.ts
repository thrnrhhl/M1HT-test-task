import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TextEmoji = styled.p`
    font-size: 56px;
    line-height: 56px;
    margin-bottom: 8px;
`;

export const TextPrimary = styled.p`
    font-size: 17px;
    color: var(--black);
    font-weight: 600;
    line-height: 22px;
    margin-bottom: 12px;
`;

export const TextSecondary = styled.p`
    font-size: 16px;
    color: var(--grey-type-3);
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 12px;
`;

export const ButtonRetry = styled.button`
    font-size: 16px;
    color: var(--purple);
    font-weight: 600;
    line-height: 20px;
`;