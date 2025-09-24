"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { ChevronDown, Search, Plus, Edit, Trash2 } from "lucide-react"

const eugenolData = [
  {
    id: 1,
    dateDebut: "24 Mars 2024",
    dateFin: "28 Avril 2024",
    quantiteHuile: 10,
    statut: "Terminé",
    eugenolObtenu: 10,
    purete: 65,
  },
  {
    id: 2,
    dateDebut: "24 Mars 2024",
    dateFin: "24 Avril 2024",
    quantiteHuile: 10,
    statut: "En cours",
    eugenolObtenu: 10,
    purete: 65,
  },
  {
    id: 3,
    dateDebut: "24 Mars 2024",
    dateFin: "28 Avril 2024",
    quantiteHuile: 10,
    statut: "En cours",
    eugenolObtenu: 10,
    purete: 65,
  },
  {
    id: 4,
    dateDebut: "24 Mars 2024",
    dateFin: "28 Avril 2024",
    quantiteHuile: 10,
    statut: "En attente",
    eugenolObtenu: 10,
    purete: 25,
  },
]

export default function EugenolPage() {
  const [isCreationModalOpen, setIsCreationModalOpen] = useState(false)
  const [isModificationModalOpen, setIsModificationModalOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar currentPage="eugenol" />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-card border-b border-border p-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">Gestion de l'Eugénol</h1>
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
                Total de huille en une semaine avant la transformation en Eugénol
              </h3>
              <p className="text-2xl font-bold text-blue-900">500 Tonne</p>
            </div>
            <div className="bg-pink-100 border border-pink-200 rounded-lg p-6">
              <h3 className="text-sm font-medium text-pink-800 mb-2">
                Total d'Eugénol obtenu après la transformation en Eugénol dans une semaines
              </h3>
              <p className="text-2xl font-bold text-pink-900">200 Litre</p>
            </div>
            <div className="bg-purple-100 border border-purple-200 rounded-lg p-6">
              <h3 className="text-sm font-medium text-purple-800 mb-2">
                Le reste d'huille après la transformation en Eugénol en une semaine
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
                  <DialogTitle>Création d'eugénol</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="quantiteHuile">Quantité d'huile à utiliser</Label>
                    <Input id="quantiteHuile" type="number" placeholder="10" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="dateDebutEugenol">Date de début</Label>
                      <Input id="dateDebutEugenol" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="dateFinEugenol">Date de fin</Label>
                      <Input id="dateFinEugenol" type="date" />
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
                  <th className="px-4 py-3 text-left">Quantité d'huille utilisé</th>
                  <th className="px-4 py-3 text-left">Statut</th>
                  <th className="px-4 py-3 text-left">Eugénol obtenu</th>
                  <th className="px-4 py-3 text-left">Pureté(%)</th>
                  <th className="px-4 py-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {eugenolData.map((item, index) => (
                  <tr key={item.id} className={index % 2 === 0 ? "bg-red-100" : "bg-red-200"}>
                    <td className="px-4 py-3">{item.id}</td>
                    <td className="px-4 py-3">{item.dateDebut}</td>
                    <td className="px-4 py-3">{item.dateFin}</td>
                    <td className="px-4 py-3">{item.quantiteHuile}</td>
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
                    <td className="px-4 py-3">{item.eugenolObtenu}</td>
                    <td className="px-4 py-3">{item.purete}%</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-2">
                        <Dialog open={isModificationModalOpen} onOpenChange={setIsModificationModalOpen}>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-md">
                            <DialogHeader>
                              <DialogTitle>Modification de la transformation</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <Label htmlFor="quantiteHuileModif">Quantité d'huile à utiliser</Label>
                                <Input id="quantiteHuileModif" type="number" placeholder="10" />
                              </div>
                              <div>
                                <Label htmlFor="pureteModif">Pureté (en %)</Label>
                                <Input id="pureteModif" type="number" placeholder="65" />
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <Label htmlFor="dateDebutModif">Date de début</Label>
                                  <Input id="dateDebutModif" type="date" />
                                </div>
                                <div>
                                  <Label htmlFor="dateFinModif">Date de fin</Label>
                                  <Input id="dateFinModif" type="date" />
                                </div>
                              </div>
                              <Button className="w-full">Valider la modification</Button>
                            </div>
                          </DialogContent>
                        </Dialog>
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
