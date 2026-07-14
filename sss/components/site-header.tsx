import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2" aria-label="Rogue home">
          <span className="flex h-8 w-8 items-center justify-center bg-primary">
            <span className="font-display text-lg leading-none text-primary-foreground">R</span>
          </span>
          <span className="font-display text-xl tracking-tight">ROGUE - DEV</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          <a href="#rules" className="text-sm font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground">
            The Rules
          </a>
          <a href="#arsenal" className="text-sm font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground">
            IT Arsenal
          </a>
        </nav>

        <Button
          asChild
          className="h-11 rounded-none bg-primary px-5 font-display text-sm uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
        >
          <a href="#challenge">Challenge Us</a>
        </Button>
      </div>
    </header>
  )
}
