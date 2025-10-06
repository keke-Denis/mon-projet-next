"use client"

import { useState, useMemo } from "react"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Search, MoreVertical, Hammer, CheckCircle, Filter, Download, Package, Droplets, Leaf } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow as UITableRow } from "@/components/ui/table"
import { Header } from "@/components/header"

// Types
interface DistillationItem {
  id: number
  dateDebut: string
  provenance: string
  quantite: number
  statut: "En attente" | "En cours" | "Terminé"
  type: "Clous" | "Griffes" | "Feuille"
  alambic: string
}

interface FilterState {
  dateDebut: string
  dateFin: string
  alambic: string
  type: string
  statut: string
}

const distillationData: DistillationItem[] = [
  { id: 1, dateDebut: "24 Mars 2024", provenance: "Manakara", quantite: 10, statut: "En attente", type: "Clous", alambic: "1A" },
  { id: 2, dateDebut: "24 Mars 2024", provenance: "Vagaindrano", quantite: 60, statut: "En cours", type: "Griffes", alambic: "2A" },
  { id: 3, dateDebut: "24 Mars 2024", provenance: "Manambondro", quantite: 10, statut: "En cours", type: "Feuille", alambic: "2B" },
  { id: 4, dateDebut: "24 Mars 2024", provenance: "Pk 12", quantite: 10, statut: "En attente", type: "Feuille", alambic: "2C" },
]

// Status Badge Component
function StatusBadge({ status }: { status: DistillationItem["statut"] }) {
  const statusConfig = {
    "En attente": { class: "bg-yellow-100 text-yellow-800 border-yellow-200", label: "En attente" },
    "En cours": { class: "bg-blue-100 text-blue-800 border-blue-200", label: "En cours" },
    "Terminé": { class: "bg-green-100 text-green-800 border-green-200", label: "Terminé" }
  }

  const config = statusConfig[status]

  return (
    <Badge variant="outline" className={`${config.class} font-medium`}>
      {config.label}
    </Badge>
  )
}

// Action Menu Component
function ActionMenu({ 
  item, 
  isOpen, 
  onToggle, 
  onDistiller, 
  onStock 
}: { 
  item: DistillationItem
  isOpen: boolean
  onToggle: () => void
  onDistiller: () => void
  onStock: () => void
}) {
  return (
    <div className="relative">
      <Button size="sm" variant="outline" onClick={onToggle} className="h-8 w-8 p-0">
        <MoreVertical className="w-4 h-4" />
      </Button>
      {isOpen && (
        <div className="absolute right-0 top-full mt-1 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <button
            className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 w-full text-sm transition-colors"
            onClick={onDistiller}
          >
            <Hammer className="w-4 h-4 text-blue-600" />
            <span>Préparation</span>
          </button>
          <button
            className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 w-full text-sm transition-colors"
            onClick={onStock}
          >
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span>Achevé</span>
          </button>
        </div>
      )}
    </div>
  )
}

// Distillation Table Row Component
function DistillationTableRow({ 
  item, 
  isOpen, 
  onToggle, 
  onDistiller, 
  onStock 
}: { 
  item: DistillationItem
  isOpen: boolean
  onToggle: () => void
  onDistiller: () => void
  onStock: () => void
}) {
  return (
    <UITableRow className="hover:bg-gray-50/50 transition-colors">
      <TableCell className="font-medium">#{item.id}</TableCell>
      <TableCell>{item.dateDebut}</TableCell>
      <TableCell className="text-center">{item.quantite} kg</TableCell>
      <TableCell>
        <StatusBadge status={item.statut} />
      </TableCell>
      <TableCell>{item.provenance}</TableCell>
      <TableCell>
        <Badge variant="secondary" className="capitalize">
          {item.type.toLowerCase()}
        </Badge>
      </TableCell>
      <TableCell className="font-mono text-sm">{item.alambic}</TableCell>
      <TableCell>
        <ActionMenu
          item={item}
          isOpen={isOpen}
          onToggle={onToggle}
          onDistiller={onDistiller}
          onStock={onStock}
        />
      </TableCell>
    </UITableRow>
  )
}

// Mobile Card Component
function MobileCard({ 
  item, 
  isOpen, 
  onToggle, 
  onDistiller, 
  onStock 
}: { 
  item: DistillationItem
  isOpen: boolean
  onToggle: () => void
  onDistiller: () => void
  onStock: () => void
}) {
  return (
    <Card className="mb-4 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg flex items-center gap-2">
              Distillation #{item.id}
              <StatusBadge status={item.statut} />
            </CardTitle>
            <p className="text-sm text-gray-600 mt-1">{item.dateDebut}</p>
          </div>
          <ActionMenu
            item={item}
            isOpen={isOpen}
            onToggle={onToggle}
            onDistiller={onDistiller}
            onStock={onStock}
          />
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-1">
            <p className="font-semibold text-gray-700">Quantité</p>
            <p>{item.quantite} kg</p>
          </div>
          <div className="space-y-1">
            <p className="font-semibold text-gray-700">Provenance</p>
            <p>{item.provenance}</p>
          </div>
          <div className="space-y-1">
            <p className="font-semibold text-gray-700">Type MP</p>
            <Badge variant="secondary" className="capitalize">
              {item.type.toLowerCase()}
            </Badge>
          </div>
          <div className="space-y-1">
            <p className="font-semibold text-gray-700">Alambic</p>
            <p className="font-mono text-xs">{item.alambic}</p>
          </div>
        </div>
        
        <div className="flex gap-2 mt-4 pt-4 border-t">
          <Button 
            size="sm" 
            variant="outline" 
            onClick={onDistiller}
            className="flex-1 border-blue-200 hover:bg-blue-50 hover:text-blue-700 transition-colors"
          >
            <Hammer className="w-4 h-4 mr-2" />
            Préparer
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            onClick={onStock}
            className="flex-1 border-green-200 hover:bg-green-50 hover:text-green-700 transition-colors"
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Achevé
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// Stats Cards Component - Version améliorée
function StatsCards() {
  const stats = [
    {
      title: "Total de giroffle à transformer en une semaine",
      value: "500 kg",
      bgColor: "bg-gradient-to-br from-[#124734] to-[#0a2d20]",
      borderColor: "border-[#0d3a28]",
      icon: <Package className="w-6 h-6" />,
      valueColor: "text-white",
      description: "Matière première totale"
    },
    {
      title: "Total d'huile obtenu après la distillation dans une semaine",
      value: "300 kg",
      bgColor: "bg-gradient-to-br from-[#76bc21] to-[#5a9a1a]",
      borderColor: "border-[#68a81d]",
      icon: <Droplets className="w-6 h-6" />,
      valueColor: "text-white",
      description: "Production d'huile essentielle"
    },
    {
      title: "Quantité résiduelle de giroffle après transformation hebdomadaire",
      value: "50 kg",
      bgColor: "bg-gradient-to-br from-[#089a8d] to-[#067a70]",
      borderColor: "border-[#078a7e]",
      icon: <Leaf className="w-6 h-6" />,
      valueColor: "text-white",
      description: "Reste à traiter"
    }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
      {stats.map((stat, index) => (
        <Card 
          key={index} 
          className={`${stat.bgColor} ${stat.borderColor} border-2 text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden relative`}
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full -translate-x-8 translate-y-8"></div>
          
          <CardContent className="p-6 relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-white/20 rounded-lg">
                {stat.icon}
              </div>
              <div className="text-right">
                <div className="text-xs opacity-90 bg-white/20 px-2 py-1 rounded-full">
                  Hebdomadaire
                </div>
              </div>
            </div>
            
            <h3 className="text-sm font-medium mb-3 leading-tight min-h-[40px]">
              {stat.title}
            </h3>
            
            <div className="flex items-end justify-between">
              <div>
                <p className={`text-2xl md:text-3xl font-bold ${stat.valueColor} mb-1`}>
                  {stat.value}
                </p>
                <p className="text-xs opacity-90">
                  {stat.description}
                </p>
              </div>
              <div className="text-white/40">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-xs">📈</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

// Filters Component
function Filters({ filters, onFiltersChange }: { 
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void 
}) {
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="space-y-4 mb-6">
      {/* Mobile Filter Toggle */}
      <div className="flex justify-between items-center md:hidden">
        <h3 className="font-semibold">Filtres</h3>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2"
        >
          <Filter className="w-4 h-4" />
          Filtres
        </Button>
      </div>

      {/* Filters Grid */}
      <div className={`${showFilters ? 'block' : 'hidden'} md:block space-y-4 md:space-y-0`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-end">
          <div className="space-y-2">
            <Label htmlFor="date-debut" className="text-sm font-medium">
              Date de début
            </Label>
            <Input
              id="date-debut"
              type="date"
              value={filters.dateDebut}
              onChange={(e) => onFiltersChange({ ...filters, dateDebut: e.target.value })}
              className="border-gray-300 focus:border-[#76bc21]"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="date-fin" className="text-sm font-medium">
              Date de fin
            </Label>
            <Input
              id="date-fin"
              type="date"
              value={filters.dateFin}
              onChange={(e) => onFiltersChange({ ...filters, dateFin: e.target.value })}
              className="border-gray-300 focus:border-[#76bc21]"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="alambic" className="text-sm font-medium">
              ID Alambic
            </Label>
            <Select 
              value={filters.alambic} 
              onValueChange={(value) => onFiltersChange({ ...filters, alambic: value })}
            >
              <SelectTrigger id="alambic" className="border-gray-300 focus:border-[#76bc21]">
                <SelectValue placeholder="Tous" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="1A">1A</SelectItem>
                <SelectItem value="2A">2A</SelectItem>
                <SelectItem value="2B">2B</SelectItem>
                <SelectItem value="2C">2C</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="type" className="text-sm font-medium">
              Type MP
            </Label>
            <Select 
              value={filters.type} 
              onValueChange={(value) => onFiltersChange({ ...filters, type: value })}
            >
              <SelectTrigger id="type" className="border-gray-300 focus:border-[#76bc21]">
                <SelectValue placeholder="Tous" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="clous">Clous</SelectItem>
                <SelectItem value="griffes">Griffes</SelectItem>
                <SelectItem value="feuille">Feuille</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="statut" className="text-sm font-medium">
              Statut
            </Label>
            <Select 
              value={filters.statut} 
              onValueChange={(value) => onFiltersChange({ ...filters, statut: value })}
            >
              <SelectTrigger id="statut" className="border-gray-300 focus:border-[#76bc21]">
                <SelectValue placeholder="Tous" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="En attente">En attente</SelectItem>
                <SelectItem value="En cours">En cours</SelectItem>
                <SelectItem value="Terminé">Terminé</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex gap-2">
            <Button className="bg-[#76bc21] hover:bg-[#5aa017] flex-1 cursor-pointer transition-colors shadow-sm hover:shadow" size="sm">
              <Search className="w-4 h-4 mr-2" />
              Chercher
            </Button>
            <Button variant="outline" size="sm" className="border-gray-300 hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DistillationPage() {
  const [openMenuId, setOpenMenuId] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalItem, setModalItem] = useState<DistillationItem & { isStock?: boolean } | null>(null)
  const [filters, setFilters] = useState<FilterState>({
    dateDebut: "",
    dateFin: "",
    alambic: "all",
    type: "all",
    statut: "all"
  })
  const [isConfirmed, setIsConfirmed] = useState(false) // Nouvel état pour la confirmation

  // Filter data
  const filteredData = useMemo(() => {
    return distillationData.filter(item => {
      if (filters.alambic !== "all" && !item.alambic.includes(filters.alambic)) return false
      if (filters.type !== "all" && item.type.toLowerCase() !== filters.type) return false
      if (filters.statut !== "all" && item.statut !== filters.statut) return false
      return true
    })
  }, [filters])

  const handleToggleMenu = (id: number) => {
    setOpenMenuId(openMenuId === id ? null : id)
  }

  const handleDistiller = (item: DistillationItem) => {
    setModalItem({ ...item, isStock: false })
    setIsModalOpen(true)
    setOpenMenuId(null)
    setIsConfirmed(false) // Réinitialiser la confirmation quand le modal s'ouvre
  }

  const handleStock = (item: DistillationItem) => {
    setModalItem({ ...item, isStock: true })
    setIsModalOpen(true)
    setOpenMenuId(null)
    setIsConfirmed(false) // Réinitialiser la confirmation quand le modal s'ouvre
  }

  const handleConfirmationChange = (checked: boolean) => {
    setIsConfirmed(checked)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (modalItem?.isStock && !isConfirmed) {
      return // Empêche la soumission si non confirmé
    }
    // Logique de soumission du formulaire ici
    console.log("Formulaire soumis")
    setIsModalOpen(false)
    setIsConfirmed(false) // Réinitialiser après soumission
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="md:flex">
        <Sidebar currentPage="distillation" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header title="Gestion de la distillation" />

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          {/* Stats */}
          <StatsCards />

          {/* Filters */}
          <Filters filters={filters} onFiltersChange={setFilters} />

          {/* Results Count */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-600">
              {filteredData.length} résultat{filteredData.length > 1 ? 's' : ''} 
              <span className="hidden sm:inline"> (Total: {distillationData.length})</span>
            </p>
            <div className="flex items-center gap-2">
              <Select defaultValue="5">
                <SelectTrigger className="w-20 border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-sm text-gray-600 hidden sm:block">par page</span>
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block">
            <Card className="shadow-sm border-gray-200">
              <Table>
                <TableHeader>
                  <UITableRow className="bg-gradient-to-r from-[#76bc21] to-[#5a9a1a] hover:from-[#76bc21] hover:to-[#5a9a1a]">
                    <TableHead className="text-white font-semibold">ID</TableHead>
                    <TableHead className="text-white font-semibold">Date début</TableHead>
                    <TableHead className="text-white font-semibold text-center">Quantité (kg)</TableHead>
                    <TableHead className="text-white font-semibold">Statut</TableHead>
                    <TableHead className="text-white font-semibold">Provenance</TableHead>
                    <TableHead className="text-white font-semibold">Type MP</TableHead>
                    <TableHead className="text-white font-semibold">Alambic</TableHead>
                    <TableHead className="text-white font-semibold">Actions</TableHead>
                  </UITableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.map((item) => (
                    <DistillationTableRow
                      key={item.id}
                      item={item}
                      isOpen={openMenuId === item.id}
                      onToggle={() => handleToggleMenu(item.id)}
                      onDistiller={() => handleDistiller(item)}
                      onStock={() => handleStock(item)}
                    />
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {filteredData.map((item) => (
              <MobileCard
                key={item.id}
                item={item}
                isOpen={openMenuId === item.id}
                onToggle={() => handleToggleMenu(item.id)}
                onDistiller={() => handleDistiller(item)}
                onStock={() => handleStock(item)}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
            <p className="text-sm text-gray-600 text-center sm:text-left">
              Page 1 sur 3
            </p>
            <div className="flex items-center justify-center gap-2">
              <Button variant="outline" size="sm" disabled className="border-gray-300">
                Précédent
              </Button>
              <Button variant="outline" size="sm" className="border-gray-300 hover:bg-gray-50">
                Suivant
              </Button>
            </div>
          </div>
        </main>
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-[#76bc21]">
              {modalItem?.isStock ? "Validation achevée" : "Préparation de la distillation"}
            </DialogTitle>
            <DialogDescription>
              {modalItem?.isStock 
                ? "Finalisez le processus de distillation et validez les résultats."
                : "Préparez les paramètres pour le début de la distillation."
              }
            </DialogDescription>
          </DialogHeader>

          {modalItem?.isStock ? (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="poids-mp">Poids MP (kg)</Label>
                  <Input id="poids-mp" type="number" placeholder="5" className="border-gray-300" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantite-restante">Quantité restante (kg)</Label>
                  <Input id="quantite-restante" type="number" placeholder="10" className="border-gray-300" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date-fin">Date de fin de distillation</Label>
                <Input id="date-fin" type="datetime-local" className="border-gray-300" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="resultat">Résultat</Label>
                <Input id="resultat" type="text" placeholder="Ex: Huile extraite" className="border-gray-300" />
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  En appuyant sur ce bouton, vous confirmez la finalisation de la distillation et donc la conformité 
                  des informations mentionnées ci-dessus concernant le résultat de la production portant le numéro 
                  de distillation #{modalItem?.id}.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="confirmation" 
                  className="rounded border-gray-300" 
                  checked={isConfirmed}
                  onChange={(e) => handleConfirmationChange(e.target.checked)}
                />
                <Label htmlFor="confirmation" className="text-sm">
                  Oui, je confirme
                </Label>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[#76bc21] hover:bg-[#5a9a1a] transition-colors"
                disabled={!isConfirmed} // Désactivé si non confirmé
              >
                Valider l'insertion
              </Button>
            </form>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="poids-mp-prepa">Poids MP (kg)</Label>
                <Input id="poids-mp-prepa" type="number" placeholder="5" className="border-gray-300" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="main-oeuvre">Main d'œuvre</Label>
                  <Input id="main-oeuvre" type="number" placeholder="3" className="border-gray-300" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="temps-distillation">Temps de distillation (h)</Label>
                  <Input id="temps-distillation" type="time" className="border-gray-300" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="bois-chauffage">Bois de chauffage (m³)</Label>
                  <Input id="bois-chauffage" type="number" placeholder="17" className="border-gray-300" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="carburant">Carburant (Litre)</Label>
                  <Input id="carburant" type="number" placeholder="2.5" step="0.1" className="border-gray-300" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="alambic-select">ID Alambic</Label>
                  <Select>
                    <SelectTrigger id="alambic-select" className="border-gray-300">
                      <SelectValue placeholder="Choisir un alambic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="N1">Alambic site1 N1</SelectItem>
                      <SelectItem value="N2">Alambic site2 N2</SelectItem>
                      <SelectItem value="N3">Alambic site2 N3</SelectItem>
                      <SelectItem value="N4">Alambic site2 N4</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date-debut-modal">Date de début</Label>
                  <Input id="date-debut-modal" type="datetime-local" className="border-gray-300" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="usine">Usine de distillation</Label>
                <Select>
                  <SelectTrigger id="usine" className="border-gray-300">
                    <SelectValue placeholder="Sélectionner" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pk12">PK 12</SelectItem>
                    <SelectItem value="mokomby">Mokomby</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full bg-[#76bc21] hover:bg-[#5a9a1a] transition-colors cursor-pointer">
                Valider la préparation
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}