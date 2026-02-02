'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import Button from '@/components/ui/Button'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/doctors', label: 'Doctors' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-navy-800 rounded-2xl flex items-center justify-center transform transition-transform group-hover:scale-105 group-hover:rotate-3">
                <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-white" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C9.5 2 7.5 3.5 7 5.5C6.5 7.5 7 9 7 10C7 11 6.5 12 6 13C5 15 6 18 7 20C7.5 21 8 22 9 22C10 22 10.5 21.5 11 20.5C11.3 19.8 11.6 19 12 19C12.4 19 12.7 19.8 13 20.5C13.5 21.5 14 22 15 22C16 22 16.5 21 17 20C18 18 19 15 18 13C17.5 12 17 11 17 10C17 9 17.5 7.5 17 5.5C16.5 3.5 14.5 2 12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent-teal rounded-full animate-pulse-soft" />
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-xl font-semibold text-navy-800">Arty Dental</span>
              <span className="block text-xs text-navy-500 tracking-widest uppercase">Clinic</span>
            </div>
          </Link>
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="relative px-5 py-2 text-navy-700 font-medium transition-colors hover:text-navy-900 group">
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent-teal transition-all duration-300 group-hover:w-6" />
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+1234567890" className="flex items-center gap-2 text-navy-600 hover:text-navy-800 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">(123) 456-7890</span>
            </a>
            <Button href="/contact">Book Appointment</Button>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-navy-800 hover:bg-navy-50 rounded-xl transition-colors" aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
        {isOpen && (
          <div className="lg:hidden mobile-menu-enter">
            <div className="mt-4 p-6 bg-white rounded-3xl shadow-xl border border-navy-100">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block px-4 py-3 text-navy-700 font-medium rounded-xl hover:bg-navy-50 transition-colors">{link.label}</Link>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-navy-100">
                <a href="tel:+1234567890" className="flex items-center gap-3 px-4 py-3 text-navy-600">
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">(123) 456-7890</span>
                </a>
                <div className="mt-4">
                  <Button href="/contact" fullWidth>Book Appointment</Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
