"use client"

import { cn } from "@/lib/utils"
import { LayoutDashboard, Package, Truck, CheckCircle, Leaf, Command, UserPlus, LogOut } from "lucide-react"
import Link from "next/link"

interface SidebarProps {
  currentPage?: string
}

const navigationItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard", key: "dashboard" },
  { name: "Collecte", icon: Package, href: "/collecte", key: "collecte" },
  { name: "Expédition", icon: Truck, href: "/expedition", key: "expedition" },
  { name: "Distillation", icon: CheckCircle, href: "/distillation", key: "distillation" },
  { name: "Eugénol", icon: Leaf, href: "/eugenol", key: "eugenol" },
  { name: "Commande", icon: Command, href: "/commande", key: "commande" },
]

export function Sidebar({ currentPage = "dashboard" }: SidebarProps) {
  return (
    <div className="w-64 bg-sidebar text-sidebar-foreground flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-sidebar-primary rounded-full flex items-center justify-center">
            <span className="text-sidebar-primary-foreground font-bold text-sm">V</span>
          </div>
          <div>
            <h1 className="font-bold text-lg">VIA INDUSTRIES</h1>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-10">
          {navigationItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors",
                  currentPage === item.key
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground",
                )}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Additional Actions */}
      <div className="p-4 border-t border-sidebar-border space-y-2">
        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground transition-colors">
          <UserPlus className="w-5 h-5" />
          <span>Créer un compte</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground transition-colors">
          <LogOut className="w-5 h-5" />
          <span>Déconnexion</span>
        </button>
      </div>
    </div>
  )
}
