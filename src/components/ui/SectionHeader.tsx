interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  dark?: boolean
}

export default function SectionHeader({
  label,
  title,
  description,
  align = 'center',
  dark = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`
        max-w-3xl mb-12 md:mb-16
        ${align === 'center' ? 'mx-auto text-center' : ''}
      `}
    >
      {label && (
        <span
          className={`
            inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4
            ${dark ? 'bg-navy-800 text-accent-teal' : 'bg-accent-mint text-accent-teal'}
          `}
        >
          {label}
        </span>
      )}
      <h2
        className={`
          text-display-md mb-4
          ${dark ? 'text-white' : 'text-navy-900'}
        `}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`
            text-body-lg
            ${dark ? 'text-navy-200' : 'text-navy-600'}
          `}
        >
          {description}
        </p>
      )}
      <div
        className={`
          h-1 w-16 rounded-full mt-6
          ${align === 'center' ? 'mx-auto' : ''}
          ${dark ? 'bg-accent-teal' : 'bg-navy-800'}
        `}
      />
    </div>
  )
}
