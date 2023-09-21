import { MetadataRoute } from 'next'


export type Manifest = typeof siteConfig

export const manifest: MetadataRoute.Manifest = {
  name: "Upstate Digital Solutions - Website Development Agency Proudly Serving New York's Capital Region",
  description: 'Leveraging AI to deliver fast and efficient web development services. We provide custom solutions for your web development needs, from design to deployment. Join us on our journey as we redefine web development.',
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Projects",
      href: "/portfolio",
    },
    {
      title: "About Us",
      href: "/company",
    },
  ],
  links: {
    twitter: "https://twitter.com/StackedDeckAI/",
    github: "https://github.com/StackedDeckSoftware/",
    facebook: "https://www.facebook.com/StackedDeckSoftware/",
    instagram: "https://www.instagram.com/StackedDeckAi/",
    linkedin: "https://www.linkedin.com/company/stacked-deck-ai/",
  },
  icons: [
    {
      src: 'favicon.ico',
      sizes: 'any',
      type: 'image/x-icon',
    },
    {
      src: "/public/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/public/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ]
}

