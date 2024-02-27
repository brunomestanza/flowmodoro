import { AlertTriangle, Bed, Briefcase, TimerOff } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { toast } from 'sonner'

import { Clock } from '@/components/clock'

import clockAlarmSound from '../../../assets/sounds/clock-alarm.mp3'
import { HomeTimeButton } from './home-time-button'

export function Home() {
  const [secondsAmount, setSecondsAmount] = useState(10 * 60)
  const [isCountingTime, setIsCountingTime] = useState(false)
  const [isFocusTime, setIsFocusTime] = useState(true)

  function handleCancelFinishBreakTime(remainingTime: number) {
    setSecondsAmount(remainingTime)
    setIsCountingTime(true)
    setIsFocusTime(false)
  }

  function startFocusTime() {
    setIsCountingTime(true)
    setIsFocusTime(true)
  }

  function finishFocusTime() {
    const restTime = Math.round(secondsAmount / 5)
    if (restTime <= 0) {
      toast.error('O tempo de descanso deve ser maior que 0 segundos.', {
        icon: <AlertTriangle />,
      })
    } else {
      setIsCountingTime(false)
      setSecondsAmount(restTime)
      setIsFocusTime(false)
      toast.success('Período de foco finalizado.', {
        icon: <Briefcase />,
      })
    }
  }

  function startBreakTime() {
    setIsCountingTime(true)
    setIsFocusTime(false)
  }

  function finishBreakTime() {
    const remainingTime = secondsAmount
    setIsCountingTime(false)
    setSecondsAmount(0)
    setIsFocusTime(true)
    toast('Pausa finalizada antes do tempo.', {
      icon: <TimerOff />,
      cancel: {
        label: 'Retomar pausa',
        onClick: () => handleCancelFinishBreakTime(remainingTime),
      },
    })
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
            new Audio(clockAlarmSound).play()
            toast.success('Tempo de descanso finalizado.', { icon: <Bed /> })
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
