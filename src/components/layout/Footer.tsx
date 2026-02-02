import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'General Dentistry', href: '/services#general' },
    { label: 'Endodontics', href: '/services#endodontics' },
    { label: 'Pedodontics', href: '/services#pedodontics' },
    { label: 'Cosmetic Dentistry', href: '/services#cosmetic' },
    { label: 'Emergency Care', href: '/services#emergency' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Doctors', href: '/doctors' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'Contact', href: '/contact' },
  ],
}

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-navy-800" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C9.5 2 7.5 3.5 7 5.5C6.5 7.5 7 9 7 10C7 11 6.5 12 6 13C5 15 6 18 7 20C7.5 21 8 22 9 22C10 22 10.5 21.5 11 20.5C11.3 19.8 11.6 19 12 19C12.4 19 12.7 19.8 13 20.5C13.5 21.5 14 22 15 22C16 22 16.5 21 17 20C18 18 19 15 18 13C17.5 12 17 11 17 10C17 9 17.5 7.5 17 5.5C16.5 3.5 14.5 2 12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span className="font-display text-xl font-semibold">Arty Dental</span>
                <span className="block text-xs text-navy-300 tracking-widest uppercase">Clinic</span>
              </div>
            </Link>
            <p className="text-navy-300 leading-relaxed mb-6">Providing exceptional dental care with a gentle touch. Your smile is our passion.</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-navy-800 rounded-xl flex items-center justify-center text-navy-300 hover:bg-accent-teal hover:text-white transition-all duration-300" aria-label={social.label}>
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-navy-300 hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-accent-teal rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-navy-300 hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-accent-teal rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-navy-300 hover:text-white transition-colors group">
                  <MapPin className="w-5 h-5 mt-0.5 text-accent-teal flex-shrink-0" />
                  <span>Cairo, Egypt</span>
                </a>
              </li>
              <li>
                <a href="tel:+201003843828" className="flex items-center gap-3 text-navy-300 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-accent-teal flex-shrink-0" />
                  <span>+20 100 384 3828</span>
                </a>
              </li>
              <li>
                <a href="mailto:artydentalclinic@gmail.com" className="flex items-center gap-3 text-navy-300 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-accent-teal flex-shrink-0" />
                  <span>artydentalclinic@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-navy-300">
                  <Clock className="w-5 h-5 mt-0.5 text-accent-teal flex-shrink-0" />
                  <div>
                    <p>Sat - Thu: 5 PM - 10 PM</p>
                    <p>Friday: Closed</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-navy-800">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-navy-400">
            <p>© 2024 Arty Dental Clinic. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
