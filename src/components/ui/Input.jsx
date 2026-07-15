export function Input({ label, id, error, className = '', ...props }) {
  return (
    <label htmlFor={id} className="block">
      {label && (
        <span className="mb-2 block text-xs uppercase tracking-widest text-sumi2">
          {label}
        </span>
      )}
      <input
        id={id}
        className={`w-full border border-beige bg-kinari px-4 py-3 text-sm text-sumi placeholder:text-sumi2/50 transition-colors duration-200 focus:border-moss focus:outline-none ${className}`}
        {...props}
      />
      {error && <span className="mt-1.5 block text-xs text-sumi2">{error}</span>}
    </label>
  )
}

export function TextArea({ label, id, error, className = '', ...props }) {
  return (
    <label htmlFor={id} className="block">
      {label && (
        <span className="mb-2 block text-xs uppercase tracking-widest text-sumi2">
          {label}
        </span>
      )}
      <textarea
        id={id}
        className={`w-full border border-beige bg-kinari px-4 py-3 text-sm text-sumi placeholder:text-sumi2/50 transition-colors duration-200 focus:border-moss focus:outline-none ${className}`}
        {...props}
      />
      {error && <span className="mt-1.5 block text-xs text-sumi2">{error}</span>}
    </label>
  )
}
