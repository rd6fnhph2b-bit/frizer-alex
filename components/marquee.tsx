const ITEMS = [
  "48-HOUR BUILD",
  "€0 UPFRONT",
  "€50 / MONTH",
  "OWN YOUR CODE",
  "CLOUDFLARE EDGE",
  "LEAVE ANYTIME",
]

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-border bg-primary py-3">
      <div className="flex animate-[marquee_28s_linear_infinite] whitespace-nowrap">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
            {ITEMS.map((item) => (
              <span key={item} className="flex items-center">
                <span className="px-6 font-display text-sm uppercase tracking-widest text-primary-foreground sm:text-base">
                  {item}
                </span>
                <span className="text-primary-foreground/60">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
