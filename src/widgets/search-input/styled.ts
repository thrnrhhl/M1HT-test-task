import styled from "styled-components";

interface Styled {
    $offlineStyle: boolean;
    $loadingStyle: boolean;
};


export const SearchInputContainer = styled.div``;

export const SearchInputHeadWrapper = styled.div<Styled>`
    background-color: ${({ $offlineStyle, $loadingStyle }) => 
        $offlineStyle ? '#F44336' : $loadingStyle ? 'var(--purple)' : '#fff'
    };
    padding: 16px 24px 12px 24px;
`;

export const SearchIcon = styled.img`
    position: absolute;
    top: 8px;
    left: 12px;
`

export const Title = styled.div<Styled>`
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    color: ${({ $offlineStyle, $loadingStyle }) => 
        ($offlineStyle || $loadingStyle) ? '#FFFFFF' : 'var(--black)'
    };
`;

export const WrapperContent1 = styled.div<Styled>`
    padding: 6px 16px 6px 16px;
    background-color: ${({ $offlineStyle, $loadingStyle }) => 
        $offlineStyle ? '#F44336' : $loadingStyle ? 'var(--purple)' : '#fff'
    };
`;

export const WrapperContent2 = styled.div<Styled>`
    padding: 8px 24px 8px 24px;
    height: 52px;
    background-color: ${({ $offlineStyle, $loadingStyle }) => 
        $offlineStyle ? '#F44336' : $loadingStyle ? 'var(--purple)' : '#fff'
    };
`;

export const TextMessage = styled.p`
    font-size: 13px;
    color: #FFFFFF;
    font-weight: 500;
    line-height: 16px
`;