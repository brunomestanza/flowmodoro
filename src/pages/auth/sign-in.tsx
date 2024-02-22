import { zodResolver } from '@hookform/resolvers/zod'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const signInForm = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const form = useForm<SignInForm>({
    resolver: zodResolver(signInForm),
    defaultValues: { email: '', password: '' },
  })

  async function handleSignIn(data: SignInForm) {
    try {
      console.log(data)
    } catch (error) {
      console.log('Error in sign in.')
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="mb-8 flex flex-col md:mb-0 md:p-8">
        <Button
          variant="ghost"
          asChild
          className="my-4 md:absolute md:right-8 md:top-8 md:my-0"
        >
          <Link to="/sign-up" className="flex gap-2">
            <p>É novo conosco?</p>
            <span className="text-primary">Crie sua conta</span>
          </Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold -tracking-tight">
              Acessar aplicação
            </h1>
            <p className="text-sm text-muted-foreground">
              Continue e faça coisas incríveis!
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSignIn)}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Seu email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="just.example@mail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sua senha</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Insira sua senha"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                disabled={form.formState.isSubmitting}
                className="w-full"
                type="submit"
              >
                Entrar
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  )
}
