interface ClockProps {
  secondsAmount: number
}

export function Clock({ secondsAmount }: ClockProps) {
  const minutes = Math.floor(secondsAmount / 60)
  const seconds = secondsAmount % 60

  return (
    <div className="flex flex-col items-center gap-4">
      <div>
        <span className="text-[120px]">{String(minutes).padStart(2, '0')}</span>
        <span className="text-[120px]">:</span>
        <span className="text-[120px]">{String(seconds).padStart(2, '0')}</span>
      </div>
    </div>
  )
}
