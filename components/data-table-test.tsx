"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MoreVertical, ChevronLeft, ChevronRight, Plus, FileText, Truck, CheckCircle, FlaskConical, Receipt } from "lucide-react"

// Import de tes modals
import { FacturationModal } from "./FacturationModal"
import { FicheLivraisonModal } from "./FicheLivraison-test"
import { ConfirmationModal } from "./ConfirmationModal"
import { InsertionModalTest } from "./insertion-modal-test"
import { LivraisonTest } from "./Livraison-test"
import { TestHuille } from "./TestHuille" // ← modal Test Huile

const mockData = [
  { id: 1, date: "24 Mars 2024", type: "Feuilles", quantity: 10, location: "Manakara", status: "En attente de livraison" },
  { id: 2, date: "24 Mars 2024", type: "Griffes", quantity: 10, location: "Menambondro", status: "Accepté" },
  { id: 3, date: "24 Mars 2024", type: "Griffes", quantity: 10, location: "Manakara", status: "Test en attente" },
  { id: 4, date: "24 Mars 2024", type: "Clous", quantity: 10, location: "Menambondro", status: "En cours de test" },
  { id: 5, date: "24 Mars 2024", type: "Clous", quantity: 10, location: "Manakara", status: "Livraison en cours" },
]

export function DataTable() {
  const [isLivraisonTestOpen, setIsLivraisonTestOpen] = useState(false)
  const [isTestHuilleOpen, setIsTestHuilleOpen] = useState(false) // State pour modal Test Huile
  const [searchTerm, setSearchTerm] = useState("")
  const [openMenuId, setOpenMenuId] = useState<number | null>(null)

  // States des modals
  const [isFacturationOpen, setIsFacturationOpen] = useState(false)
  const [isFicheLivraisonOpen, setIsFicheLivraisonOpen] = useState(false)
  const [isConfirmLivraisonOpen, setIsConfirmLivraisonOpen] = useState(false)
  const [isInsertionOpen, setIsInsertionOpen] = useState(false)

  const filteredData = mockData.filter((item) =>
    item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleMenu = (id: number) => {
    const item = mockData.find(item => item.id === id)
    if (item && item.status === "Livraison en cours") return // Désactiver menu
    setOpenMenuId(openMenuId === id ? null : id)
  }

  const renderActions = (item: typeof mockData[0]) => {
    switch (item.status) {
      case "Accepté":
        return (
          <div className="p-2">
            <Button
              size="sm"
              variant="ghost"
              className="w-full flex items-center gap-2"
              onClick={() => setIsFacturationOpen(true)}
            >
              <Receipt className="w-4 h-4" /> Facturer
            </Button>
          </div>
        )

      case "Test en attente":
        return (
          <div className="p-2">
            <Button
              size="sm"
              variant="ghost"
              className="w-full flex items-center gap-2"
              onClick={() => setIsTestHuilleOpen(true)} // Ouvre le modal Test Huile
            >
              <FlaskConical className="w-4 h-4" /> Test Huile
            </Button>
          </div>
        )

      case "En cours de test":
        return (
          <div className="p-2">
            <Button
              size="sm"
              variant="ghost"
              className="w-full flex items-center gap-2"
              onClick={() => setIsConfirmLivraisonOpen(true)}
            >
              <CheckCircle className="w-4 h-4" /> Validation Test
            </Button>
          </div>
        )

      case "En attente de livraison":
        return (
          <div className="p-2 space-y-1 text-left">
            <Button
              size="sm"
              variant="ghost"
              className="w-full flex gap-2"
              onClick={() => setIsFicheLivraisonOpen(true)}
            >
              <FileText className="w-4 h-4" /> Fiche Livraison
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="w-full flex gap-2"
              onClick={() => setIsLivraisonTestOpen(true)}
            >
              <Truck className="w-4 h-4" /> Livraison
            </Button>
          </div>
        )

      default:
        return <div className="p-2 text-sm text-gray-500">Aucune action disponible</div>
    }
  }

  const handleConfirmLivraison = () => {
    console.log("Livraison confirmée !")
    setIsConfirmLivraisonOpen(false)
  }

  return (
    <>
      <Card>
        <CardHeader className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Button
              size="sm"
              className="bg-[#76bc21] text-white hover:bg-[#5aa017] cursor-pointer"
              onClick={() => setIsInsertionOpen(true)}
            >
              <Plus className="w-4 h-4 mr-2" />
              Ajouter
            </Button>
            <Button variant="outline" size="sm" className="cursor-pointer">
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
                  <th className="p-3 font-medium">Type MP</th>
                  <th className="p-3 font-medium">Poids tester</th>
                  <th className="p-3 font-medium">Status</th>
                  <th className="p-3 font-medium">Teneur en eau</th>
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
                    <td className="p-3">{item.status}</td>
                    <td className="p-3">{item.quantity} kg</td>
                    <td className="p-3 relative">
                      <Button
                        size="sm"
                        variant="outline"
                        className={`p-1 ${item.status === "Livraison en cours" ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
                        onClick={() => toggleMenu(item.id)}
                        disabled={item.status === "Livraison en cours"}
                      >
                        <MoreVertical className="w-4 h-4" />
                      </Button>

                      {openMenuId === item.id && (
                        <div className="absolute right-0 top-full mt-2 w-52 bg-white border rounded shadow-lg z-10">
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
                <ChevronLeft className="w-4 h-4" /> Préc
              </Button>
              <Button variant="outline" size="sm" disabled>
                Suiv <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modals */}
      <LivraisonTest
        isOpen={isLivraisonTestOpen}
        onClose={() => setIsLivraisonTestOpen(false)}
      />
      <InsertionModalTest
        isOpen={isInsertionOpen}
        onClose={() => setIsInsertionOpen(false)}
      />
      <FacturationModal
        isOpen={isFacturationOpen}
        onClose={() => setIsFacturationOpen(false)}
      />
      <FicheLivraisonModal
        isOpen={isFicheLivraisonOpen}
        onClose={() => setIsFicheLivraisonOpen(false)}
      />
      <ConfirmationModal
        isOpen={isConfirmLivraisonOpen}
        onClose={() => setIsConfirmLivraisonOpen(false)}
        onConfirm={handleConfirmLivraison}
        message="Voulez-vous valider ce test ?"
      />

      {/* Modal Test Huile */}
      <TestHuille
        isOpen={isTestHuilleOpen}
        onClose={() => setIsTestHuilleOpen(false)}
      />
    </>
  )
}
