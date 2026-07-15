// A quiet nod to the hanko (印) seal used to sign Japanese documents and
// craftwork — Fujiko's recurring signature mark, used sparingly next to
// section labels instead of generic numbering.
export default function SealMark({ className = '' }) {
  return (
    <span
      className={`inline-flex h-5 w-5 shrink-0 items-center justify-center border border-moss ${className}`}
      aria-hidden="true"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-moss" />
    </span>
  )
}
