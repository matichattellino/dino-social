import { Pricing } from '../components/pricing'

export default function CotizadorPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-10">Cotizador</h1>
        <Pricing />
      </main>
    </div>
  )
}

