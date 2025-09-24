"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"

const expeditionData = [
  { id: 1, date: "24 Mars 2024", type: "Feuilles", quantity: 10, location: "Menambondro", status: "En attente" },
  { id: 2, date: "24 Mars 2024", type: "Griffes", quantity: 10, location: "Menambondro", status: "En attente" },
  { id: 3, date: "24 Mars 2024", type: "Griffes", quantity: 10, location: "Manakara", status: "En attente" },
  { id: 4, date: "24 Mars 2024", type: "Clous", quantity: 10, location: "Menambondro", status: "En attente" },
  { id: 5, date: "24 Mars 2024", type: "Clous", quantity: 10, location: "Manakara", status: "En attente" },
]

interface ExpeditionTableProps {
  onExportClick: () => void
}

export function ExpeditionTable({ onExportClick }: ExpeditionTableProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [statusFilter, setStatusFilter] = useState("Non livré")

  return (
    <Card>
      <CardHeader className="space-y-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium">Date de début</label>
            <Input type="date" className="w-40" defaultValue="2024-03-01" />
          </div>
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium">Date de fin</label>
            <Input type="date" className="w-40" defaultValue="2024-03-31" />
          </div>
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium">Statut à afficher</label>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Non livré">Non livré</SelectItem>
                <SelectItem value="Livré">Livré</SelectItem>
                <SelectItem value="Tous">Tous</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium">Par page</label>
            <Select value={itemsPerPage.toString()} onValueChange={(value) => setItemsPerPage(Number(value))}>
              <SelectTrigger className="w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button variant="outline" size="sm">
            <Search className="w-4 h-4 mr-2" />
            Chercher
          </Button>
        </div>

        <div className="flex items-center space-x-2">
          <Button onClick={onExportClick} variant="outline" size="sm">
            Exporter
          </Button>
          <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
            Arrivés
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-primary text-primary-foreground">
                <th className="text-left p-3 font-medium">ID</th>
                <th className="text-left p-3 font-medium">Date de livraison</th>
                <th className="text-left p-3 font-medium">Type</th>
                <th className="text-left p-3 font-medium">Quantité en tonnes</th>
                <th className="text-left p-3 font-medium">Lieu</th>
                <th className="text-left p-3 font-medium">Livrer</th>
                <th className="text-left p-3 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {expeditionData.map((item) => (
                <tr key={item.id} className="border-b bg-red-50 hover:bg-red-100 transition-colors">
                  <td className="p-3 font-medium">{item.id}</td>
                  <td className="p-3">{item.date}</td>
                  <td className="p-3">
                    <Badge variant="secondary" className="bg-red-100 text-red-800">
                      {item.type}
                    </Badge>
                  </td>
                  <td className="p-3">{item.quantity}</td>
                  <td className="p-3">{item.location}</td>
                  <td className="p-3">
                    <Badge variant="outline" className="text-red-600 border-red-300">
                      {item.status}
                    </Badge>
                  </td>
                  <td className="p-3">
                    <input type="checkbox" className="rounded" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-muted-foreground">5 résultats - page 1 sur 1</div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>
              <ChevronLeft className="w-4 h-4" />
              Prec
            </Button>
            <Button variant="outline" size="sm" disabled>
              Suiv
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
