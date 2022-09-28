import { useSelector, useDispatch } from 'react-redux';
import {
    decrementBreak,
    incrementBreak,
    decrementSession,
    incrementSession,
    resetTimer,
    startStop
} from './timerSlice';


export const Break = () => {
    const breakLength = useSelector((state) => state.timer).breakLength;
    const dispatch = useDispatch();

    return (
        <div id='break-section'>
        <h3>Break Length</h3>
        <div className='interval-buttons'>
            <i onClick={ () => dispatch(decrementBreak())} id ='break-decrement' className="icon fa-solid fa-arrow-down"></i>
            <h3 id='break-length'>{ breakLength }</h3>
            <i onClick={ () => dispatch(incrementBreak())} id='break-increment' className="icon fa-solid fa-arrow-up"></i>
        </div>
        </div>
    );
}

export const Session = () => {
    const sessionLength = useSelector((state) => state.timer.sessionLength);
    const dispatch = useDispatch();

    return(
        <div id='session-section'>
        <h3>Session Length</h3>
        <div className='interval-buttons'>
            <i onClick={ () => dispatch(decrementSession())} id='session-decrement' className="icon fa-solid fa-arrow-down"></i>
            <h3 id='session-length'>{ sessionLength }</h3>
            <i onClick={ () => dispatch(incrementSession())} id='session-increment' className="icon fa-solid fa-arrow-up"></i>
        </div>
        </div>
    );
}

const TimerLabel = () => {
    const turnType = useSelector((state) => state.timer.turnType)

    return(
        <>
        <h3 id='timer-label'>{ turnType }</h3>
        </>
    );
}

const TimeLeft = () => {
    const timeLeft = useSelector((state) => state.timer.timeLeft);
    // const isRunning = useSelector((state) => state.timer.isRunning)

    return(
        <>
        <h1 id='time-left'>{ timeLeft }</h1>
        </>
    );
}

export const Clock =() => {
    return(
        <div id='clock-section'>
        <TimerLabel />
        <TimeLeft />
        </div>
    );
}

export const Buttons = () => {
    const dispatch = useDispatch();

    return(
        <div id='button-section'>
        <div onClick={ () => dispatch(startStop())} className='icon' id='start-stop'>
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-pause"></i>
        </div>
        <i onClick={ () => dispatch(resetTimer())} className="fa-solid fa-rotate icon" id='reset'></i>
        </div>
    );
}

