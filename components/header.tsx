"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Bell, Globe, Grid, Search, ChevronDown } from 'lucide-react'
import Image from "next/image"

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b px-6">
      <div className="flex items-center gap-2">
        <Image
          src="/linguamura-logo.svg"
          alt="LinguaMura"
          width={32}
          height={32}
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-2">
              Linguamura Learn
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Education</DropdownMenuItem>
            <DropdownMenuItem>Health</DropdownMenuItem>
            <DropdownMenuItem>Marketplace</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Globe className="h-5 w-5" />
          <span>English</span>
        </div>
        <Grid className="h-5 w-5" />
        <Bell className="h-5 w-5" />
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full"
        >
          <Image
            src="/avatar.jpg"
            alt="Avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
        </Button>
      </div>
    </header>
  )
}

