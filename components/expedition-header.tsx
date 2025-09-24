"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

interface ExpeditionHeaderProps {
  onExportClick: () => void
}

export function ExpeditionHeader({ onExportClick }: ExpeditionHeaderProps) {
  return (
    <header className="bg-background border-b px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Liste des girofles en attentes</h1>

        <div className="flex items-center space-x-2">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-primary text-primary-foreground text-sm">JD</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">Jhon Doe</span>
          <Button variant="ghost" size="sm" className="p-1">
            <ChevronDown className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
