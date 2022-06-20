import { createSlice } from '@reduxjs/toolkit';

// createSlice одна из функций redux-toolkit котороя позволяет быстро сконфигурировать хранилище и запустить его
export const mytextSlice = createSlice({
    // имя хранилещя
    name: 'mytext',
    // начальные состояния
    initialState: {
        value: 0,
        text: 'olla'
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
export const { increment, showConsole } = mytextSlice.actions

// Геттеры для получения данных из хранилищя
export const selectCount = state => state.mytext.value
export const selectText = state => state.mytext.text

export default mytextSlice.reducer

