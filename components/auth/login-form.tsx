"use client"
import { Eye, EyeClosed } from "lucide-react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { loginSchema } from "@/lib/schemas/login.shcema"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { signIn, useSession } from "next-auth/react"


const LoginForm = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [hasError, setHasError] = useState<boolean>(false)

    const router = useRouter()
    const { status } = useSession()

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: "",
            password: "",
        },
        mode: "onChange"
    })

    async function handleSubmit(values: z.infer<typeof loginSchema>) {
        console.log(values)
        // return await signIn("credentials", {
        //     redirect: true,
        //     username: values.username,
        //     password: values.password,
        //     callbackUrl: '/articles'
        // })
    }

    useEffect(() => {
        if (Object.keys(form.formState.errors).length > 0) {
            setHasError(Object.keys(form.formState.errors).length > 0)
            console.log(form.formState.errors)
        }
    }, [form.formState.errors])

    return (
        <>
        <h2 className='text-lg font-bold text-[tomato]'>Sign In</h2>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem className="form-item">
                            <FormLabel className="!text-black">Username</FormLabel>
                            <FormControl>
                                <div>
                                    <Input 
                                        placeholder="John Doe"
                                        {...field} 
                                        className="border-1 outline-none focus-visible:ring-0.5"
                                    />
                                </div>
                            </FormControl>
                            <FormMessage className="text-xs px-1" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem className="form-item">
                            <FormLabel className="!text-black">Password</FormLabel>
                            <FormControl>
                                <div className="flex gap-2 items-center">
                                    <Input 
                                        type={`${!showPassword && 'password'}`}
                                        placeholder="*********" 
                                        autoComplete="off"
                                        {...field} 
                                        className="border-1 outline-none focus-visible:ring-0.5"
                                    />

                                    { showPassword ? <Eye onClick={() => setShowPassword(!showPassword)} /> : <EyeClosed onClick={() => setShowPassword(!showPassword)} />}
                                </div>
                            </FormControl>
                            <FormMessage className="text-xs px-1" />
                        </FormItem>
                    )}
                />

                <button 
                    type="submit" 
                    disabled={!form.formState.isValid}
                    className="button w-full bg-[#e74124] hover:bg-[#f1310f] text-white cursor-pointer font-semibold p-2 rounded-md transition-all duration-500">
                        { status === "loading" ? "Authenticating..." : "Sign In"}
                </button>
                <p className="font-light flex gap-2">
                    Don&apos;t have an account yet?
                    <span onClick={() => router.push('/register')} className="text-blue-500 hover:underline cursor-pointer">Sign Up</span>
                </p>
            </form>
        </Form>
        </>
    )
}

export default LoginForm