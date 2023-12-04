import { WrapperUsersList } from "@/src/shared/ui";
import { memo } from "react";
import { FC } from "react";
import { ButtonRetry, TextEmoji, TextPrimary, TextSecondary, Wrapper } from "./styled";

interface Props {
    onRefetch: () => void;
}

export const ServerError: FC<Props> = memo(({ onRefetch }) => (
    <WrapperUsersList className="flex justify-center">
        <Wrapper>
            <TextEmoji>🛸</TextEmoji>
            <TextPrimary>Какой-то сверхразум все сломал</TextPrimary>
            <TextSecondary>Постараемся быстро починить</TextSecondary>
            <ButtonRetry onClick={onRefetch}>Попробовать снова</ButtonRetry>
        </Wrapper>
    </WrapperUsersList>
));