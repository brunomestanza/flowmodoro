import { ClockDigit } from './clock-digit'

interface ClockProps {
  secondsAmount: number
}

export function Clock({ secondsAmount }: ClockProps) {
  const minutes = String(Math.floor(secondsAmount / 60)).padStart(2, '0')
  const seconds = String(secondsAmount % 60).padStart(2, '0')

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-row items-center">
        <ClockDigit actualDigitIndex={Number(minutes[0])} />
        <ClockDigit actualDigitIndex={Number(minutes[1])} />
        <span className="text-[36px]">:</span>
        <ClockDigit actualDigitIndex={Number(seconds[0])} />
        <ClockDigit actualDigitIndex={Number(seconds[1])} />
      </div>
      {/* <div>
        <span className="text-[120px]">{minutes[0]}</span>
        <span className="text-[120px]">{minutes[1]}</span>
        <span className="text-[120px]">:</span>
        <span className="text-[120px]">{seconds[0]}</span>
        <span className="text-[120px]">{seconds[1]}</span>
      </div> */}
    </div>
  )
}
