import { ShieldCheck, Network, CloudUpload } from "lucide-react"

const ARSENAL = [
  {
    icon: ShieldCheck,
    title: "Kaspersky Endpoint Security",
    body: "Fully managed, enterprise-grade endpoint protection across every device. Threats neutralized before they ever reach your team.",
  },
  {
    icon: Network,
    title: "Firewalls & Routers",
    body: "Professional firewall and router deployments engineered for airtight, high-throughput networks that don't buckle under pressure.",
  },
  {
    icon: CloudUpload,
    title: "Cloud Migrations",
    body: "Flawless, zero-downtime migrations to Google Workspace. Move your whole operation to the cloud without losing a beat.",
  },
]

export function Arsenal() {
  return (
    <section id="arsenal" className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-12 max-w-3xl lg:mb-16">
          <p className="mb-6 inline-flex items-center gap-2 border border-border px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            <span className="h-2 w-2 bg-primary" />
            Enterprise power
          </p>
          <h2 className="font-display text-[clamp(2.25rem,7vw,5.5rem)] uppercase leading-[0.9] tracking-tight text-balance">
            Heavy-duty <span className="text-primary">IT arsenal</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Websites are the front door. Behind it, we deploy the same industrial-strength infrastructure that runs
            serious businesses.
          </p>
        </div>

        <div className="grid gap-px border border-border bg-border lg:grid-cols-3">
          {ARSENAL.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="flex flex-col gap-6 bg-background p-8 sm:p-10">
                <span className="flex h-14 w-14 items-center justify-center bg-primary">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </span>
                <h3 className="font-display text-2xl uppercase leading-tight tracking-tight sm:text-3xl">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
