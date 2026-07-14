import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export function Closing() {
  return (
    <>
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
          <h2 className="mx-auto max-w-4xl font-display text-[clamp(2.25rem,8vw,6rem)] uppercase leading-[0.85] tracking-tight text-primary-foreground text-balance">
            Still reading? Let&apos;s build it.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/90">
            48 hours from now you could have a live site and nothing to lose. Go on — challenge us.
          </p>
          <Button
            asChild
            className="group mt-10 h-16 rounded-none bg-background px-10 font-display text-lg uppercase tracking-wider text-foreground hover:bg-background/90 sm:text-xl"
          >
            <a href="mailto:hello@rogue.agency">
              Challenge Us
              <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Button>
        </div>
      </section>

      <footer className="bg-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center bg-primary">
              <span className="font-display text-lg leading-none text-primary-foreground">R</span>
            </span>
            <span className="font-display text-2xl tracking-tight">ROGUE</span>
          </div>
          <p className="font-display text-xl uppercase tracking-tight text-muted-foreground sm:text-2xl text-balance">
            Built with clean code. <span className="text-primary">Hosted on the Edge.</span>
          </p>
        </div>
      </footer>
    </>
  )
}
