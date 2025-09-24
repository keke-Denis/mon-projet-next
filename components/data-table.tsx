"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, Search, ChevronLeft, ChevronRight, Plus } from "lucide-react"

const mockData = [
  { id: 1, date: "24 Mars 2024", type: "Feuilles", quantity: 10, location: "Manakara", status: "Télécharger" },
  { id: 2, date: "24 Mars 2024", type: "Griffes", quantity: 10, location: "Menambondro", status: "Télécharger" },
  { id: 3, date: "24 Mars 2024", type: "Griffes", quantity: 10, location: "Manakara", status: "Télécharger" },
  { id: 4, date: "24 Mars 2024", type: "Clous", quantity: 10, location: "Menambondro", status: "Télécharger" },
  { id: 5, date: "24 Mars 2024", type: "Clous", quantity: 10, location: "Manakara", status: "Télécharger" },
]

interface DataTableProps {
  onInsertionClick: () => void
  onExportClick: () => void
}

export function DataTable({ onInsertionClick, onExportClick }: DataTableProps) {
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
          <Button onClick={onInsertionClick} size="sm" className="bg-primary">
            <Plus className="w-4 h-4 mr-2" />
            Ajouter
          </Button>
          <Button onClick={onExportClick} variant="outline" size="sm">
            Exporter
          </Button>
          <Button variant="outline" size="sm">
            Livraison
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="text-left p-3 font-medium">ID</th>
                <th className="text-left p-3 font-medium">Date de réception</th>
                <th className="text-left p-3 font-medium">Type</th>
                <th className="text-left p-3 font-medium">Quantité en kg</th>
                <th className="text-left p-3 font-medium">Lieu</th>
                <th className="text-left p-3 font-medium">Récus</th>
                <th className="text-left p-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockData.map((item) => (
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
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline" className="p-1 bg-transparent">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="p-1 bg-transparent">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                      <input type="checkbox" className="rounded" />
                    </div>
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
