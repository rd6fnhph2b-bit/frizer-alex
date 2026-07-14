import { Timer, Wallet, GitBranch, Zap, type LucideIcon } from "lucide-react"
import rulesData from "@/data/rules.json"

// Map the icon keys stored in data/rules.json to real Lucide components.
const ICONS: Record<string, LucideIcon> = {
  timer: Timer,
  wallet: Wallet,
  "git-branch": GitBranch,
  zap: Zap,
}

const RULES = rulesData.rules

export function Rules() {
  return (
    <section id="rules" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-display text-[clamp(2.25rem,7vw,5rem)] uppercase leading-[0.9] tracking-tight text-balance">
            The no-bullshit <span className="text-primary">rules</span>
          </h2>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Four promises we put in writing. Break any of them and you walk — no strings attached.
          </p>
        </div>

        <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
          {RULES.map((rule) => {
            const Icon = ICONS[rule.icon] ?? Timer
            return (
              <article
                key={rule.no}
                className="group relative flex flex-col gap-6 bg-card p-8 transition-colors hover:bg-primary sm:p-10"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-9 w-9 text-primary transition-colors group-hover:text-primary-foreground" />
                  <span className="font-display text-4xl text-muted-foreground/40 transition-colors group-hover:text-primary-foreground/60">
                    {rule.no}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl uppercase leading-tight tracking-tight transition-colors group-hover:text-primary-foreground sm:text-3xl">
                    {rule.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground transition-colors group-hover:text-primary-foreground/90">
                    {rule.body}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
