import SectionNavigation from './section-navigation'

const LandingContent = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className="flex md:gap-5 justify-between max-w-6xl mx-auto">
        <aside className="flex">
            <SectionNavigation />
        </aside>

        <main className="w-full flex flex-col items-center">
            { children }
        </main>
    </div>
  )
}

export default LandingContent
