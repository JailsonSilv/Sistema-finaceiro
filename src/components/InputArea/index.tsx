import * as C from './styles'
import { Item } from '../../Types/Item'
import { useState } from 'react'

type Props = {
    onAdd: (item: Item) => void;
}

export const InputArea = ({ onAdd }: Props) => {
    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(2023, 2, 25),
            category: "food",
            title: 'Item de teste',
            value: 250.30
        };
        onAdd(newItem);
    }
    return (
        <C.Container>
            <C.InputLabel>
                <C.InputTitle>Data</C.InputTitle>
                <C.Input type="date"/>
            </C.InputLabel>
        </C.Container>
    );
}