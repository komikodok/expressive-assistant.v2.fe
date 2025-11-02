import "@testing-library/jest-dom"

jest.mock('next-auth/react', () => ({
    __esModule: true,
    useSession: jest.fn(() => ({
        data: null,
        status: 'unauthenticated',
    })),
    signIn: jest.fn(),
    signOut: jest.fn(),
}))

jest.mock("next/navigation", () => ({
    __esModule: true,
    useRouter: jest.fn(() => ({
        push: jest.fn(),
        replace: jest.fn()
    }))

}))