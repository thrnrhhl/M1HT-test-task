import { ChangeEvent, FC } from "react";
import { useId } from "react";
import { HTMLAttributes } from "react";
import './styles.css';

interface Props extends HTMLAttributes<HTMLInputElement> {
    name: string;
    checked: boolean;
    onChange: (ev: ChangeEvent<HTMLInputElement>) => void;
    value: string | number;
};

export const InputRadio: FC<Props> = ({ className, ...props }) => {
    const id = useId()

    return (
        <>
            <input type="radio" id={id} className="input_radio__input--hidden" {...props} />
            <label htmlFor={id} className="input_radio__label"></label>
        </>
    );
};