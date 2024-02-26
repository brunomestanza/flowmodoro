import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { Clock } from '@/components/clock'
import { Button } from '@/components/ui/button'

export function Home() {
  const [secondsAmount, setSecondsAmount] = useState(10 * 60)
  const [isCountingTime, setIsCountingTime] = useState(false)
  const [isFocusTime, setIsFocusTime] = useState(true)

  function handleSetSecondsAmount(newSecondsAmount: number) {
    setSecondsAmount(newSecondsAmount)
  }

  function startFocusTime() {
    setIsCountingTime(true)
    setIsFocusTime(true)
  }

  function finishFocusTime() {
    setIsCountingTime(false)
    handleSetSecondsAmount(Math.round(secondsAmount / 5))
    setIsFocusTime(false)
  }

  function startBreakTime() {
    setIsCountingTime(true)
    setIsFocusTime(false)
  }

  function finishBreakTime() {
    setIsCountingTime(false)
    handleSetSecondsAmount(0)
  }

  useEffect(() => {
    const clockTimer = setTimeout(() => {
      if (isCountingTime) {
        if (isFocusTime) {
          setSecondsAmount((state) => state + 1)
        } else {
          setSecondsAmount((state) => state - 1)
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

      {isFocusTime && !isCountingTime && (
        <Button onClick={startFocusTime}>Iniciar tempo de foco</Button>
      )}

      {isFocusTime && isCountingTime && (
        <Button variant="secondary" onClick={finishFocusTime}>
          Finalizar tempo de foco
        </Button>
      )}

      {!isFocusTime && !isCountingTime && (
        <Button onClick={startBreakTime}>Iniciar tempo de pausa</Button>
      )}

      {!isFocusTime && isCountingTime && (
        <Button variant="secondary" onClick={finishBreakTime}>
          Finalizar tempo de pausa
        </Button>
      )}
    </>
  )
}
