import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="challenge" className="relative overflow-hidden border-b border-border">
      {/* red block accent, asymmetrical */}
      <div className="pointer-events-none absolute -right-24 top-0 hidden h-full w-1/2 -skew-x-12 bg-primary/10 lg:block" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="max-w-5xl">
          <p className="mb-6 inline-flex items-center gap-2 border border-border px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            <span className="h-2 w-2 bg-primary" />
            The anti-agency
          </p>

          <h1 className="font-display text-[clamp(2.75rem,11vw,9rem)] uppercase leading-[0.85] tracking-tight text-balance">
            Screw the{" "}
            <span className="text-primary">traditional</span> agency model
          </h1>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              We build you a{" "}
              <span className="font-semibold text-foreground">lightning-fast website in 48 hours</span> — completely
              free. You only pay a flat{" "}
              <span className="font-semibold text-foreground">€50/month</span> subscription if you love it. No
              contracts. No hostage code. No nonsense.
            </p>

            <div className="flex flex-col gap-4">
              <Button
                asChild
                className="group h-16 w-full rounded-none bg-primary px-8 font-display text-lg uppercase tracking-wider text-primary-foreground hover:bg-primary/90 sm:text-xl"
              >
                <a href="#rules">
                  Challenge Us
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">
                Zero cost. Zero risk. 48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
