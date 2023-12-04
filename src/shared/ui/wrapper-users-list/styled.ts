import styled from "styled-components";

interface Styled {
    className: string;
};

export const StyledDiv = styled.div<Styled>`
    padding: 16px;
    flex-grow: 1;
    overflow: auto;
    ${(props) => props.className}
`;