const tones = {
  neutral: 'bg-washi text-sumi2 border-beige',
  accent: 'bg-moss/10 text-moss-dark border-moss/30',
  sale: 'bg-sumi text-kinari border-sumi',
}

export default function Badge({ tone = 'neutral', className = '', children }) {
  return (
    <span
      className={`inline-flex items-center border px-2.5 py-1 text-[0.65rem] font-body uppercase tracking-widest ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  )
}
