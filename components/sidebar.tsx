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
  { name: "Vente", icon: Command, href: "/commande", key: "commande" },
]

export function Sidebar({ currentPage = "dashboard" }: SidebarProps) {
  const sidebarBg = "#76bc21" 
  const textColor = "#ffffff" 

  return (
    <div className="w-64 flex flex-col" style={{ backgroundColor: sidebarBg, color: textColor }}>
      {/* Logo */}
      <div className="p-6 border-b" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: textColor }}>
            <span className="font-bold text-sm" style={{ color: sidebarBg }}>V</span>
          </div>
          <div>
            <h1 className="font-bold text-lg">VIA INDUSTRIES</h1>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-4">
          {navigationItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors",
                  currentPage === item.key
                    ? "font-bold"
                    : "hover:opacity-80"
                )}
                style={currentPage === item.key ? { backgroundColor: textColor, color: sidebarBg } : {}}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Additional Actions */}
      <div className="p-4 border-t space-y-2" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
        <button
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors hover:opacity-80"
        >
          <UserPlus className="w-5 h-5" />
          <span>Créer un compte</span>
        </button>
        <button
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors hover:opacity-80"
        >
          <LogOut className="w-5 h-5" />
          <span>Déconnexion</span>
        </button>
      </div>
    </div>
  )
}
