import React, { useState } from "react";
// useSelector для обращения к redux хранилищю / useDispatch метод который позволяет посылать команду для выполнения какова то action (тоесть каковато reducer)
import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    selectCount,
    selectText
} from './mytextSlice'

export default function Mytext() {
    // Getters from redux store (count and text)
    const count = useSelector(selectCount)
    const text = useSelector(selectText)
    // сокращение метода useDispatch() чтобы было удобнее использовать
    const dispatch = useDispatch()

    const buttonHandler = () => {
        // способ обращения к храгилищу, с методом который хочу запустить
        dispatch(increment())
    }

    return (
        <div>
            <button onClick={buttonHandler}> + </button>
            <h2>{count}</h2>
            <h2>{text}</h2>
        </div>
    )
}