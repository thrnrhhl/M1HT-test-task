import { FC } from "react";
import { DividerYearContainer } from "./styled";

type Props = {
    text: string | number;
};

export const DividerYear: FC<Props> = ({ text }) => (
    <DividerYearContainer>{text}</DividerYearContainer>
)