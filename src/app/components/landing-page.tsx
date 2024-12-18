'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Heart, Menu, X, Building2, Building, Store, Plus, ArrowRight, CircleDot } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState, useEffect, useRef, useMemo, forwardRef } from 'react'
import Footer from '@/app/footer/Footer'
import { Pricing } from '@/app/components/pricing'
import { cn } from '@/lib/utils'

interface Client {
  name: string;
  icon: React.ElementType;
  count: number;
  description: string;
  showPlus: boolean;
}

function ClientsSection() {
  const clients: Client[] = useMemo(() => [
    {
      name: "FARMACIA GRIMALDI",
      icon: Building2,
      count: 200,
      description: "Increase your Instagram followers",
      showPlus: true
    },
    {
      name: "PATHROS",
      icon: Building,
      count: 100,
      description: "From offline to online shop",
      showPlus: false
    },
    {
      name: "CITY CELL",
      icon: Store,
      count: 100,
      description: "Increase your reach",
      showPlus: true
    }
  ], [])

  const [counts, setCounts] = useState(clients.map(() => 0))
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setCounts(prevCounts =>
        prevCounts.map((count, index) => {
          if (count < clients[index].count) {
            return Math.min(count + 1, clients[index].count)
          }
          return count
        })
      )
    }, 20)

    return () => clearInterval(interval)
  }, [isVisible, clients])

  return (
    <section ref={sectionRef} id="clients-section" className="w-full bg-[#5D3FD3]/5 py-16 md:py-24">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-[#5D3FD3] sm:text-4xl md:text-5xl">
              Trusted by Industry Leaders
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We work with companies of all sizes, delivering exceptional results and building lasting partnerships.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3 justify-items-center">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="flex flex-col items-center p-6 space-y-4 rounded-lg border border-[#5D3FD3]/10 bg-white transition-all hover:border-[#4DFF4D]/50 hover:shadow-lg w-full max-w-sm"
            >
              <div className="p-3 rounded-full bg-[#5D3FD3]/10">
                <client.icon className="w-8 h-8 text-[#5D3FD3]" />
              </div>
              <div className="flex items-center text-4xl font-bold tracking-tighter text-[#4DFF4D]">
                {client.showPlus && <Plus className="w-8 h-8 mr-1" />}
                <span className="tabular-nums">{counts[index]}%</span>
              </div>
              <h3 className="text-xl font-bold text-[#5D3FD3]">{client.name}</h3>
              <p className="text-sm text-gray-500 text-center">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const WhatWeDoSection = forwardRef<HTMLElement>((props, ref) => {
  const brandStrategyItems = [
    "Research & insights",
    "Brand purpose, vision & values",
    "Customer personas",
    "Brand positioning"
  ]

  return (
    <section ref={ref} className="w-full bg-[#F5F5F5] py-16 md:py-24 overflow-hidden">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1fr,auto] items-start">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5D3FD3]">
                What we do
              </h2>
              <p className="text-2xl md:text-3xl text-[#333333] max-w-[600px]">
                Our mission is to give you agency quality without the price tag.
              </p>
            </div>
            
            <div className="prose max-w-[600px]">
              <p className="text-[#333333]/80">
                With over 25 years of combined experience working agency-side, we&apos;ve learned a few tricks. 
                Our knowledge spans creative, web and digital marketing. We use this collective know-how 
                to grow your business without breaking the bank.
              </p>
              <h3 className="text-[#5D3FD3] mt-8 mb-4">How do we do that?</h3>
              <p className="text-[#333333]/80">
                We don&apos;t over-charge. We don&apos;t tell you you need something when you don&apos;t, 
                we don&apos;t have super fancy offices you just pay for the work. It&apos;s that simple.
              </p>
            </div>

            <div className="pt-4">
              <Link 
                href="#services" 
                className="inline-flex items-center space-x-2 text-[#5D3FD3] border border-[#5D3FD3]/20 rounded-full px-6 py-3 text-sm font-medium hover:bg-[#5D3FD3]/10 transition-colors duration-300"
              >
                <span>All services</span>
                <div className="w-6 h-6 rounded-full bg-[#5D3FD3]/20 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-[#5D3FD3]" />
                </div>
              </Link>
            </div>
          </div>

          <div className="space-y-6 lg:min-w-[400px]">
            <div className="relative">
              <div className="absolute inset-0 bg-[#E4B7E5] opacity-20 blur-xl rounded-full"></div>
              <div className="relative bg-[#E4B7E5] text-[#5D3FD3] px-6 py-3 rounded-full font-semibold text-lg">
                Brand strategy
              </div>
              <div className="relative mt-4 bg-[#E4B7E5]/20 rounded-3xl p-6">
                <ul className="space-y-3">
                  {brandStrategyItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-[#333333]">
                      <CircleDot className="w-4 h-4 text-[#5D3FD3]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#9747FF] opacity-20 blur-xl rounded-full"></div>
              <div className="relative bg-[#9747FF] text-white px-6 py-3 rounded-full font-semibold text-lg">
                Brand identity
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#4DFF4D] opacity-20 blur-xl rounded-full"></div>
              <div className="relative bg-[#4DFF4D] text-[#5D3FD3] px-6 py-3 rounded-full font-semibold text-lg">
                Brand promotion
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

WhatWeDoSection.displayName = 'WhatWeDoSection'

export function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isDinoVisible, setIsDinoVisible] = useState(false)
  const whatWeDoRef = useRef<HTMLElement>(null)
  const pricingRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    const dinoTimer = setTimeout(() => {
      setIsDinoVisible(true)
    }, 1000)
    return () => {
      clearTimeout(timer)
      clearTimeout(dinoTimer)
    }
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }

    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [isMenuOpen])

  return (
    <div className="min-h-screen bg-[#F5F5F5] overflow-x-hidden">
      <header className="flex items-center justify-between p-4 md:p-6 max-w-7xl mx-auto relative z-50">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold animate-gradient-text">
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
          <nav className={cn(
            "fixed inset-0 flex flex-col items-center justify-center bg-[#F5F5F5] transition-all duration-300 ease-in-out z-50",
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}>
            <div className="space-y-6 text-center">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  whatWeDoRef.current?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="block text-2xl text-[#5D3FD3] hover:text-[#4DFF4D] transition-colors cursor-pointer"
              >
                Services
              </a>
              <Link href="#about" className="block text-2xl text-[#5D3FD3] hover:text-[#4DFF4D] transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link href="/cotizador" className="block text-2xl text-[#5D3FD3] hover:text-[#4DFF4D] transition-colors" onClick={() => setIsMenuOpen(false)}>Cotizador</Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="mt-4 border-[#5D3FD3] text-[#5D3FD3] hover:bg-[#5D3FD3] hover:text-white"
                >
                  Get in touch
                </Button>
              </Link>
            </div>
          </nav>
          
          <Button
            variant="ghost"
            size="icon"
            className="relative z-50 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>

          <nav className="hidden md:flex items-center space-x-6">
            <a
              onClick={(e) => {
                e.preventDefault();
                whatWeDoRef.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-[#5D3FD3] hover:text-[#4DFF4D] transition-colors cursor-pointer"
            >
              Services
            </a>
            <Link href="#about" className="text-[#5D3FD3] hover:text-[#4DFF4D] transition-colors">About</Link>
            <Link href="/cotizador" className="text-[#5D3FD3] hover:text-[#4DFF4D] transition-colors">Cotizador</Link>
            <Link href="/contact">
              <Button 
                variant="outline" 
                className="border-[#5D3FD3] text-[#5D3FD3] hover:bg-[#5D3FD3] hover:text-white"
              >
                Get in touch
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex flex-col lg:flex-row items-center justify-between px-4 py-8 md:py-12 lg:py-16 max-w-7xl mx-auto">
        <div className={`w-full lg:w-1/2 mb-8 lg:mb-0 z-10 animate-slide-up opacity-0 ${isVisible ? '!opacity-100' : ''}`} style={{ '--delay': '0.1s' } as any}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight max-w-[600px] text-[#5D3FD3]">
            Your Ecommerce Growth Agency
          </h1>
          <p className="text-lg text-[#333333] mb-6 leading-relaxed max-w-[500px]">
            We help e-commerce brands scale by bringing data driven decisions and creativity together for a full-funnel marketing approach.
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-[#4DFF4D] hover:bg-[#E6F54D] text-black"
            >
              Get in touch
            </Button>
          </Link>
        </div>

        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-[260px] lg:max-w-[300px] flex justify-center">
            <div className={`hidden lg:block absolute left-[-210px] top-[-70px] w-[200px] z-10 animate-slide-up opacity-0 ${isVisible ? '!opacity-100' : ''}`} style={{ '--delay': '0.5s' } as any}>
              <div className="relative group">
                <div className="absolute inset-0 bg-[#E6F54D]/40 translate-x-3 translate-y-3 rounded-lg blur-sm"></div>
                <div className="relative bg-white border-2 border-[#5D3FD3] rounded-lg p-7 h-[110px] overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:border-[#4DFF4D]">
                  <div className="absolute inset-0 opacity-[0.03]">
                    <div className="w-full h-full grid grid-cols-[repeat(32,1fr)] gap-0.5">
                      {Array(32).fill(0).map((_, i) => (
                        <div key={i} className="w-full h-full flex flex-col gap-0.5">
                          {Array(16).fill(0).map((_, j) => (
                            <div key={j} className="w-full h-full bg-black"></div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative h-full flex items-center justify-center">
                    <svg 
                      viewBox="0 0 120 60" 
                      className="w-36 h-16 text-[#4DFF4D] transition-colors duration-300 group-hover:text-[#5D3FD3]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path 
                        d="M10,45 L40,15 L70,45 L100,5" 
                        className={`${isVisible ? 'animate-growthLine' : ''}`}
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className={`relative w-[200px] h-[400px] sm:w-[240px] sm:h-[480px] md:w-[280px] md:h-[560px] lg:w-[320px] lg:h-[640px] animate-slide-up opacity-0 ${isVisible ? '!opacity-100' : ''}`} style={{ '--delay': '0.4s' } as any}>
              <div className="absolute inset-0 rounded-[40px] bg-[#5D3FD3] p-1">
                <div className="relative h-full w-full bg-white rounded-[36px] overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-7 bg-[#5D3FD3] z-10 flex items-center justify-between px-4">
                    <span className="text-white text-xs">9:41</span>
                    <div className="w-16 h-6 bg-[#5D3FD3] rounded-full border border-white/20 flex items-center justify-end pr-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-white mr-1 last:mr-0" />
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-0 pt-7">
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/130209-748134173_small-3tn9zyKgO3GjmJiL38acoEiXWDo1jW.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute left-full top-1/2 -translate-y-1/2 flex flex-col gap-4 sm:gap-6 md:gap-8 ml-3 sm:ml-4 lg:ml-16 xl:ml-24">
              <div className={`lg:hidden w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#5D3FD3] rounded-lg flex items-center justify-center animate-slide-up opacity-0 ${isVisible ? '!opacity-100' : ''}`} style={{ '--delay': '0.5s' } as any}>
                <svg 
                  viewBox="0 0 120 60" 
                  className="w-6 h-6 sm:w-8 sm:h-8 text-[#4DFF4D]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path 
                    d="M10,45 L40,15 L70,45 L100,5" 
                    className={`${isVisible ? 'animate-growthLine' : ''}`}
                  />
                </svg>
              </div>
              <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-2 border-[#5D3FD3] rounded-lg flex items-center justify-center animate-slide-up opacity-0 hover:border-[#4DFF4D] transition-colors ${isVisible ? '!opacity-100' : ''}`} style={{ '--delay': '0.6s' } as any}>
                <Instagram className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-[#5D3FD3] group-hover:text-[#4DFF4D]" aria-hidden="true" />
              </div>
              <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-2 border-[#5D3FD3] rounded-lg flex items-center justify-center animate-slide-up opacity-0 hover:border-[#4DFF4D] transition-colors ${isVisible ? '!opacity-100' : ''}`} style={{ '--delay': '0.7s' } as any}>
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-[#5D3FD3]" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <ClientsSection />
      <WhatWeDoSection ref={whatWeDoRef} />
      <Pricing ref={pricingRef} />
      <section className="w-full bg-[#5D3FD3]/5 py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/agency-sketch-7dKHGBWYPEqvq8j5WBVDNPXzr4F3Xt.jpg"
                alt="Designer sketching wireframes"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                priority
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5D3FD3]">
                We&apos;re called dino social for a reason
              </h2>
              <h3 className="text-xl md:text-2xl text-[#5D3FD3]/90">
                We are a small team of creatives who want to see digital work done well.
              </h3>
              <p className="text-[#5D3FD3]/80 text-lg">
                We&apos;ve built processes and formed strong values which have become the foundations of dino social. 
                We may not be related, but we certainly are family and we believe that everyone deserves amazing work at a realistic price.
              </p>
              <Button 
                className="bg-[#4DFF4D] hover:bg-[#E6F54D] text-[#5D3FD3] gap-2 group transition-colors"
                size="lg"
              >
                Find out more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes gradient-text {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient-text {
          background: linear-gradient(
            to right,
            #5D3FD3,
            #4DFF4D,
            #E6F54D,
            #5D3FD3
          );
          background-size: 300% 300%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: gradient-text 6s linear infinite;
        }

        @keyframes slideUp {
          0% {
            transform: translate3d(0, 100px, 0);
            opacity: 0;
          }
          20% {
            transform: translate3d(0, 95px, 0);
            opacity: 0.2;
          }
          100% {
            transform: translate3d(0, 0, 0);
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slideUp 2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: var(--delay, 0s);
        }

        @keyframes growthLine {
          0% {
            stroke-dasharray: 200;
            stroke-dashoffset: 200;
          }
          100% {
            stroke-dasharray: 200;
            stroke-dashoffset: 0;
          }
        }

        .animate-growthLine {
          animation: growthLine 3s ease-in-out forwards;
        }

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

