"use client"

import { cn } from "@/lib/utils"
import { Bookmark, Crown, HelpCircle, Home, LogOut, Mail, MessageSquare, Settings, Users, Wallet } from 'lucide-react'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const sidebarLinks = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Wallet, label: "Wallet", href: "/wallet" },
  { icon: Users, label: "Friends", href: "/friends" },
  { icon: MessageSquare, label: "Messages", href: "/messages" },
  { icon: Bookmark, label: "Bookmarks", href: "/bookmarks" },
  { icon: Crown, label: "Go Premium", href: "/premium" },
  { icon: Mail, label: "Notifications", href: "/notifications" },
  { icon: Settings, label: "Settings", href: "/settings" },
  { icon: HelpCircle, label: "Help Center", href: "/help" },
]

export function Sidebar() {
  const pathname = usePathname()
  
  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-white">
      <div className="p-4">
        <Input
          type="search"
          placeholder="Search..."
          className="h-9 bg-gray-100"
        />
      </div>
      
      <nav className="flex-1 space-y-1 p-2">
        {sidebarLinks.map((link) => {
          const Icon = link.icon
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900",
                pathname === link.href && "bg-gray-100 text-gray-900"
              )}
            >
              <Icon className="h-5 w-5" />
              {link.label}
            </Link>
          )
        })}
      </nav>

      <div className="border-t p-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gray-200" />
          <div>
            <div className="font-medium">Darlington Bruggles</div>
            <div className="text-sm text-gray-500">User1D39037</div>
          </div>
        </div>
        <Button
          variant="ghost"
          className="mt-4 w-full justify-start gap-3 text-gray-500"
        >
          <LogOut className="h-5 w-5" />
          Log out
        </Button>
      </div>
    </aside>
  )
}

