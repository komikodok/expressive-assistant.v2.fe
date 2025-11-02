import RegisterForm from "@/components/auth/register-form"
import { SessionProvider } from "next-auth/react"

const RegisterPage = () => {
  return (
    <div className='p-5 w-82 flex flex-col gap-5'>
      <SessionProvider>
        <RegisterForm></RegisterForm>
      </SessionProvider>
    </div>
  )
}

export default RegisterPage
