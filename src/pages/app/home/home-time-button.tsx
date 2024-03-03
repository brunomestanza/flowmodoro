import { Button } from '@/components/ui/button'

interface HomeTimeButtonProps {
  isFocusTime: boolean
  isCountingTime: boolean
  startFocusTime: () => void
  finishFocusTime: () => void
  startBreakTime: () => void
  finishBreakTime: () => void
}

export function HomeTimeButton({
  isFocusTime,
  isCountingTime,
  startFocusTime,
  finishFocusTime,
  startBreakTime,
  finishBreakTime,
}: HomeTimeButtonProps) {
  if (isFocusTime && !isCountingTime) {
    return (
      <>
        <Button onClick={startFocusTime}>Iniciar tempo de foco</Button>
        <p className="text-center text-sm text-muted-foreground">
          É recomendado um tempo de foco de no mínimo 25 minutos.
        </p>
      </>
    )
  }

  if (isFocusTime && isCountingTime) {
    return (
      <>
        <Button variant="secondary" onClick={finishFocusTime}>
          Finalizar tempo de foco
        </Button>
        <p className="text-center text-sm text-muted-foreground">
          É recomendado um tempo de foco de no mínimo 25 minutos.
        </p>
      </>
    )
  }

  if (!isFocusTime && !isCountingTime) {
    return (
      <>
        <Button onClick={startBreakTime}>Iniciar tempo de pausa</Button>
        <p className="text-center text-sm text-muted-foreground">
          Durante esse tempo, tente descansar os olhos, não olhar para telas e
          tomar um ar.
        </p>
      </>
    )
  }

  if (!isFocusTime && isCountingTime) {
    return (
      <>
        <Button variant="secondary" onClick={finishBreakTime}>
          Finalizar tempo de pausa
        </Button>
        <p className="text-center text-sm text-muted-foreground">
          Caso queira, você pode encerrar a pausa antes do tempo necessário,
          porém, não é recomendado.
        </p>
      </>
    )
  }
}
