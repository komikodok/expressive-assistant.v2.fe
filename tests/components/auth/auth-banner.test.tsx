import AuthBanner from "@/components/auth/auth-banner";
import { render, screen } from "@testing-library/react";

describe('auth-banner.tsx', () => {
    it('should render', async () => {
        render(<AuthBanner />)

        const heading = await screen.getByRole('heading', {
            name: /clyre/i,
            level: 2
        })

        expect(heading).toBeInTheDocument()
    })
})