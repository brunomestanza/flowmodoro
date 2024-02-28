import { Menu } from 'lucide-react'

import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Navigation } from './navigation'

export function AccountMenuMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="my-6 block md:hidden">
          <Navigation />
        </div>
      </SheetContent>
    </Sheet>
  )
}
