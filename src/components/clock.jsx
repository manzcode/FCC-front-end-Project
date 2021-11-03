import React, { memo, useCallback, useState, useEffect } from 'react'
import song from './data/build_testable-projects-fcc_audio_BeepSound.wav'



const Button = memo(({children, onClick}) => {
    return <button className="btn btn-primary" onClick={onClick}>
        {children}
    </button>
})

const TimerValue = memo(({children}) => {
    return <div className="mx-2 col-lg-3 alert alert-info text-center">
        {children}
    </div>
})

const TheClock = ({first, second, onReset, disable}) => {

    const [timer, setTimer] = useState(null)
    const [timeBreak, setTimeBreak] = useState(null)
    const [countDown, setCountDown] = useState(null)
    const [startCount, setStartCount] = useState(null)
    const [end, setEnd] = useState(false)

    const begin = () => {
        setCountDown(c => (c === '00') ? 0 : c - 1)
    }

    const start = useCallback(() => { 
        disable(true)
        setStartCount(window.setInterval(() => begin(), 1000))
    }, [disable])

    const stop = useCallback(() => {
        disable(false)
        clearInterval(startCount)
        setStartCount(null)
    }, [startCount, disable])

    const reset = useCallback(() => {
        clearInterval(startCount)
        setStartCount(null)
        setCountDown('00')
        setEnd(false)
        setTimer(25)
        setTimeBreak(5)
        onReset()
    }, [onReset, startCount])

    useEffect(() => {
        setTimer(first)
        setTimeBreak(second)
        setCountDown('00')
    }, [first, second])

    if(countDown === 0){
        if(end) {
            setTimeBreak(c => c - 1)
            setCountDown(5)
        }else {
            setTimer(c => c - 1)
            setCountDown(5)
        }
    } 

    if(countDown === 0 && timer === 0){
        document.getElementById('playthis').play()
        setTimeBreak(c => c - 1)
        setEnd(true)
    } 

    if(countDown === 0 && timeBreak === 0){
        reset()
    }
    
    return <TimerValue>
    <p>
        {!end ? timer : timeBreak} {`: ${countDown}`}
    <audio id='playthis' src={song}></audio>
     </p> 
        <Button onClick={start}>
            start
        </Button>
        <Button onClick={stop}>
        stop
        </Button>
        <Button onClick={reset}>
        reset
        </Button>
    </TimerValue>
}

const Counter = ({nbr, onDecrement, onIncrement, disable}) =>{
    const decr = useCallback(() => {
        if(disable){
            return 
        }
        onDecrement()
    }, [disable, onDecrement])

    const incr = useCallback(() => {
        if(disable){
            return 
        }
        onIncrement()
    }, [disable, onIncrement])

    return <TimerValue>
    <p>
        {nbr}
    </p>
    <Button onClick={decr}>
        -
    </Button>
    <Button onClick={incr}>
    +
    </Button>
</TimerValue>
}

export function Clock () {
    const [timer, setTimer] = useState(25)
    const [breakTime, setBreakTime] = useState(5)
    const [disable, setDisable] = useState(false)

    const decr = useCallback(() => {
        setTimer(t => (t <= 1) ? 1 : t - 1)
    }, [])

    const incr = useCallback(() => {
        setTimer(t => t + 1)
    }, [])

    const decrBT = useCallback(() => {
        setBreakTime(t => (t <= 1) ? 1 : t - 1)
    }, [])
    const incrBT = useCallback(() => {
        setBreakTime(t => t + 1)
    }, [])

    const reset = () => {
        setTimer(25)
        setBreakTime(5)
        setDisable(false)
    }
        
    return <div className="container">

      <div className="row my-5 py-5 justify-content-center">
      <Counter nbr={timer} onDecrement={decr} onIncrement={incr} disable={disable} />

      <TheClock first={timer} second={breakTime} disable={setDisable} onReset={reset}  />

      <Counter nbr={breakTime} onDecrement={decrBT} onIncrement={incrBT} disable={disable} />
      </div>
    </div>
} 