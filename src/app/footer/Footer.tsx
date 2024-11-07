'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="relative bg-white text-[#1C1C1C] overflow-hidden">
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-serif text-[#5D3FD3]">Let's get talking</h2>
            <p className="text-gray-600 max-w-md">
              We want you to be the best in what you do, so book in to speak to our experts today.
            </p>
            <div className="flex gap-4">
              <div className="w-12 h-12 relative rounded-full overflow-hidden border-2 border-[#5D3FD3]/10">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Team member"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-12 h-12 relative rounded-full overflow-hidden border-2 border-[#5D3FD3]/10">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Team member"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-12 h-12 relative rounded-full overflow-hidden border-2 border-[#5D3FD3]/10">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Team member"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-12"> {/* Increased spacing here */}
            <div>
              <h3 className="text-gray-600 mb-2">Say hey</h3>
              <div className="space-y-2">
                <p className="text-2xl md:text-3xl text-[#5D3FD3]">0117 256 5030</p>
                <p className="text-2xl md:text-3xl text-[#5D3FD3]">hello@dinosocial.com</p>
              </div>
            </div>
            
            <div className="pt-8"> {/* Added padding-top here */}
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-[#4DFF4D] hover:bg-[#E6F54D] text-[#5D3FD3] gap-2 group w-full sm:w-auto"
                >
                  Book a time to suit you
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#5D3FD3]/10">
          <div className="grid gap-8 md:flex md:justify-between items-start">
            <div className="space-y-4 text-sm text-gray-600">
              <p>© Dino Social LTD</p>
              <p>Company registration no. 13015325 | VAT no. 469 6942 25</p>
              <p>The Bristol Office, 2nd Floor, 5 High Street, Bristol, BS9 3BY</p>
            </div>
            
            <div className="flex gap-6 text-sm">
              <Link href="https://linkedin.com" className="text-gray-600 hover:text-[#5D3FD3] flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Link>
              <Link href="/design-declares" className="text-gray-600 hover:text-[#5D3FD3]">
                Design Declares
              </Link>
              <Link href="/privacy" className="text-gray-600 hover:text-[#5D3FD3]">
                Privacy policy
              </Link>
            </div>
          </div>
          
          <div className="relative mt-12 overflow-hidden">
            <h2 className="text-right text-[12vw] md:text-[8vw] leading-[0.8] font-serif animate-gradient-text">
              dino
            </h2>
          </div>
        </div>
      </div>

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
      `}</style>
    </footer>
  )
}