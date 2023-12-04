
import { SearchNotFoundWrapper, CenteredContent, BigEmoji, Title, Description } from "./styled";

export const SearchNotFound = () => (
    <SearchNotFoundWrapper>
        <CenteredContent>
            <BigEmoji>🔍</BigEmoji>
            <Title>Мы никого не нашли</Title>
            <Description>Попробуй скорректировать запрос</Description>
        </CenteredContent>
    </SearchNotFoundWrapper>
);