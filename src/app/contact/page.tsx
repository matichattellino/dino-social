'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useState, useEffect } from 'react'

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDinoVisible, setIsDinoVisible] = useState(false)
  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set())

  useEffect(() => {
    const dinoTimer = setTimeout(() => {
      setIsDinoVisible(true)
    }, 1000)
    return () => clearTimeout(dinoTimer)
  }, [])

  const services = [
    { id: 'strategy', name: 'Strategy' },
    { id: 'branding', name: 'Branding' },
    { id: 'website', name: 'Website' },
    { id: 'social-media', name: 'Social Media' },
  ]

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => {
      const newSet = new Set(prev)
      if (newSet.has(serviceId)) {
        newSet.delete(serviceId)
      } else {
        newSet.add(serviceId)
      }
      return newSet
    })
  }

  const isServiceSelected = (serviceId: string) => selectedServices.has(serviceId)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Selected services:', Array.from(selectedServices))
  }

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
              <Link href="/#careers" className="text-[#5D3FD3] hover:text-[#4DFF4D] transition-colors">Careers</Link>
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

        <main className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#5D3FD3] mb-2 block">Contact us</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Let&apos;s talk about what<br />you need
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our team is always on hand to talk through how we can help be your brand accelerator.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
              <a href="tel:0117 256 5030" className="text-[#5D3FD3] hover:text-[#4DFF4D] transition-colors">
                0117 256 5030
              </a>
              <a href="mailto:hello@company.com" className="text-[#5D3FD3] hover:text-[#4DFF4D] transition-colors">
                hello@company.com
              </a>
              <Button className="bg-[#4DFF4D] hover:bg-[#E6F54D] text-black gap-2">
                Book a call with us
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="relative">
                  <Label 
                    htmlFor="firstName" 
                    className="absolute -top-[0.7em] left-4 px-2 bg-white text-[#5D3FD3] text-sm"
                  >
                    First name
                  </Label>
                  <Input
                    id="firstName"
                    className="border-2 border-[#4DFF4D] rounded-xl h-16 focus:border-[#4DFF4D] focus:ring-0 focus-visible:ring-0"
                    required
                  />
                </div>
                <div className="relative">
                  <Label 
                    htmlFor="lastName" 
                    className="absolute -top-[0.7em] left-4 px-2 bg-white text-[#5D3FD3] text-sm"
                  >
                    Last name
                  </Label>
                  <Input
                    id="lastName"
                    className="border-2 border-[#4DFF4D] rounded-xl h-16 focus:border-[#4DFF4D] focus:ring-0 focus-visible:ring-0"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <Label 
                  htmlFor="company" 
                  className="absolute -top-[0.7em] left-4 px-2 bg-white text-[#5D3FD3] text-sm"
                >
                  Company name
                </Label>
                <Input
                  id="company"
                  className="border-2 border-[#4DFF4D] rounded-xl h-16 focus:border-[#4DFF4D] focus:ring-0 focus-visible:ring-0"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="relative">
                  <Label 
                    htmlFor="email" 
                    className="absolute -top-[0.7em] left-4 px-2 bg-white text-[#5D3FD3] text-sm"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className="border-2 border-[#4DFF4D] rounded-xl h-16 focus:border-[#4DFF4D] focus:ring-0 focus-visible:ring-0"
                    required
                  />
                </div>
                <div className="relative">
                  <Label 
                    htmlFor="phone" 
                    className="absolute -top-[0.7em] left-4 px-2 bg-white text-[#5D3FD3] text-sm"
                  >
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    className="border-2 border-[#4DFF4D] rounded-xl h-16 focus:border-[#4DFF4D] focus:ring-0 focus-visible:ring-0"
                    required
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-[#5D3FD3] text-lg">Services required</Label>
                <div className="flex flex-col md:grid md:grid-cols-2 gap-3">
                  {services.map((service) => {
                    const isSelected = isServiceSelected(service.id)
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          toggleService(service.id)
                        }}
                        className={`w-full px-6 py-4 md:py-2 rounded-full border-2 border-[#4DFF4D] transition-all duration-200
                          ${isSelected 
                            ? 'bg-[#4DFF4D] text-black' 
                            : 'bg-white text-gray-600'
                          }`}
                      >
                        {service.name}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="relative">
                <Label 
                  htmlFor="projectDetails" 
                  className="absolute -top-[0.7em] left-4 px-2 bg-white text-[#5D3FD3] text-sm"
                >
                  Additional Project Details
                </Label>
                <Textarea
                  id="projectDetails"
                  className="border-2 border-[#4DFF4D] rounded-xl min-h-[120px] focus:border-[#4DFF4D] focus:ring-0 focus-visible:ring-0"
                  placeholder="Please provide any additional details about your project..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[#4DFF4D] hover:bg-[#E6F54D] text-black h-16 rounded-xl"
              >
                Send Message
              </Button>
            </form>
          </div>
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