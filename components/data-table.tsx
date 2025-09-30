"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Plus, ChevronLeft, ChevronRight, MoreVertical, CreditCard, FileText, Truck, File } from "lucide-react"
import { ActionModal } from "./ActionModal"
import { FacturationModal } from "./FacturationModal"
import { ImpeyerModal } from "./Impeyer"
import { FicheLivraisonModal } from "./FicheLivraison"   
import { ConfirmationModal } from "./ConfirmationModal"

const mockData = [
  { id: 1, date: "24 Mars 2024", type: "Feuilles", quantity: 10, location: "Manakara", status: "En attente de livraison" },
  { id: 2, date: "24 Mars 2024", type: "Griffes", quantity: 10, location: "Menambondro", status: "Non payé" },
  { id: 3, date: "24 Mars 2024", type: "Griffes", quantity: 10, location: "Manakara", status: "Paiement incomplet" },
  { id: 4, date: "24 Mars 2024", type: "Clous", quantity: 10, location: "Menambondro", status: "Payé" },
  { id: 5, date: "24 Mars 2024", type: "Clous", quantity: 10, location: "Manakara", status: "Non payé" },
]

interface DataTableProps {
  onInsertionClick: () => void
  onExportClick: () => void
}

export function DataTable({ onInsertionClick, onExportClick }: DataTableProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [openMenuId, setOpenMenuId] = useState<number | null>(null)

  // Modals séparés
  const [isFacturationOpen, setIsFacturationOpen] = useState(false)
  const [isImpeyerOpen, setIsImpeyerOpen] = useState(false)
  const [isFicheLivraisonOpen, setIsFicheLivraisonOpen] = useState(false)

  // Confirmation livraison
  const [isConfirmLivraisonOpen, setIsConfirmLivraisonOpen] = useState(false)

  const filteredData = mockData.filter((item) =>
    item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleMenu = (item: typeof mockData[0]) => {
    if (item.status === "En attente de livraison") return 
    setOpenMenuId(openMenuId === item.id ? null : item.id)
  }

  const handleImpeyerClick = () => {
    setIsImpeyerOpen(true)
    setOpenMenuId(null) 
  }

  const handleConfirmLivraison = () => {
    console.log("Livraison confirmée !") 
    setIsConfirmLivraisonOpen(false)
    setOpenMenuId(null)
  }

  const renderActions = (item: typeof mockData[0]) => {
    const btnClass = "flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-100 cursor-pointer"

    switch (item.status) {
      case "Non payé":
        return (
          <>
            <button className={btnClass} onClick={() => setIsFacturationOpen(true)}>
              <File className="w-4 h-4" /> Facturation
            </button>
            <button className={btnClass} onClick={handleImpeyerClick}>
              <CreditCard className="w-4 h-4" /> Impayé
            </button>
          </>
        )
      case "Payé":
        return (
          <>
            <button className={btnClass} onClick={() => setIsFicheLivraisonOpen(true)}>
              <FileText className="w-4 h-4" /> Fiche de livraison
            </button>
            <button className={btnClass} onClick={() => setIsConfirmLivraisonOpen(true)}>
              <Truck className="w-4 h-4" /> Livraison
            </button>
          </>
        )
      case "Paiement incomplet":
        return (
          <button className={btnClass} onClick={handleImpeyerClick}>
            <CreditCard className="w-4 h-4" /> Impayé
          </button>
        )
      default:
        return null
    }
  }

  return (
    <>
      <Card>
        <CardHeader className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Button onClick={onInsertionClick} size="sm" className="bg-[#76bc21] text-white hover:bg-[#5aa017] cursor-pointer">
              <Plus className="w-4 h-4 mr-2" />
              Ajouter
            </Button>
            <Button onClick={onExportClick} variant="outline" size="sm" className="cursor-pointer">
              Exporter
            </Button>
            <Button variant="outline" size="sm" className="cursor-pointer">
              Livraison
            </Button>
          </div>
          <Input
            type="text"
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-70"
          />
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="p-3 font-medium">ID</th>
                  <th className="p-3 font-medium">Date de réception</th>
                  <th className="p-3 font-medium">Type</th>
                  <th className="p-3 font-medium">Provenance</th>
                  <th className="p-3 font-medium">Quantité</th>
                  <th className="p-3 font-medium">Etat du MP</th>
                  <th className="p-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-100 transition-colors">
                    <td className="p-3 font-medium">{item.id}</td>
                    <td className="p-3">{item.date}</td>
                    <td className="p-3">
                      <Badge variant="secondary" className="bg-[#76bc21] text-white">
                        {item.type}
                      </Badge>
                    </td>
                    <td className="p-3">{item.location}</td>
                    <td className="p-3">{item.quantity} kg</td>
                    <td className="p-3">{item.status}</td>
                    <td className="p-3 relative">
                      <Button
                        size="sm"
                        variant="outline"
                        className={`p-1 ${item.status === "En attente de livraison" ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
                        onClick={() => toggleMenu(item)}
                        disabled={item.status === "En attente de livraison"}
                      >
                        <MoreVertical className="w-4 h-4" />
                      </Button>

                      {openMenuId === item.id && (
                        <div className="absolute right-0 bottom-full mb-2 w-48 bg-white border rounded shadow-lg z-10">
                          {renderActions(item)}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-muted-foreground">
              {filteredData.length} résultats
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                <ChevronLeft className="w-4 h-4" /> Prec
              </Button>
              <Button variant="outline" size="sm" disabled>
                Suiv <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modals séparés */}
      <FacturationModal isOpen={isFacturationOpen} onClose={() => setIsFacturationOpen(false)} />
      <ImpeyerModal isOpen={isImpeyerOpen} onClose={() => setIsImpeyerOpen(false)} />
      <FicheLivraisonModal isOpen={isFicheLivraisonOpen} onClose={() => setIsFicheLivraisonOpen(false)} />

      {/* Confirmation livraison */}
      <ConfirmationModal
        isOpen={isConfirmLivraisonOpen}
        onClose={() => setIsConfirmLivraisonOpen(false)}
        onConfirm={handleConfirmLivraison}
        message="Vous voulez livrer cette matière première ?"
      />
    </>
  )
}
