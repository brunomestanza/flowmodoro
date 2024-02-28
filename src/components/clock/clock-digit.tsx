import { useEffect, useState } from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

interface ClockDigitProps {
  actualDigitIndex: number
}

export function ClockDigit({ actualDigitIndex }: ClockDigitProps) {
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) {
      return
    }

    api.scrollTo(actualDigitIndex)
  }, [api, actualDigitIndex])

  return (
    <Carousel
      opts={{
        align: 'start',
        containScroll: false,
        watchDrag: false,
      }}
      orientation="vertical"
      className="w-[80px] md:w-[100px]"
      setApi={setApi}
    >
      <CarouselContent className="-mt-1 h-[100px]">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="pt-1">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
