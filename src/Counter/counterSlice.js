import { createSlice } from '@reduxjs/toolkit';

// createSlice одна из функций redux-toolkit котороя позволяет быстро сконфигурировать хранилище и запустить его
export const counterSlice = createSlice({
    // имя хранилещя
    name: 'counter',
    // начальные состояния
    initialState: {
        value: 0,
        text: 'privet'
    },
    // редюсер это функции которын доступны для данного хранилящя (для изменения данных в хранилище)
    reducers: {
        increment: state => {
            state.value += 15;
        },
        showConsole: state => {
            state.text = 'hello';
        },

    },
});

// Импорт методов
export const { increment, showConsole } = counterSlice.actions

// Геттеры для получения данных из хранилищя
export const selectCount = state => state.counter.value
export const selectText = state => state.counter.text

export default counterSlice.reducer

