const variants = {
  primary:
    'bg-sumi text-kinari hover:bg-moss-dark border border-sumi hover:border-moss-dark',
  secondary:
    'bg-transparent text-sumi border border-sumi/30 hover:border-sumi hover:bg-sumi/5',
  accent:
    'bg-moss text-kinari hover:bg-moss-dark border border-moss hover:border-moss-dark',
  ghost:
    'bg-transparent text-sumi hover:bg-sumi/5 border border-transparent',
  whatsapp:
    'bg-moss text-kinari hover:bg-moss-dark border border-moss hover:border-moss-dark',
}

const sizes = {
  sm: 'text-xs px-4 py-2 tracking-wide',
  md: 'text-sm px-6 py-3 tracking-wide',
  lg: 'text-sm px-8 py-4 tracking-widest',
}

export default function Button({
  as: Component = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  return (
    <Component
      className={`inline-flex items-center justify-center gap-2 font-body uppercase transition-all duration-300 ease-soft disabled:opacity-40 disabled:pointer-events-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
