/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: builds plain HTML/CSS/JS into the `out/` directory,
  // which Cloudflare Pages serves directly on the free plan.
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Required for static export — Cloudflare serves images as-is.
    unoptimized: true,
  },
  // Emits each route as a folder with index.html (e.g. /about/index.html),
  // which plays nicely with static hosts like Cloudflare Pages.
  trailingSlash: true,
}

export default nextConfig
