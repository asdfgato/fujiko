import { useEffect, useRef } from 'react'

export default function Modal({
  open,
  onClose,
  title,
  children,
  side = 'right', // 'right' for a drawer, 'center' for a dialog
}) {
  const panelRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    panelRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  const isDrawer = side === 'right'

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <button
        aria-label="Cerrar"
        className="absolute inset-0 bg-sumi/40 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        tabIndex={-1}
        className={
          isDrawer
            ? 'relative flex h-full w-full max-w-md flex-col bg-kinari shadow-2xl focus:outline-none animate-fadeUp'
            : 'relative m-auto flex max-h-[85vh] w-full max-w-lg flex-col overflow-y-auto bg-kinari p-8 shadow-2xl focus:outline-none animate-fadeUp'
        }
      >
        {title && (
          <div className="flex items-center justify-between border-b border-beige px-6 py-5">
            <h2 className="font-display text-lg text-sumi">{title}</h2>
            <button
              onClick={onClose}
              aria-label="Cerrar"
              className="text-sumi2 transition-colors hover:text-sumi focus-visible:outline focus-visible:outline-2 focus-visible:outline-moss"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </button>
          </div>
        )}
        {children}
      </div>
    </div>
  )
}
