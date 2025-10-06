"use client"

import { Button } from "@/components/ui/button"

interface HeaderProps {
  title: string
  onInsertionClick?: () => void
  onExportClick?: () => void
}

export function Header({ title, onInsertionClick, onExportClick }: HeaderProps) {
  return (
    <header className="bg-card border-b border-border p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-card-foreground ">{title}</h1>
        </div>
        <div className="flex items-center space-x-4">
          {/* Profil utilisateur */}
          <div className="flex items-center space-x-2 bg-muted px-3 py-2 rounded-lg">
            <div className="w-8 h-8 bg-[#76bc21] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">JD</span>
            </div>
            <span className="text-sm font-medium">Jhon Doe</span>
          </div>
        </div>
      </div>
    </header>
  )
}
