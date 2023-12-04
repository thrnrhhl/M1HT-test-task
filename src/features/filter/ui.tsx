import { ChangeEvent, useState } from "react";
import * as Dialog from '@radix-ui/react-dialog';
import { useDispatch } from "react-redux";
import { setTypeSort } from "@/src/entities/search/model";
import { useAppSelector } from "@/src/shared/hooks";
import { InputRadio } from "@/src/shared/ui";
import { FilterButton, FilterDialogHeadWrapper, FilterDialogTitle, FilterLabelSort, Spacer20, WrapperInputs } from "./styled";

export const Filter = () => {
    const searchState = useAppSelector(state => state.search.typeSort);
    const [open, setOpen] = useState<boolean>();
    const dispatch = useDispatch();

    // Отрытие/закрытие модального окна
    const handleToggle = () => {
        setOpen(prev => !prev);
    }

    // Изменение инпута
    const handleChangeSort = (ev: ChangeEvent<HTMLInputElement>) => {
        if (ev.target.value === 'alphabet' || ev.target.value === 'birthdate') {
            dispatch(setTypeSort(ev.target.value));
            setOpen(prev => !prev);
        }
    }

    return (
        <>
            <FilterButton onClick={handleToggle}>
                <img src="/filter.svg" alt="filter" width="24" height="24" />
            </FilterButton>
            <Dialog.Root open={open} onOpenChange={handleToggle}>
                <Dialog.Overlay className="dialog__overlay" />
                <Dialog.Content className="dialog__content">
                    <Spacer20 />
                    <FilterDialogHeadWrapper>
                        <Dialog.Close className="dialog__close">
                            <img src="/close-modal.svg" alt="close-modal" width="24" height="24" />
                        </Dialog.Close>
                        <FilterDialogTitle>Сортировка</FilterDialogTitle>
                    </FilterDialogHeadWrapper>

                    <WrapperInputs>
                        <FilterLabelSort>
                            <InputRadio
                                name="filter"
                                checked={searchState === 'alphabet'}
                                value="alphabet"
                                onChange={handleChangeSort}
                            />
                            По алфавиту
                        </FilterLabelSort>
                        <FilterLabelSort>
                            <InputRadio
                                name="filter"
                                checked={searchState === 'birthdate'}
                                value="birthdate"
                                onChange={handleChangeSort}
                            />
                            По дню рождения
                        </FilterLabelSort>
                    </WrapperInputs>
                </Dialog.Content>
            </Dialog.Root>

        </>
    );
};