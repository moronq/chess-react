import React, { FC, useEffect, useRef, useState } from 'react'
import { Colors } from '../models/Colors'
import { Player } from '../models/Players'

interface TimerProps {
  currentPlayer: Player | null
  restart: () => void
}

const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
  const [whiteTime, setWhiteTime] = useState(300)
  const [blackTime, setBlackTime] = useState(300)
  const timer = useRef<null | ReturnType<typeof setInterval>>(null)

  useEffect(() => {
    startTimer()
  }, [currentPlayer])

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current)
    }
    const callback =
      currentPlayer?.color === Colors.WHITE
        ? decrementWhiteTimer
        : decrementBlackTimer
    timer.current = setInterval(callback, 1000)
  }

  function decrementWhiteTimer() {
    setWhiteTime((prev) => prev - 1)
  }
  function decrementBlackTimer() {
    setBlackTime((prev) => prev - 1)
  }

  function handleRestart() {
    setBlackTime(300)
    setWhiteTime(300)
    restart()
  }

  return (
    <div>
      <div>
        <button onClick={handleRestart}>Restart game</button>
      </div>
      <h3>Черные - {blackTime}</h3>
      <h3>Черные - {whiteTime}</h3>
    </div>
  )
}

export default Timer
