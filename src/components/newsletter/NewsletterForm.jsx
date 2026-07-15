import { useState } from 'react'

export default function NewsletterForm({ tone = 'light' }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | success

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    // No backend yet — this is a placeholder capture point.
    // Swap in a real provider (Mailchimp, Buttondown, etc.) here later.
    setStatus('success')
    setEmail('')
  }

  const isDark = tone === 'dark'

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:gap-0">
      <label htmlFor="newsletter-email" className="sr-only">
        Correo electrónico
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="tu@correo.com"
        className={`w-full border px-4 py-3 text-sm focus:outline-none ${
          isDark
            ? 'border-kinari/30 bg-transparent text-kinari placeholder:text-kinari/40 focus:border-kinari'
            : 'border-beige bg-kinari text-sumi placeholder:text-sumi2/50 focus:border-moss'
        }`}
      />
      <button
        type="submit"
        className={`shrink-0 border px-6 py-3 text-xs uppercase tracking-widest transition-colors ${
          isDark
            ? 'border-kinari bg-kinari text-sumi hover:bg-transparent hover:text-kinari'
            : 'border-sumi bg-sumi text-kinari hover:bg-moss-dark hover:border-moss-dark'
        }`}
      >
        Suscribirme
      </button>
      {status === 'success' && (
        <p role="status" className={`mt-2 text-xs sm:absolute sm:mt-14 ${isDark ? 'text-kinari/70' : 'text-sumi2'}`}>
          Gracias — revisa tu correo pronto.
        </p>
      )}
    </form>
  )
}
