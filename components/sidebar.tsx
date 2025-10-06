"use client"

import { cn } from "@/lib/utils"
import { LayoutDashboard, Coffee, FileEdit, Shuffle, Box, Repeat, Leaf, Command, UserPlus, LogOut, Archive, Car, Package, Upload } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

interface SidebarProps {
  currentPage?: string
}

const navigationItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard", key: "dashboard" },
  { name: "Collecte", icon: Leaf, href: "/collecte", key: "collecte" },
  // these items will be grouped under 'Gestion Distillation'
  { name: "Produit Fini", icon: Box, href: "/produitFini", key: "produitFini" },
  { name: "Stock de produit Fini", icon: Archive, href: "/stockProduitFini", key: "stockProduitFini" },
  { name: "Transport", icon: Car, href: "/transport", key: "transport" },
  { name: "Eugénol", icon: Coffee, href: "/eugenol", key: "eugenol" },
]

export function Sidebar({ currentPage = "dashboard" }: SidebarProps) {
  const [activeKey, setActiveKey] = useState(currentPage)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  // Fermer le sidebar mobile quand on clique sur un lien
  const handleNavigation = (key: string) => {
    setActiveKey(key)
    setIsMobileOpen(false)
  }

  // Fermer le sidebar quand on clique en dehors (mobile)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('mobile-sidebar')
      const menuButton = document.getElementById('mobile-menu-button')
      
      if (isMobileOpen && sidebar && !sidebar.contains(event.target as Node) &&
          menuButton && !menuButton.contains(event.target as Node)) {
        setIsMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMobileOpen])

  return (
    <>
      {/* Bouton Menu Mobile */}
      <button
        id="mobile-menu-button"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="md:hidden fixed top-0 left-0 z-50 w-12 h-12 bg-transparent text-black rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div className="flex flex-col items-center justify-center space-y-1">
          <span className={cn(
            "block w-6 h-0.5 bg-black rounded transition-transform duration-300",
            isMobileOpen ? "rotate-45 translate-y-2" : ""
          )}/>
          <span className={cn(
            "block w-6 h-0.5 bg-black rounded transition-opacity duration-300",
            isMobileOpen ? "opacity-0" : "opacity-100"
          )}/>
          <span className={cn(
            "block w-6 h-0.5 bg-black rounded transition-transform duration-300",
            isMobileOpen ? "-rotate-45 -translate-y-2" : ""
          )}/>
        </div>
      </button>

      {/* Overlay Mobile */}
      {isMobileOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 z-40 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar Desktop */}
      <div className="hidden md:flex w-64 flex-col flex-shrink-0 shadow-2xl bg-gradient-to-b from-[#76bc21] to-[#5aa017] text-white">
        <SidebarContent activeKey={activeKey} onNavigation={setActiveKey} />
      </div>

      {/* Sidebar Mobile */}
      <div
        id="mobile-sidebar"
        className={cn(
          "md:hidden fixed top-0 left-0 h-full w-72 flex flex-col z-50 transform transition-transform duration-300 shadow-2xl",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
        style={{ background: "linear-gradient(180deg, #76bc21 0%, #5aa017 100%)", color: "white" }}
      >
        <SidebarContent activeKey={activeKey} onNavigation={handleNavigation} />
      </div>
    </>
  )
}

function SidebarContent({ activeKey, onNavigation }: { activeKey: string, onNavigation: (key: string) => void }) {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-6 border-b border-white/30 flex items-center space-x-4">
        <div className="relative">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="font-bold text-xl text-[#76bc21]">V</span>
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-300 rounded-full border-2 border-white"></div>
        </div>
        <div>
          <h1 className="font-bold text-xl tracking-tight">VIA INDUSTRIES</h1>
          <p className="text-sm opacity-90 font-light">Gestion de Production</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-4">
        <p className="text-xs uppercase tracking-widest opacity-70 px-4 py-3 font-semibold bg-white/5 rounded-lg mb-4">
          Navigation Principale
        </p>
        <ul className="space-y-2">
          {navigationItems.filter(i => !["expition","initialisation","distillation","transport"].includes(i.key)).map((item, idx) => (
            <li key={item.key}>
              <Link
                href={item.href}
                onClick={() => onNavigation(item.key)}
                className={cn(
                  "flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-300 relative",
                  activeKey === item.key
                    ? "bg-white text-[#76bc21] font-semibold shadow-lg"
                    : "hover:bg-gray-300  hover:bg-opacity-20 hover:scale-105"
                )}
              >
                <div className={cn(
                  "p-2 rounded-lg transition-all duration-300",
                  activeKey === item.key ? "bg-[#76bc21] text-white" : "bg-white/10 text-white"
                )}>
                  <item.icon className="w-5 h-5" />
                </div>
                <span className={cn(activeKey === item.key ? "text-[#76bc21] font-semibold" : "text-white")}>{item.name}</span>
              </Link>

              {/* Insert Gestion Distillation right after Collecte */}
              {item.key === 'collecte' && (
                <SidebarDistillationGroup activeKey={activeKey} onNavigation={onNavigation} />
              )}

              {/* Insert Gestion Vente right after Eugénol */}
              {item.key === 'eugenol' && (
                <SidebarVenteGroup activeKey={activeKey} onNavigation={onNavigation} />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Compte */}
      <div className="p-4 border-t border-white/30 space-y-3 flex-shrink-0">
        <p className="text-xs uppercase tracking-widest opacity-70 font-semibold">Gestion du Compte</p>
        <button className="w-full flex items-center space-x-4 px-4 py-3 rounded-xl hover:bg-white hover:bg-opacity-20 transition-all duration-300">
          <div className="p-2 rounded-lg bg-white/10 text-white">
            <UserPlus className="w-5 h-5" />
          </div>
          <span className="text-white font-medium">Créer un compte</span>
        </button>
        <button className="w-full flex items-center space-x-4 px-4 py-3 rounded-xl hover:bg-white hover:bg-opacity-20 transition-all duration-300">
          <div className="p-2 rounded-lg bg-white/10 text-white">
            <LogOut className="w-5 h-5" />
          </div>
          <span className="text-white font-medium">Déconnexion</span>
        </button>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-white/30 text-center flex-shrink-0">
        <div className="bg-white/5 rounded-lg p-3">
          <p className="text-xs opacity-80 font-medium">VIA INDUSTRIES</p>
          <p className="text-xs opacity-60 mt-1">v2.1.0 • Production</p>
        </div>
      </div>
    </div>
  )
}

function SidebarDistillationGroup({ activeKey, onNavigation }: { activeKey: string, onNavigation: (key: string) => void }) {
  const [open, setOpen] = useState(false)

  const items = [
    { name: "Expédition", icon: FileEdit, href: "/expedition", key: "expedition" },
    { name: "Initialisation", icon: Shuffle, href: "/initialisation", key: "initialisation" },
    { name: "Distillation", icon: Repeat, href: "/distillation", key: "distillation" },
    { name: "Transport", icon: Car, href: "/transport", key: "transport" },
  ]

  const handleClickItem = (key: string) => {
    onNavigation(key)
    // keep the group open when a member is clicked
    setOpen(true)
  }

  // open the group automatically if one of its children is the active page
  useEffect(() => {
    const childKeys = items.map(i => i.key)
    if (childKeys.includes(activeKey)) {
      setOpen(true)
    }
  }, [activeKey])

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className={cn(
          "flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all duration-300",
          open ? "bg-white text-[#76bc21] font-semibold shadow-lg" : "hover:bg-gray-300 hover:bg-opacity-20"
        )}
      >
        <div className="flex items-center space-x-4">
          <div className={cn("p-2 rounded-lg transition-all duration-300", open ? "bg-[#76bc21] text-white" : "bg-white/10 text-white")}>
            <Repeat className="w-5 h-5" />
          </div>
          <span className={cn(open ? "text-[#76bc21] font-semibold" : "text-white")}>Gestion Distillation</span>
        </div>
        <div className={cn("p-2 rounded-lg bg-white/10 text-white")}>{open ? "▾" : "▸"}</div>
      </div>

      {open && (
        <ul className="mt-2 space-y-2 pl-6">
          {items.map((it) => (
            <li key={it.key}>
              <Link
                href={it.href}
                onClick={() => handleClickItem(it.key)}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200",
                  activeKey === it.key ? "bg-white text-[#76bc21] font-semibold" : "hover:bg-white/10 text-white"
                )}
              >
                <div className="p-1 rounded-md bg-white/10 text-white">
                  <it.icon className="w-4 h-4" />
                </div>
                <span className={cn(activeKey === it.key ? "text-[#76bc21] font-semibold" : "text-white")}>{it.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

// Nouveau : groupe Vente (retourne un fragment pour éviter <li> imbriqué)
function SidebarVenteGroup({ activeKey, onNavigation }: { activeKey: string, onNavigation: (key: string) => void }) {
  const [open, setOpen] = useState(false)

  const items = [
    { name: "Réception", icon: Package, href: "/reception", key: "reception" },
    { name: "Agrégage Provisoire", icon: Shuffle, href: "/agregageProvisoire", key: "agregageProvisoire" },
    { name: "Agrégage Définitif", icon: Box, href: "/agregageDefinitif", key: "agregageDefinitif" },
    { name: "Exportation", icon: Upload, href: "/exportation", key: "exportation" },
  ]

  const handleClickItem = (key: string) => {
    onNavigation(key)
    setOpen(true)
  }

  useEffect(() => {
    const childKeys = items.map(i => i.key)
    if (childKeys.includes(activeKey)) {
      setOpen(true)
    }
  }, [activeKey])

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className={cn(
          "flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all duration-300",
          open ? "bg-white text-[#76bc21] font-semibold shadow-lg" : "hover:bg-gray-300 hover:bg-opacity-20"
        )}
      >
        <div className="flex items-center space-x-4">
          <div className={cn("p-2 rounded-lg transition-all duration-300", open ? "bg-[#76bc21] text-white" : "bg-white/10 text-white")}>
            <Command className="w-5 h-5" />
          </div>
          <span className={cn(open ? "text-[#76bc21] font-semibold" : "text-white")}>Gestion Vente</span>
        </div>
        <div className={cn("p-2 rounded-lg bg-white/10 text-white")}>{open ? "▾" : "▸"}</div>
      </div>

      {open && (
        <ul className="mt-2 space-y-2 pl-6">
          {items.map((it) => (
            <li key={it.key}>
              <Link
                href={it.href}
                onClick={() => handleClickItem(it.key)}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200",
                  activeKey === it.key ? "bg-white text-[#76bc21] font-semibold" : "hover:bg-white/10 text-white"
                )}
              >
                <div className="p-1 rounded-md bg-white/10 text-white">
                  <it.icon className="w-4 h-4" />
                </div>
                <span className={cn(activeKey === it.key ? "text-[#76bc21] font-semibold" : "text-white")}>{it.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
