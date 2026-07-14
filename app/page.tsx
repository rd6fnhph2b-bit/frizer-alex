import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { Rules } from "@/components/rules"
import { Arsenal } from "@/components/arsenal"
import { Closing } from "@/components/closing"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <Rules />
        <Arsenal />
        <Closing />
      </main>
    </div>
  )
}
