import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Upstate Digital Solutions',
    short_name: 'Upstate Digital',
    description: 'Leveraging AI to deliver fast and efficient web development services. We provide custom solutions for your web development needs, from design to deployment. Join us on our journey as we redefine web development.',
    icons: [
      {
        src: 'favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
          src: "/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png"
      },
      {
          src: "android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png"
      }
  ],
  theme_color: "#ffffff",
  background_color: "#ffffff",
  start_url: "http://stackeddeckai.com",
  display: "standalone",
}
}