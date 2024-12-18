'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Pricing } from '../components/pricing'
import { useState, useEffect } from 'react'

export default function CotizadorPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDinoVisible, setIsDinoVisible] = useState(false)

  useEffect(() => {
    const dinoTimer = setTimeout(() => {
      setIsDinoVisible(true)
    }, 1000)
    return () => clearTimeout(dinoTimer)
  }, [])

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto bg-white">
        <header className="sticky top-0 z-50 flex items-center justify-between p-4 md:p-6">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-[#5D3FD3] hover:text-[#4DFF4D] transition-colors">
              dino social
            </Link>
            <div 
              className={`transition-all duration-[5000ms] ease-in-out transform ${
                isDinoVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
              }}
            >
              <div className={`ml-2 ${isDinoVisible ? 'animate-dino-walk' : ''}`}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PARKpBuXWtXeeUg1J5sOkZw8qrJDax.png"
                  alt="Friendly dinosaur mascot"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-full right-0 md:top-auto bg-white md:bg-transparent flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0 shadow-lg md:shadow-none z-50`}>
              <Link href="/#services" className="text-[#5D3FD3] hover:text-[#4DFF4D] transition-colors">Services</Link>
              <Link href="/#about" className="text-[#5D3FD3] hover:text-[#4DFF4D] transition-colors">About</Link>
              <Link href="/#cotizador" className="text-[#5D3FD3] hover:text-[#4DFF4D] transition-colors">Cotizador</Link>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  className="border-[#5D3FD3] text-[#5D3FD3] hover:bg-[#5D3FD3] hover:text-white"
                >
                  Get in touch
                </Button>
              </Link>
            </nav>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden ml-4"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </header>

        <main className="container mx-auto py-10">
          <h1 className="text-3xl font-bold text-center mb-10">Cotizador</h1>
          <Pricing />
        </main>
      </div>

      <style jsx global>{`
        @keyframes dinoWalk {
          0% {
            transform: translateX(200px);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-dino-walk {
          animation: dinoWalk 5s ease-in-out forwards;
        }
      `}</style>
    </div>
  )
}



