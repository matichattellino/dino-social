'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { forwardRef } from 'react'

const Pricing = forwardRef<HTMLElement>((props, ref) => {
  const [category, setCategory] = useState<'ecommerce' | 'social'>('social')

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
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
              <div className="flex flex-col justify-between rounded-lg border bg-white p-8 shadow-lg">
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
                <Button className="mt-8">Comenzar</Button>
              </div>
              <div className="relative flex flex-col justify-between rounded-lg border bg-white p-8 shadow-lg">
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
                <Button className="mt-8">Comenzar</Button>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-white p-8 shadow-lg">
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
                <Button className="mt-8">Comenzar</Button>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col justify-between rounded-lg border bg-white p-8 shadow-lg md:col-span-3/2">
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
                <Button className="mt-8">Comenzar</Button>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-white p-8 shadow-lg md:col-span-3/2">
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
                <div className="mt-8">
                  <Button className="w-full">Comenzar</Button>
                  <p className="mt-2 text-center text-sm text-gray-500">
                    Opción de agregar 100 productos adicionales
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
})

Pricing.displayName = 'Pricing'

export { Pricing }

