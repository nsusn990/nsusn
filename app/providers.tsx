'use client';

import NavBar from '@/components/NavBar'
import {HeroUIProvider} from '@heroui/react'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <NavBar />
      {children}
    </HeroUIProvider>
  )
}