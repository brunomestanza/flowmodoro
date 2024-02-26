import { AlarmClock } from 'lucide-react'

import { ThemeToggle } from '../theme/theme-toggle'
import { Separator } from '../ui/separator'
import { Navigation } from './navigation'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <AlarmClock className="h-6 w-6" />

        <Separator orientation="vertical" className="h-6" />

        <div className="hidden md:block">
          <Navigation />
        </div>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          {/* <div className="hidden md:block">
            <AccountMenuDesktop />
          </div>
          <div className="block md:hidden">
            <AccountMenuMobile />
          </div> */}
        </div>
      </div>
    </div>
  )
}
