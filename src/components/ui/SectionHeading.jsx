import SealMark from './SealMark'

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const isCenter = align === 'center'
  return (
    <div className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <div className={`mb-4 flex items-center gap-3 ${isCenter ? 'justify-center' : ''}`}>
          <SealMark />
          <span className="text-xs uppercase tracking-widest2 text-sumi2">{eyebrow}</span>
        </div>
      )}
      <h2 className="font-display text-display-md text-sumi">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-sumi2">{description}</p>
      )}
    </div>
  )
}
