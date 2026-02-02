interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: 'white' | 'light' | 'navy' | 'gradient'
  padding?: 'sm' | 'md' | 'lg'
}

export default function Section({
  children,
  className = '',
  id,
  background = 'white',
  padding = 'md',
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    light: 'bg-navy-50',
    navy: 'bg-navy-900 text-white',
    gradient: 'hero-gradient pattern-overlay',
  }

  const paddings = {
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-24',
    lg: 'py-20 md:py-32',
  }

  return (
    <section
      id={id}
      className={`
        ${backgrounds[background]}
        ${paddings[padding]}
        ${className}
      `}
    >
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  )
}
