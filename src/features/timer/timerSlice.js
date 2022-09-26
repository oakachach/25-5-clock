import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    status: 'paused', // running | paused
    breakLength: 5,
    sessionLength: 25,
    timer: '25:00'
}

const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        decrementBreak(state) {

        },
        incrementBreak(state) {

        },
        decrementSession(state) {

        },
        incrementSession(state) {

        },
        resetTimer(state) {
            
        }

    },
});