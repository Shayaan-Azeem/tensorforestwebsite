'use client'

import React from 'react'
import Image from 'next/image'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white p-8 md:p-16">
      <div className="max-w-xl mx-auto">
        <div className="mb-4 -ml-12">
          <div className="relative">
            <Image
              src="/images/tensorforest-logo.png"
              alt="tensorforest logo"
              width={120}
              height={120}
              className="object-contain"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
            <div className="absolute inset-0" onContextMenu={(e) => e.preventDefault()}></div>
          </div>
        </div>

        <div className="space-y-5 text-sm text-black tracking-tight">
          <p>Hi! We&apos;re Tensor Forest</p>

          <p>We&apos;ve been building AI drones for the past year.</p>

          <div className="space-y-6">
            <HoverCard openDelay={0} closeDelay={0}>
              <HoverCardTrigger asChild>
                <p className="cursor-pointer hover:text-gray-600 transition-colors">
                  Our first prototype generated forest risk maps using feature extraction on aerial imagery and vegetation indices.
                </p>
              </HoverCardTrigger>
              <HoverCardContent className="w-[250px] md:w-[300px] cursor-move !rounded-none md:-translate-x-[50%] left-0 md:left-auto max-w-[calc(100vw-2rem)]" onPointerDownCapture={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src="/drones/v1.png"
                      alt="First prototype"
                      fill
                      className="object-cover"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
                    <div className="absolute inset-0" onContextMenu={(e) => e.preventDefault()}></div>
                  </div>
                  <p className="italic text-sm text-gray-600">
                    we competed and won bronze in world robot olympiad with this.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>

            <HoverCard openDelay={0} closeDelay={0}>
              <HoverCardTrigger asChild>
                <p className="cursor-pointer hover:text-gray-600 transition-colors">
                  Our second prototype added autonomous flight and onboard inference, so we could process data in real-time while covering bigger regions.
                </p>
              </HoverCardTrigger>
              <HoverCardContent className="w-[250px] md:w-[300px] cursor-move !rounded-none md:-translate-x-[50%] left-0 md:left-auto max-w-[calc(100vw-2rem)]" onPointerDownCapture={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src="/drones/v2.png"
                      alt="Second prototype"
                      fill
                      className="object-cover"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
                    <div className="absolute inset-0" onContextMenu={(e) => e.preventDefault()}></div>
                  </div>
                  <p className="italic text-sm text-gray-600">
                    we ended up crashing it during testing ;(
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>

            <HoverCard openDelay={0} closeDelay={0}>
              <HoverCardTrigger asChild>
                <p className="cursor-pointer hover:text-gray-600 transition-colors">
                  Our third prototype could build detailed vegetation maps, digital surface models, and orthomosaic outputs.
                </p>
              </HoverCardTrigger>
              <HoverCardContent className="w-[250px] md:w-[300px] cursor-move !rounded-none md:-translate-x-[50%] left-0 md:left-auto max-w-[calc(100vw-2rem)]" onPointerDownCapture={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src="/drones/v3.png"
                      alt="Third prototype"
                      fill
                      className="object-cover"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable="false"
                    />
                    <div className="absolute inset-0" onContextMenu={(e) => e.preventDefault()}></div>
                  </div>
                  <p className="italic text-sm text-gray-600">
                    don&apos;t worry we taught the drone to fly better
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>

          <p className="text-xs text-gray-500">
            We worked with <a href="https://www.oakville.ca/" target="_blank" rel="noopener noreferrer" className="text-inherit no-underline">the Town of Oakville</a> to map parks and forested regions across the city.
          </p>

          <p className="text-xs text-gray-500">
            We were offered a 250k+ pre seed but said no (for now)
          </p>

          <p>
            Our current iteration is an open source drone platform that can go from accurate real world data to key insight without needing GIS expertise.
          </p>

          <p>
            Do you wanna join or support us?{' '}
            <a 
              href="mailto:tensorforest.team@gmail.com" 
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Let&apos;s talk
            </a>
          </p>

          <div className="mt-8">
            <p className="text-xs text-gray-500 mb-4">Supported by</p>
             <div className="flex gap-4 md:gap-8 items-center overflow-x-auto pb-2">
              <div className="relative">
                <Image
                  src="/logos/Entrepreneurs_First_Logo.png"
                  alt="E/F"
                  width={80}
                  height={80}
                   className="w-14 md:w-16 h-auto filter grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <div className="absolute inset-0" onContextMenu={(e) => e.preventDefault()}></div>
              </div>
              <div className="relative">
                <Image
                  src="/logos/RHF-ingenious-en-colour.png"
                  alt="RHF"
                  width={80}
                  height={80}
                   className="w-14 md:w-16 h-auto filter grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <div className="absolute inset-0" onContextMenu={(e) => e.preventDefault()}></div>
              </div>
              <div className="relative">
                <Image
                  src="/logos/logo-with-wordmark.webp"
                  alt="Logo with Wordmark"
                  width={80}
                  height={80}
                   className="w-14 md:w-16 h-auto filter grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <div className="absolute inset-0" onContextMenu={(e) => e.preventDefault()}></div>
              </div>
              <div className="relative">
                <Image
                  src="/logos/logo.svg"
                  alt="Logo"
                  width={80}
                  height={80}
                   className="w-14 md:w-16 h-auto filter grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <div className="absolute inset-0" onContextMenu={(e) => e.preventDefault()}></div>
              </div>
              <div className="relative">
                <Image
                  src="/logos/Screen Shot 2021-06-21 at 2.28.27 PM.png"
                  alt="Partner Logo"
                  width={80}
                  height={80}
                   className="w-14 md:w-16 h-auto filter grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <div className="absolute inset-0" onContextMenu={(e) => e.preventDefault()}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}