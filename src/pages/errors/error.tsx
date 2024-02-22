import { Link, useRouteError } from 'react-router-dom'

export function ErrorPage() {
  const error = useRouteError() as Error

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-4xl font-bold text-destructive">
        Ops... Ocorreu um erro não esperado
      </h1>
      <p className="text-accent-foreground">
        Um erro não mapeado aconteceu na aplicação, abaixo você encontra mais
        detalhes, que podem ser usados para o devido suporte:
      </p>
      <pre>{error?.message || JSON.stringify(error)}</pre>
      <p className="text-accent-foreground">
        Voltar para o{' '}
        <Link to="/" className="text-sky-500 dark:text-sky-400">
          início
        </Link>
      </p>
    </div>
  )
}
