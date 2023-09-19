import {Icons} from "@/components/ui/icons"

const navigation = {

    social: [
      {
        name: 'Facebook',
        href: 'https://www.facebook.com/StackedDeckSoftware/',
        icon: Icons.facebook,
      },
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/StackedDeckAi/',
        icon: Icons.instagram,
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/StackedDeckAI/',
        icon: Icons.twitter,
      },
      {
        name: 'GitHub',
        href: 'https://github.com/StackedDeckSoftware/',
        icon: Icons.gitHub,
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/stacked-deck-ai',
        icon: Icons.linkedin,
      },
    ],
  }
  export function SiteFooter() {
  return (
    <section className="inset-x-0 bottom-0 flex w-screen flex-col bg-background ">
      <h1 id="footer-heading" className="sr-only">
        Footer
      </h1>
      <div className="flex flex-col items-center justify-evenly border-t border-gray-900/10 p-4">
        <div className="flex space-x-6">
          {navigation.social.map((item) => (
          <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">{item.name}</span>
            <item.icon className="h-6 w-6" />
          </a>
          ))}
        </div>
        <p className="text-center text-xs leading-8 text-gray-500">
          &copy; 2023 Upstate Digital Solutions, LLC. <br className="mobile:hidden"/> All rights reserved.
        </p>
      </div>
    </section>
  )
}