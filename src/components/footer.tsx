import { Github, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from './ui/button'
import { Separator } from './ui/separator'

export function Footer() {
  return (
    <footer>
      <Separator />
      <div className="flex flex-col items-center justify-between gap-4 p-4 md:flex-row">
        <span className="text-sm">
          Feito por <strong className="text-primary">Bruno Mestanza</strong>
        </span>
        <div className="flex items-center gap-4">
          <Button
            variant="secondary"
            className="flex items-center gap-2"
            asChild
          >
            <Link
              to="https://www.linkedin.com/in/brunomestanza/"
              target="_blank"
            >
              LinkedIn <Linkedin className="size-4" />
            </Link>
          </Button>
          <Button
            variant="secondary"
            className="flex items-center gap-2"
            asChild
          >
            <Link
              to="https://github.com/brunomestanza/flowmodoro"
              target="_blank"
            >
              Link do projeto <Github className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}
