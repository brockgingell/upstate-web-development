"use client"
import Image from 'next/image'
import { CodeBracketIcon, DevicePhoneMobileIcon, QuestionMarkCircleIcon, MagnifyingGlassCircleIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline'
import { motion } from "framer-motion";

const secondaryFeatures = [
    {
      name: 'Custom Web Development:',
      description: 'We design and develop tailor-made websites to deal a winning hand to your online presence.',
      icon: CodeBracketIcon,
    },
    {
      name: 'Responsive Web Design:',
      description: 'We ensure your website looks great and functions flawlessly, no matter the device. The perfect hand in any round of tech.',
      icon: DevicePhoneMobileIcon,
    },
    {
      name: 'SEO Optimization:',
      description: 'We optimize your website to improve visibility. Like a royal flush, good SEO can put you ahead of the game.',
      icon: QuestionMarkCircleIcon,
    },
    {
      name: 'Website Maintenance and Support:',
      description: 'Our ongoing support keeps your website up-to-date, secure, and running smoothly.',
      icon: MagnifyingGlassCircleIcon,
    },
    {
      name: 'E-commerce Solutions:',
      description: 'From shopping cart integration to payment gateways, we\'ve got your online store covered.',
      icon: ShoppingCartIcon,
    },
  
    {
      name: 'UI/UX Design:',
      description: 'Our designs are intuitive and engaging, creating an excellent user experience is like holding a straight flush in digital design.',
      icon: UserIcon,
    },
  ]
export default function NewCTA() {
    return (
      <>
        <motion.dl className="relative isolate mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 p-6 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {secondaryFeatures.map((feature) => (
            <div key={feature.name} className="relative pl-14">
              <dt className="inline font-semibold ">
                <feature.icon className="absolute left-1 top-1 h-10 w-10 rounded-sm bg-gradient-to-r from-newblue via-newpurple to-neworange p-1 text-xs text-white" aria-hidden="true" />
                {feature.name}
              </dt>{' '}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </motion.dl>
      </>

    )
}