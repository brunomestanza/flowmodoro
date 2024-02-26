import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { Clock } from '@/components/clock'

// import clockAlarmSound from '../../../assets/sounds/clock-alarm.mp3'
import { HomeTimeButton } from './home-time-button'

export function Home() {
  const [secondsAmount, setSecondsAmount] = useState(5)
  const [isCountingTime, setIsCountingTime] = useState(false)
  const [isFocusTime, setIsFocusTime] = useState(true)

  function startFocusTime() {
    setIsCountingTime(true)
    setIsFocusTime(true)
  }

  function finishFocusTime() {
    setIsCountingTime(false)
    setSecondsAmount(Math.round(secondsAmount / 5))
    setIsFocusTime(false)
  }

  function startBreakTime() {
    setIsCountingTime(true)
    setIsFocusTime(false)
  }

  function finishBreakTime() {
    setIsCountingTime(false)
    setSecondsAmount(0)
  }

  useEffect(() => {
    const clockTimer = setTimeout(() => {
      if (isCountingTime) {
        if (isFocusTime) {
          setSecondsAmount((state) => state + 1)
        } else {
          if (secondsAmount > 0) {
            setSecondsAmount((state) => state - 1)
          } else {
            setIsCountingTime(false)
            setIsFocusTime(true)
          }
        }
      }
    }, 1000)

    return () => {
      clearInterval(clockTimer)
    }
  }, [secondsAmount, isCountingTime, isFocusTime])

  return (
    <>
      <Helmet title="Home" />
      <Clock secondsAmount={secondsAmount} />
      <HomeTimeButton
        isFocusTime={isFocusTime}
        isCountingTime={isCountingTime}
        startFocusTime={startFocusTime}
        finishFocusTime={finishFocusTime}
        startBreakTime={startBreakTime}
        finishBreakTime={finishBreakTime}
      />
    </>
  )
}
