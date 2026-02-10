'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Typography from './Typography'

const navItems = [
  { href: '/', label: 'Products' },
  { href: '/about', label: 'About' },
] as const

function Header() {
  const pathname = usePathname()

  return (
    <header className="w-full h-20 bg-[#D9D9D91F] px-6 md:px-10 font-abel">

      <nav className="flex items-center justify-between w-[333px]" aria-label="Main navigation">
        <Link href="/" className="shrink-0" aria-label="NHC Innovation Home">
          <Image
            src="/assets/logo.svg"
            alt="NHC Innovation"
            width={114}
            height={60}
            className="h-10 w-auto md:h-[60px] md:w-[114px]"
            priority
          />
        </Link>
        {navItems.map(({ href, label }) => {
          const isActive =
            pathname === href ||
            pathname.startsWith(`${href}/`) ||
            (href === '/' && pathname.startsWith('/products/'))
          return (
            <Link
              key={href}
              href={href}
              className={`no-underline transition-colors hover:opacity-80`}
            >
              <Typography font='abel' size={16} color={isActive ? 'green' : 'black'} weight={400}>
                {label}
              </Typography>
            </Link>
          )
        })}
      </nav>
    </header>
  )
}

export default Header
