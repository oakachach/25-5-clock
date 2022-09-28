import { createSlice } from '@reduxjs/toolkit';
import { store } from '../../app/store';


const secondsToTime = (time) => {
    let seconds = (time % 60).toString();
        const minutes = (Math.floor(time / 60)).toString();
        if (seconds.length === 1) {
            seconds = '0' + seconds;
        }
        return minutes + ':' + seconds;
}

const initialState = {
    isRunning : false,
    turnType : 'Session', // Session | Break
    breakLength : 5,
    sessionLength : 25,
    get timeLeftInSeconds() { return this.sessionLength * 60 },
    get timeLeft() {
        return(secondsToTime(this.timeLeftInSeconds));
    }
}

const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        decrementBreak(state) {
            state.breakLength -= 1;
        },
        incrementBreak(state) {
            state.breakLength += 1;
        },
        decrementSession(state) {
            state.sessionLength -= 1;
        },
        incrementSession(state) {
            state.sessionLength += 1;
        },
        resetTimer(state) {
            // state.isRunning = false;
            switch(state.turnType) {
                case 'Session':
                    state.timeLeft = state.sessionLength.toString() + ':00';
                    break;
                case 'Break':
                    state.timeLeft = state.breakLength.toString() + ':00';
                    break;
                default:
                    state.timeLeft = '00:00';
                    break;
            }
        },
        TEST(state) {
            console.log('dispatch test');
        },
        startStop(state) {
            state.isRunning = !state.isRunning;
            console.log(store.getState());
            // timerSlice.caseReducers.countDown(state);
        },
        countDown(state){
            setInterval(() => {
                state.timeLeftInSeconds -= 1;
state.timeLeft = secondsToTime(state.timeLeftInSeconds);
            }, 1000);
            
        }
    },
});

export const { 
    decrementBreak,
    incrementBreak,
    decrementSession,
    incrementSession,
    resetTimer,
    startStop,
    countDown,
    TEST
} = timerSlice.actions;

export default timerSlice.reducer;