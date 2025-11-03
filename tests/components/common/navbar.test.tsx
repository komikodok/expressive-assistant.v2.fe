import { act, fireEvent, render, screen } from "@testing-library/react"
import Navbar from "@/components/common/navbar"
import { useAuth } from "@/lib/react-query/hooks/auth.hook";
import { signOut } from "next-auth/react";


describe("navbar.tsx auth button tests", () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    test("should render login button when user is not authenticated", async () => {
        ;(useAuth as jest.Mock).mockReturnValue({
            user: null,
            isLoading: false,
            isAuthenticated: false
        })

        render(<Navbar />)

        const triggerPopover = await screen.getByRole('button')
        expect(triggerPopover).toBeInTheDocument()

        await act(async () => {
            fireEvent.click(triggerPopover)
        })

        const loginButton = await screen.findByText(/login/i)
        expect(loginButton).toBeInTheDocument()
    })
    
    test("should render logout button when user is authenticated", async () => {
        ;(useAuth as jest.Mock).mockReturnValue({
            user: null,
            isLoading: false,
            isAuthenticated: true
        })

        render(<Navbar />)
        
        const triggerPopover = await screen.getByRole('button')
        expect(triggerPopover).toBeInTheDocument()

        await act(async () => {
            fireEvent.click(triggerPopover)
        })

        const logoutButton = await screen.findByTestId(/logout-button/i)
        expect(logoutButton).toBeInTheDocument()
    })

    test('should signout when user click logout button', async () => {
        ;(useAuth as jest.Mock).mockReturnValue({
            user: null,
            isLoading: false,
            isAuthenticated: true
        })

        render(<Navbar />)

        const triggerPopover = await screen.getByRole('button')
        expect(triggerPopover).toBeInTheDocument()

        await act(async () => {
            fireEvent.click(triggerPopover)
        })

        const logoutButton = await screen.findByTestId(/logout-button/i)

        await act(async () => {
            fireEvent.click(logoutButton)
        })

        expect(signOut).toHaveBeenCalled()
    })
}) 