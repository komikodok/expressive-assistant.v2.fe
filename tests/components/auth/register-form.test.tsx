import { act, fireEvent, render, screen } from "@testing-library/react"
import RegisterForm from "@/components/auth/register-form"
import { useRouter } from "next/navigation"


const replaceMock = jest.fn()

describe('register-form.tsx', () => {

    beforeEach(() => {
        jest.clearAllMocks()

        ;(useRouter as jest.Mock).mockReturnValue({
            replace: replaceMock,
        })
        render(<RegisterForm />)
    })

    test("should render", async () => {
        const form = await screen.getByRole('form', { name: /register-form/i })

        expect(form).toBeInTheDocument()
    })

    test("should update input values when user types username, email and password", async () => {
        const usernameInput = await screen.getByLabelText(/username/i)
        const emailInput = await screen.getByLabelText(/email/i)
        const passwordInput = await screen.getByLabelText(/password/i)

        expect(usernameInput).toBeInTheDocument()
        expect(emailInput).toBeInTheDocument()
        expect(passwordInput).toBeInTheDocument()

        await act(async () => {
            fireEvent.change(usernameInput, { target: { value: "John Doe" } })
            fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } })
            fireEvent.change(passwordInput, { target: { value: "johndoe12345" } })
        })

        expect(usernameInput).toHaveValue("John Doe")
        expect(emailInput).toHaveValue("john.doe@example.com")
        expect(passwordInput).toHaveValue("johndoe12345")
    })

    test("submit button should be disabled when form input are empty", async () => {
        const submitButton = await screen.getByRole('button')
        expect(submitButton).toBeInTheDocument()

        const usernameInput = await screen.getByLabelText(/username/i)
        const emailInput = await screen.getByLabelText(/email/i)
        const passwordInput = await screen.getByLabelText(/password/i)

        await act(async () => {
            fireEvent.change(usernameInput, { target: { value: "" } })
            fireEvent.change(emailInput, { target: { value: "" } })
            fireEvent.change(passwordInput, { target: { value: "" } })
        })

        expect(submitButton).toBeDisabled()
    })
    
    test("submit button should be not disabled when form input are not empty", async () => {
        const submitButton = await screen.getByRole('button')
        expect(submitButton).toBeInTheDocument()

        const usernameInput = await screen.getByLabelText(/username/i)
        const emailInput = await screen.getByLabelText(/email/i)
        const passwordInput = await screen.getByLabelText(/password/i)

        await act(async () => {
            fireEvent.change(usernameInput, { target: { value: "John Doe" } })
            fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } })
            fireEvent.change(passwordInput, { target: { value: "johndoe12345" } })
        })

        expect(submitButton).not.toBeDisabled()
    })

    // test("users should be signin when submit button is clicked", async () => {
    //     const submitButton = await screen.getByRole('button')
    //     expect(submitButton).toBeInTheDocument()

    //     const usernameInput = await screen.getByLabelText(/username/i)
    //     const emailInput = await screen.getByLabelText(/email/i)
    //     const passwordInput = await screen.getByLabelText(/password/i)

    //     await act(async () => {
    //         fireEvent.change(usernameInput, { target: { value: "John Doe" } })
    //         fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } })
    //         fireEvent.change(passwordInput, { target: { value: "johndoe12345" } })
    //     })

    //     await act(async () => {
    //         fireEvent.click(submitButton)
    //     })

    //     expect(signIn).toHaveBeenCalled()
    // })

    test("should be redirect to register page when signup button is clicked with router.replace()", async () => {
        const signUpButton = await screen.getByText(/sign in/i)
        expect(signUpButton).toBeInTheDocument()

        await act(async () => {
            fireEvent.click(signUpButton)
        })

        expect(replaceMock).toHaveBeenCalledWith('/login')
    })
})
