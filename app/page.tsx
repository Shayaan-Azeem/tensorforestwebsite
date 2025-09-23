'use client'

import React from 'react'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white p-8 md:p-16">
      <div className="max-w-3xl mx-auto">
        <div className="mb-4 -ml-12">
          <Image
            src="/images/tensorforest-logo.png"
            alt="tensorforest logo"
            width={120}
            height={120}
            className="object-contain"
          />
        </div>

        <div className="space-y-8 font-mono text-black text-sm tracking-tight">
          <p>hi! we&apos;re tensor forest</p>

          <p>we&apos;ve been building ai drones for the past year</p>

          <p>
            our first prototype generated forest risk maps using feature extraction on aerial imagery and vegetation
            indices. we competed and won bronze in world robot olympiad with this.
          </p>

          <p>
            our second prototype added autonomous flight and onboard inference, so we could process data in real time
            while covering bigger regions. we ended up crashing it during testing ;(
          </p>

          <p>
            our third prototype could map vegetation, create digital surface models, and generate accurate vegetation maps.
          </p>

          <p>
            we worked with the town of oakville to map all the parks + vegetation/forested regions in canada
          </p>

          <p>
            we were offered a 250k+ preseed but we said no (for now)
          </p>

          <p>
            our current iteration is an open source drone platform to help anyone map vegetation and use
            insights for their own use/farmers/fire departments etc, streamlining the hell of a
            process that is gis
          </p>

          <div className="mt-16">
            <p className="text-xs text-gray-500 mb-4">SUPPORTED BY</p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
              <Image
                src="/logos/Entrepreneurs_First_Logo.png"
                alt="E/F"
                width={64}
                height={64}
                className="w-16 h-auto filter grayscale hover:grayscale-0 transition-all duration-300"
              />
              <Image
                src="/logos/RHF-ingenious-en-colour.png"
                alt="RHF"
                width={64}
                height={64}
                className="w-16 h-auto filter grayscale hover:grayscale-0 transition-all duration-300"
              />
              <Image
                src="/logos/logo-with-wordmark.webp"
                alt="Logo with Wordmark"
                width={64}
                height={64}
                className="w-16 h-auto filter grayscale hover:grayscale-0 transition-all duration-300"
              />
              <Image
                src="/logos/logo.svg"
                alt="Logo"
                width={64}
                height={64}
                className="w-16 h-auto filter grayscale hover:grayscale-0 transition-all duration-300"
              />
              <Image
                src="/logos/Screen Shot 2021-06-21 at 2.28.27 PM.png"
                alt="Partner Logo"
                width={64}
                height={64}
                className="w-16 h-auto filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}