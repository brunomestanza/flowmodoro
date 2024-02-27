import { Button } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

export function SuggestionHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button className="w-fit p-0" variant="link">
          faço de outra forma
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Eu acredito em pausa baseadas em tempo de foco de forma mais
            proporcional. Então realizo uma conta simples para definir minhas
            pausas.
          </p>
          <p className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            Tempo de foco / 5 minutos
          </p>
          <p className="text-sm text-muted-foreground">
            Dessa forma, consigo focar por algumas horas, e depois ter um
            descanso merecido, oque me ajuda em grandes sessões de estudo.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
