import { Helmet } from 'react-helmet-async'

export function Home() {
  return (
    <>
      <Helmet title="Home" />
      <div className="flex flex-col gap-4">Hello world!</div>
    </>
  )
}
