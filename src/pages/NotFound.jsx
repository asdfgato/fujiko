import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import SealMark from '../components/ui/SealMark'

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-content flex-col items-center px-5 py-32 text-center md:px-10">
      <SealMark className="mb-6" />
      <p className="font-display text-display-md text-sumi">Página no encontrada</p>
      <p className="mt-4 max-w-sm text-sm text-sumi2">
        Parece que esta página se perdió entre las hojas. Volvamos al catálogo.
      </p>
      <Button as={Link} to="/" variant="primary" size="lg" className="mt-8">
        Volver al inicio
      </Button>
    </div>
  )
}
