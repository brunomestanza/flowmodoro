import { FileClock, TerminalSquare } from 'lucide-react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

interface FlowmodoroTypeToggleProps {
  flowType: 'dev-suggestion' | 'zoe-suggestion'
  setFlowType: (flowType: 'dev-suggestion' | 'zoe-suggestion') => void
}

export function FlowmodoroTypeToggle({
  flowType,
  setFlowType,
}: FlowmodoroTypeToggleProps) {
  function handleSetFlowType(newFlowType: string) {
    if (newFlowType === 'dev-suggestion' || newFlowType === 'zoe-suggestion') {
      setFlowType(newFlowType)
    } else {
      toast.error('Ocorreu um erro inesperado.')
    }
  }

  return (
    <div className="flex flex-col gap-3 lg:mr-4 lg:items-end">
      <ToggleGroup
        type="single"
        variant="outline"
        value={flowType}
        onValueChange={handleSetFlowType}
      >
        <ToggleGroupItem
          value="dev-suggestion"
          aria-label="Ativar sugestão do desenvolvedor"
        >
          <span className="flex items-center gap-2">
            <TerminalSquare />
          </span>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="zoe-suggestion"
          aria-label="Ativar sugestão de Zoe Read Bivens"
        >
          <span className="flex items-center gap-2">
            <FileClock />
          </span>
        </ToggleGroupItem>
      </ToggleGroup>
      <p className="text-center text-sm text-muted-foreground">
        {flowType === 'dev-suggestion'
          ? 'Sugestão do desenvolvedor'
          : 'Sugestão de Zoë Read-Bivens'}
      </p>
      <Button variant="link" asChild>
        <Link to="/sobre-o-flowmodoro" className="px-0">
          Para mais informações, clique aqui.
        </Link>
      </Button>
    </div>
  )
}
