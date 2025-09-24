"use client"

import { Button } from "@/components/ui/button"

interface HeaderProps {
  onInsertionClick: () => void
  onExportClick: () => void
}

export function Header({ onInsertionClick, onExportClick }: HeaderProps) {
  return (
    <header className="bg-card border-b border-border p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-card-foreground">Gestion de collecte</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-muted px-3 py-2 rounded-lg">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground text-sm font-medium">JD</span>
            </div>
            <span className="text-sm font-medium">Jhon Doe</span>
          </div>
        </div>
      </div>
    </header>
  )
}
