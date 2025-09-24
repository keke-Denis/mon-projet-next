"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function DashboardHeader() {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  return (
    <header className="bg-card border-b border-border p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Tableaux de bord</h1>
        </div>

        <div className="flex items-center space-x-4">
          {/* Date début */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Date de début</span>
            <Input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-40"
              placeholder="JJ/MM/AA"
            />
          </div>

          {/* Date fin */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Date de fin</span>
            <Input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-40"
              placeholder="JJ/MM/AA"
            />
          </div>

          {/* Bouton rechercher */}
          <Button className="bg-primary text-primary-foreground">Rechercher</Button>

          {/* Utilisateur */}
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage src="/user.png" alt="User" />
              <AvatarFallback >JD</AvatarFallback>
            </Avatar>
            <span className="text-sm">John Doe</span>
          </div>
        </div>
      </div>
    </header>
  )
}
