import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    status: 'paused', // running | paused
    turnType: 'Session', // Session | Break
    breakLength: 5,
    sessionLength: 25,
    timeLeft: '25:00'
}

const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        decrementBreak(state) {
            console.log('decrement break');
        },
        incrementBreak(state) {
            console.log('increment break');
        },
        decrementSession(state) {
            console.log('decrement session');
        },
        incrementSession(state) {
            console.log('increment session');
        },
        resetTimer(state) {
            console.log('reset timer');
        },
        startStop(state) {
            console.log('start stop');
        }

    },
});

export const { 
    decrementBreak,
    incrementBreak,
    decrementSession,
    incrementSession,
    resetTimer,
    startStop
} = timerSlice.actions;

export default timerSlice.reducer;