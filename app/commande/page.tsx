"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { ChevronDown, Search, Plus, Edit, Trash2, Download } from "lucide-react"

const commandeData = [
  {
    id: 1,
    dateLivraison: "24 Mars 2024",
    dateReception: "24 Avril 2024",
    quantiteCommandee: "10 tonnes",
    type: "Local",
    valeurTotal: 10,
  },
  {
    id: 2,
    dateLivraison: "24 Mars 2024",
    dateReception: "24 Avril 2024",
    quantiteCommandee: "10 Litres",
    type: "Extérieur",
    valeurTotal: 10,
  },
  {
    id: 3,
    dateLivraison: "24 Mars 2024",
    dateReception: "24 Avril 2024",
    quantiteCommandee: "10 Kg",
    type: "Local",
    valeurTotal: 10,
  },
  {
    id: 4,
    dateLivraison: "24 Mars 2024",
    dateReception: "24 Avril 2024",
    quantiteCommandee: "10 tonnes",
    type: "Extérieur",
    valeurTotal: 10,
  },
]

export default function CommandePage() {
  const [isCreationModalOpen, setIsCreationModalOpen] = useState(false)
  const [isExportModalOpen, setIsExportModalOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar currentPage="commande" />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-card border-b border-border p-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">Gestion de la commande</h1>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Jhon Doe</span>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-medium">JD</span>
              </div>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="p-6">
          <div className="flex items-center space-x-8 mb-6">
            <div>
              <span className="text-sm text-muted-foreground">Commande en cours:</span>
              <span className="ml-2 text-lg font-bold text-foreground">500</span>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Commande en livrée:</span>
              <span className="ml-2 text-lg font-bold text-foreground">500</span>
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
                <Label htmlFor="statut">Statut à afficher</Label>
                <Select defaultValue="non-livre">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="non-livre">Non livré</SelectItem>
                    <SelectItem value="livre">Livré</SelectItem>
                    <SelectItem value="tous">Tous</SelectItem>
                  </SelectContent>
                </Select>
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
            <div className="flex items-center space-x-2">
              <Dialog open={isCreationModalOpen} onOpenChange={setIsCreationModalOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-primary hover:bg-primary/90">
                    <Plus className="w-4 h-4 mr-2" />
                    Créer une commande
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Création de commande</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="entreprise">Entreprise/Client</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="HBT (Tamatave)" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hbt">HBT (Tamatave)</SelectItem>
                          <SelectItem value="other">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="localisation">Localisation (Autre)</Label>
                      <Input id="localisation" placeholder="Localisation" />
                    </div>
                    <div>
                      <Label htmlFor="contact">Contact (Autre)</Label>
                      <Input id="contact" placeholder="Contact" />
                    </div>
                    <div>
                      <Label htmlFor="dateLivraison">Date de livraison</Label>
                      <Input id="dateLivraison" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="elementCollecte">Élément collecté</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Feuille de giroffle" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="feuille">Feuille de giroffle</SelectItem>
                          <SelectItem value="griffe">Griffe de giroffle</SelectItem>
                          <SelectItem value="clous">Clous de giroffle</SelectItem>
                          <SelectItem value="huile">Huile essentiel</SelectItem>
                          <SelectItem value="eugenol">Eugénol</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="quantiteCommande">Quantité (tonne ou litre)</Label>
                      <Input id="quantiteCommande" type="number" placeholder="70" />
                    </div>
                    <Button className="w-full">
                      <Plus className="w-4 h-4 mr-2" />
                      Ajouter un item
                    </Button>
                    <Button className="w-full">Valider l'insertion</Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Button variant="outline">Arrivés</Button>
            </div>
          </div>

          {/* Table */}
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <table className="w-full">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-4 py-3 text-left">ID</th>
                  <th className="px-4 py-3 text-left">Date de livraison</th>
                  <th className="px-4 py-3 text-left">Date de réception</th>
                  <th className="px-4 py-3 text-left">Quantité commandée</th>
                  <th className="px-4 py-3 text-left">Type</th>
                  <th className="px-4 py-3 text-left">Valeur Total</th>
                  <th className="px-4 py-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {commandeData.map((item, index) => (
                  <tr key={item.id} className={index % 2 === 0 ? "bg-red-100" : "bg-red-200"}>
                    <td className="px-4 py-3">{item.id}</td>
                    <td className="px-4 py-3">{item.dateLivraison}</td>
                    <td className="px-4 py-3">{item.dateReception}</td>
                    <td className="px-4 py-3">{item.quantiteCommandee}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          item.type === "Local" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                        }`}
                      >
                        {item.type}
                      </span>
                    </td>
                    <td className="px-4 py-3">{item.valeurTotal}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
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

        {/* Export Modal */}
        <Dialog open={isExportModalOpen} onOpenChange={setIsExportModalOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Exportation de données</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="dateDebutExport">Date de début</Label>
                <Input id="dateDebutExport" type="date" />
              </div>
              <div>
                <Label htmlFor="dateFinExport">Date de fin</Label>
                <Input id="dateFinExport" type="date" />
              </div>
              <div>
                <Label htmlFor="formatDocument">Format du document à exporter</Label>
                <Select defaultValue="tous-formats">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tous-formats">Tous les formats</SelectItem>
                    <SelectItem value="excel">Excel</SelectItem>
                    <SelectItem value="pdf">PDF</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="statutInclure">Statut à inclure</Label>
                <Select defaultValue="non-livre">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="non-livre">Non livré</SelectItem>
                    <SelectItem value="livre">Livré (archive)</SelectItem>
                    <SelectItem value="tous">Tous</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full">Valider l'insertion</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
