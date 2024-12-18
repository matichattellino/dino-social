'use client'

import { useState, useEffect } from 'react'
import { Check, X, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { forwardRef } from 'react'

interface PlanSelection {
  social?: {
    name: string;
    price: number;
  };
  ecommerce?: {
    name: string;
    price: number;
  };
}

const Pricing = forwardRef<HTMLElement>((props, ref) => {
  const [category, setCategory] = useState<'ecommerce' | 'social'>('social')
  const [selectedPlans, setSelectedPlans] = useState<PlanSelection>({})
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handlePlanSelect = (type: 'social' | 'ecommerce', plan: { name: string; price: number }) => {
    setSelectedPlans(prev => ({
      ...prev,
      [type]: plan
    }))
    if (isMobile) {
      setIsSheetOpen(true)
    }
  }

  const removePlan = (type: 'social' | 'ecommerce') => {
    setSelectedPlans(prev => {
      const newPlans = { ...prev }
      delete newPlans[type]
      return newPlans
    })
  }

  const getTotalPrice = () => {
    return Object.values(selectedPlans).reduce((sum, plan) => sum + plan.price, 0)
  }

  const handleContinueClick = () => {
    setIsSheetOpen(false);
    // Aquí puedes añadir cualquier otra lógica necesaria al continuar
  };

  const SelectedPlansDisplay = ({ isMobile, onContinue }: { isMobile: boolean; onContinue: () => void }) => (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Planes Seleccionados</h3>
      {Object.entries(selectedPlans).map(([type, plan]) => (
        <div key={type} className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
          <div>
            <p className="font-medium">{plan.name}</p>
            <p className="text-sm text-gray-500">${plan.price} {type === 'social' ? '/mes' : ' único pago'}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => removePlan(type as 'social' | 'ecommerce')}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ))}
      {Object.keys(selectedPlans).length > 0 && (
        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between items-center">
            <span className="font-bold">Total</span>
            <span className="font-bold">${getTotalPrice()}</span>
          </div>
          {isMobile ? (
            <>
              <Button className="w-full mt-4" onClick={onContinue}>Continuar con la Selección</Button>
              <Button className="w-full mt-2" variant="outline">Contactar</Button>
            </>
          ) : (
            <Button className="w-full mt-4">Contactar</Button>
          )}
        </div>
      )}
    </div>
  )

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Tenemos un plan perfecto para ti
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Elige el plan que mejor se adapte a tus necesidades
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <Tabs defaultValue="social" className="w-fit" onValueChange={(value) => setCategory(value as 'ecommerce' | 'social')}>
                <TabsList>
                  <TabsTrigger value="social">Redes Sociales</TabsTrigger>
                  <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="mx-auto grid max-w-screen-lg gap-8 pt-12 md:grid-cols-3">
              {category === 'social' ? (
                <>
                  <div 
                    className={`flex flex-col justify-between rounded-lg border p-8 shadow-lg transition-all cursor-pointer
                      ${selectedPlans.social?.name === "Plan Básico" 
                        ? 'bg-primary/5 border-primary' 
                        : 'bg-white hover:border-primary/50'}`}
                    onClick={() => handlePlanSelect('social', { name: "Plan Básico", price: 99 })}
                  >
                    <div>
                      <h3 className="text-xl font-bold">Plan Básico</h3>
                      <div className="mt-4 text-center">
                        <span className="text-4xl font-bold">$99</span>
                        <span className="text-sm font-medium text-gray-500">/mes</span>
                      </div>
                      <ul className="mt-8 space-y-4">
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-500" />
                          <span className="ml-2">3 posts semanales</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-500" />
                          <span className="ml-2">Gestión de 2 redes sociales</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-500" />
                          <span className="ml-2">Reporte mensual básico</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div 
                    className={`relative flex flex-col justify-between rounded-lg border p-8 shadow-lg transition-all cursor-pointer
                      ${selectedPlans.social?.name === "Plan Intermedio" 
                        ? 'bg-primary/5 border-primary' 
                        : 'bg-white hover:border-primary/50'}`}
                    onClick={() => handlePlanSelect('social', { name: "Plan Intermedio", price: 199 })}
                  >
                    <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-1 text-sm font-medium text-white">
                      Popular
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Plan Intermedio</h3>
                      <div className="mt-4 text-center">
                        <span className="text-4xl font-bold">$199</span>
                        <span className="text-sm font-medium text-gray-500">/mes</span>
                      </div>
                      <ul className="mt-8 space-y-4">
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-500" />
                          <span className="ml-2">5 posts semanales</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-500" />
                          <span className="ml-2">Gestión de 3 redes sociales</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-500" />
                          <span className="ml-2">Reporte mensual detallado</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-500" />
                          <span className="ml-2">Pauta en Meta básica</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div 
                    className={`flex flex-col justify-between rounded-lg border p-8 shadow-lg transition-all cursor-pointer
                      ${selectedPlans.social?.name === "Plan Avanzado" 
                        ? 'bg-primary/5 border-primary' 
                        : 'bg-white hover:border-primary/50'}`}
                    onClick={() => handlePlanSelect('social', { name: "Plan Avanzado", price: 299 })}
                  >
                    <div>
                      <h3 className="text-xl font-bold">Plan Avanzado</h3>
                      <div className="mt-4 text-center">
                        <span className="text-4xl font-bold">$299</span>
                        <span className="text-sm font-medium text-gray-500">/mes</span>
                      </div>
                      <ul className="mt-8 space-y-4">
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-500" />
                          <span className="ml-2">7 posts semanales</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-500" />
                          <span className="ml-2">Gestión de todas las redes</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-500" />
                          <span className="ml-2">Reporte semanal detallado</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-500" />
                          <span className="ml-2">Pauta en Meta con asesoramiento</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-500" />
                          <span className="ml-2">Estrategia de contenidos</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div 
                    className={`flex flex-col justify-between rounded-lg border p-8 shadow-lg transition-all cursor-pointer md:col-span-3/2
                      ${selectedPlans.ecommerce?.name === "Plan Básico E-commerce" 
                        ? 'bg-primary/5 border-primary' 
                        : 'bg-white hover:border-primary/50'}`}
                    onClick={() => handlePlanSelect('ecommerce', { name: "Plan Básico E-commerce", price: 499 })}
                  >
                    <div>
                      <h3 className="text-xl font-bold">Plan Básico E-commerce</h3>
                      <div className="mt-4 text-center">
                        <span className="text-4xl font-bold">$499</span>
                        <span className="text-sm font-medium text-gray-500">/único pago</span>
                      </div>
                      <ul className="mt-8 space-y-4">
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-500" />
                          <span className="ml-2">Tienda Nube - Setup completo</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-500" />
                          <span className="ml-2">Carga de 150 productos (contenido del cliente)</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-500" />
                          <span className="ml-2">Configuración de métodos de pago</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-500" />
                          <span className="ml-2">Capacitación básica</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div 
                    className={`flex flex-col justify-between rounded-lg border p-8 shadow-lg transition-all cursor-pointer md:col-span-3/2
                      ${selectedPlans.ecommerce?.name === "Plan Premium E-commerce" 
                        ? 'bg-primary/5 border-primary' 
                        : 'bg-white hover:border-primary/50'}`}
                    onClick={() => handlePlanSelect('ecommerce', { name: "Plan Premium E-commerce", price: 799 })}
                  >
                    <div>
                      <h3 className="text-xl font-bold">Plan Premium E-commerce</h3>
                      <div className="mt-4 text-center">
                        <span className="text-4xl font-bold">$799</span>
                        <span className="text-sm font-medium text-gray-500">/único pago</span>
                      </div>
                      <ul className="mt-8 space-y-4">
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-500" />
                          <span className="ml-2">Todo lo del plan básico</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-500" />
                          <span className="ml-2">Carga de 150 productos con optimización SEO</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-500" />
                          <span className="ml-2">Fotografía y descripción por la agencia</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-500" />
                          <span className="ml-2">Capacitación avanzada</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Desktop summary panel */}
          {!isMobile && (
            <div className="lg:w-1/3 lg:sticky lg:top-4 lg:h-fit">
              <div className="bg-gray-100 rounded-lg p-6">
                <SelectedPlansDisplay isMobile={false} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile bottom sheet */}
      {isMobile && (
        <>
          {Object.keys(selectedPlans).length > 0 && (
            <div 
              className="fixed bottom-0 left-0 right-0 bg-white shadow-lg rounded-t-xl border-t p-4"
              style={{ zIndex: 50 }}
            >
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Planes Seleccionados ({Object.keys(selectedPlans).length})</p>
                      <p className="text-sm text-gray-500">Total: ${getTotalPrice()}</p>
                    </div>
                    <ChevronUp className="h-5 w-5" />
                  </div>
                </SheetTrigger>
                <SheetContent side="bottom" className="h-[80vh]">
                  <SheetHeader>
                    <SheetTitle>Resumen de Selección</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <SelectedPlansDisplay isMobile={true} onContinue={handleContinueClick} />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          )}
        </>
      )}
    </section>
  )
})

Pricing.displayName = 'Pricing'

export { Pricing }

