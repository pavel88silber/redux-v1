// Хранилище это не база данных, это хран. которое живет пока работает прилож. Реакт

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Counter/counterSlice'
import myTextReducer from '../DataDesk/mytextSlice'

export default configureStore({
    // два хранилещя
    reducer: {
        counter: counterReducer,
        mytext: myTextReducer
    },
})