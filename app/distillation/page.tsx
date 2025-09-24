"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { ChevronDown, Search, Plus, Edit, Trash2 } from "lucide-react"

const distillationData = [
  {
    id: 1,
    dateDebut: "24 Mars 2024",
    dateFin: "28 Avril 2024",
    quantite: 10,
    statut: "Terminé",
    type: "Clous",
    huilleObtenu: 10,
  },
  {
    id: 2,
    dateDebut: "24 Mars 2024",
    dateFin: "28 Avril 2024",
    quantite: 60,
    statut: "En cours",
    type: "Griffes",
    huilleObtenu: 10,
  },
  {
    id: 3,
    dateDebut: "24 Mars 2024",
    dateFin: "28 Avril 2024",
    quantite: 10,
    statut: "En cours",
    type: "Feuille",
    huilleObtenu: 10,
  },
  {
    id: 4,
    dateDebut: "24 Mars 2024",
    dateFin: "28 Avril 2024",
    quantite: 10,
    statut: "En attente",
    type: "Feuille",
    huilleObtenu: 10,
  },
]

export default function DistillationPage() {
  const [isCreationModalOpen, setIsCreationModalOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar currentPage="distillation" />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-card border-b border-border p-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">Gestion de la distillation</h1>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Jhon Doe</span>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-medium">JD</span>
              </div>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-blue-100 border border-blue-200 rounded-lg p-6">
              <h3 className="text-sm font-medium text-blue-800 mb-2">
                Total de tonnes de giroffle à transformer en une semaine
              </h3>
              <p className="text-2xl font-bold text-blue-900">500 Tonne</p>
            </div>
            <div className="bg-pink-100 border border-pink-200 rounded-lg p-6">
              <h3 className="text-sm font-medium text-pink-800 mb-2">
                Total d'huile obtenu après la distillation dans une semaines
              </h3>
              <p className="text-2xl font-bold text-pink-900">300 Litre</p>
            </div>
            <div className="bg-purple-100 border border-purple-200 rounded-lg p-6">
              <h3 className="text-sm font-medium text-purple-800 mb-2">
                Quantité résiduelle de giroffle après transformation hebdomadaire
              </h3>
              <p className="text-2xl font-bold text-purple-900">50 Tonne</p>
            </div>
          </div>

          {/* Filters and Actions */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Label htmlFor="dateDebut">Date de début</Label>
                <Input id="dateDebut" type="date" className="w-40" />
              </div>
              <div className="flex items-center space-x-2">
                <Label htmlFor="dateFin">Date de fin</Label>
                <Input id="dateFin" type="date" className="w-40" />
              </div>
              <div className="flex items-center space-x-2">
                <Label htmlFor="parPage">Par page</Label>
                <Select defaultValue="5">
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
            <Dialog open={isCreationModalOpen} onOpenChange={setIsCreationModalOpen}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90">
                  <Plus className="w-4 h-4 mr-2" />
                  Ajouter
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Création de distillation</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="matiere">Matière première à utiliser</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Feuille de giroffle" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="feuille">Feuille de giroffle</SelectItem>
                        <SelectItem value="griffe">Griffe de giroffle</SelectItem>
                        <SelectItem value="clous">Clous de giroffle</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="quantiteDistillation">Quantité en Tonne</Label>
                    <Input id="quantiteDistillation" type="number" placeholder="10" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="dateDebutDistillation">Date de début</Label>
                      <Input id="dateDebutDistillation" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="dateFinDistillation">Date de fin</Label>
                      <Input id="dateFinDistillation" type="date" />
                    </div>
                  </div>
                  <Button className="w-full">Valider l'insertion</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Table */}
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <table className="w-full">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-4 py-3 text-left">ID</th>
                  <th className="px-4 py-3 text-left">Date début</th>
                  <th className="px-4 py-3 text-left">Date fin</th>
                  <th className="px-4 py-3 text-left">Quantité en tonne</th>
                  <th className="px-4 py-3 text-left">Statut</th>
                  <th className="px-4 py-3 text-left">Type</th>
                  <th className="px-4 py-3 text-left">Huille obtenu</th>
                  <th className="px-4 py-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {distillationData.map((item, index) => (
                  <tr key={item.id} className={index % 2 === 0 ? "bg-red-100" : "bg-red-200"}>
                    <td className="px-4 py-3">{item.id}</td>
                    <td className="px-4 py-3">{item.dateDebut}</td>
                    <td className="px-4 py-3">{item.dateFin}</td>
                    <td className="px-4 py-3">{item.quantite}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          item.statut === "Terminé"
                            ? "bg-green-100 text-green-800"
                            : item.statut === "En cours"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {item.statut}
                      </span>
                    </td>
                    <td className="px-4 py-3">{item.type}</td>
                    <td className="px-4 py-3">{item.huilleObtenu}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm text-muted-foreground">5 résultats (Total: 15 Page 1 sur 3)</span>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                Préc.
              </Button>
              <Button variant="outline" size="sm">
                Suiv.
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
