import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import AuthLinks from './AuthLinks'

export default function Navbar() {
  return (
    <div className="flex items-center justify-between h-28">
      <div className=" hidden gap-3 flex-1 lg:flex">
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
      </div>
      <div className="flex flex-1 text-center text-4xl xl:text-3xl font-bold lg:text-left md:text-2xl">Jung and the Restless</div>
      <div className="flex items-center gap-5 flex-1 text-lg xl:text-lg sm:justify-end">
        <ThemeToggle />
        <Link href="/" className="hidden sm:flex">Homepage</Link>
        <Link href="/" className="hidden sm:flex">Contact</Link>
        <Link href="/" className="hidden sm:flex">About</Link>
        <AuthLinks />
      </div>
    </div>
  )
}
