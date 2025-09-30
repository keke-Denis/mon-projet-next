"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

interface TestHuilleProps {
  isOpen: boolean
  onClose: () => void
}

export function TestHuille({ isOpen, onClose }: TestHuilleProps) {
  const [date, setDate] = useState("")
  const [nomFournisseur, setNomFournisseur] = useState("")
  const [typeMP, setTypeMP] = useState("")
  const [poidsBrut, setPoidsBrut] = useState("")
  const [tauxHumidite, setTauxHumidite] = useState("")

  const handleSubmit = () => {
    console.log("Date:", date)
    console.log("Nom fournisseur:", nomFournisseur)
    console.log("Type MP:", typeMP)
    console.log("Poids brut:", poidsBrut)
    console.log("Taux d'humidité:", tauxHumidite)
    // Ici tu peux envoyer les données à ton API
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-[#76bc21]">Test Huile</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#76bc21]">Date</label>
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border-[#76bc21]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#76bc21]">Nom du fournisseur</label>
            <Input
              type="text"
              value={nomFournisseur}
              onChange={(e) => setNomFournisseur(e.target.value)}
              placeholder="Entrez le nom du fournisseur"
              className="border-[#76bc21]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#76bc21]">Type de MP</label>
            <Select value={typeMP} onValueChange={setTypeMP}>
              <SelectTrigger className="border-[#76bc21]">
                <SelectValue placeholder="Sélectionnez un type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="griffe">Griffe</SelectItem>
                <SelectItem value="feuille">Feuille</SelectItem>
                <SelectItem value="clous">Clous</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#76bc21]">Poids brut (kg)</label>
            <Input
              type="number"
              value={poidsBrut}
              onChange={(e) => setPoidsBrut(e.target.value)}
              placeholder="Entrez le poids brut"
              className="border-[#76bc21]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#76bc21]">Taux d’humidité (%)</label>
            <Input
              type="number"
              value={tauxHumidite}
              onChange={(e) => setTauxHumidite(e.target.value)}
              placeholder="Entrez le taux d’humidité"
              className="border-[#76bc21]"
            />
          </div>
        </div>

        <DialogFooter className="flex justify-end space-x-2">
          <Button variant="outline" onClick={onClose}>Annuler</Button>
          <Button className="bg-[#76bc21] hover:bg-[#5aa017]" onClick={handleSubmit}>Valider</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
