"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { useState } from "react"

interface InsertionModalTestProps {
  isOpen: boolean
  onClose: () => void
}

export function InsertionModalTest({ isOpen, onClose }: InsertionModalTestProps) {
  const [currentStep, setCurrentStep] = useState(1)

  // Type de matière
  const [typeMP, setTypeMP] = useState("HE clous")

  // Champs généraux
  const [dateHeure, setDateHeure] = useState("")
  const [location, setLocation] = useState("")
  const [designation, setDesignation] = useState("")
  const [provenance, setProvenance] = useState("")
  const [autreProvenance, setAutreProvenance] = useState("")
  const [fournisseurNom, setFournisseurNom] = useState("")
  const [fournisseurPrenom, setFournisseurPrenom] = useState("")
  const [fournisseurID, setFournisseurID] = useState("")
  const [contact, setContact] = useState("")

  // Champs produit / spécification
  const [poidsBrut, setPoidsBrut] = useState("")
  const [poidsPackaging, setPoidsPackaging] = useState("")
  const [poidsNet, setPoidsNet] = useState("")
  const [poidsAgree, setPoidsAgree] = useState("")
  const [unites, setUnites] = useState("")
  const [prixUnitaire, setPrixUnitaire] = useState("")
  const [tauxDessication, setTauxDessication] = useState("")
  const [tauxHumidite, setTauxHumidite] = useState("")
  const [densite, setDensite] = useState("")

  const handleNext = () => setCurrentStep(2)
  const handleBack = () => setCurrentStep(1)

  const handleSubmit = () => {
    const data = {
      typeMP, dateHeure, location, designation, provenance, autreProvenance,
      fournisseurNom, fournisseurPrenom, fournisseurID, contact,
      poidsBrut, poidsPackaging, poidsNet, poidsAgree, unites, prixUnitaire,
      tauxDessication, tauxHumidite, densite
    }
    console.log("Nouvelle insertion:", data)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-[#76bc21]">Ajouter H.E</DialogTitle>
        </DialogHeader>

        {currentStep === 1 && (
          <div className="grid gap-4 py-4">
            {/* Type de matière */}
            <div className="space-y-2">
              <Label>Type de H.E de matière première</Label>
              <Select value={typeMP} onValueChange={setTypeMP}>
                <SelectTrigger>
                  <SelectValue placeholder="Choisir le type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="HE clous">H.E Clous (FG)</SelectItem>
                  <SelectItem value="HE griffes">H.E Griffes (GG)</SelectItem>
                  <SelectItem value="HE feuilles">H.E Feuilles (CG)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Input type="datetime-local" placeholder="JJ/MM/AAAA - HH:MM:SS" value={dateHeure} onChange={e => setDateHeure(e.target.value)} />
            <Input placeholder="Désignation" value={designation} onChange={e => setDesignation(e.target.value)} />

            {/* Provenance */}
            {provenance === "autres" ? (
              <Input
                placeholder="Entrer une nouvelle provenance"
                value={autreProvenance}
                onChange={e => setAutreProvenance(e.target.value)}
                onBlur={() => { if (!autreProvenance.trim()) setProvenance("") }}
              />
            ) : (
              <Select value={provenance} onValueChange={setProvenance}>
                <SelectTrigger>
                  <SelectValue placeholder="Vohipeno" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="manakara">Manakara</SelectItem>
                  <SelectItem value="manambondro">Manambondro</SelectItem>
                  <SelectItem value="vohipeno">Vohipeno</SelectItem>
                  <SelectItem value="matangy">Matangy</SelectItem>
                  <SelectItem value="ampasimandreva">Ampasimandreva</SelectItem>
                  <SelectItem value="autres">Autres</SelectItem>
                </SelectContent>
              </Select>
            )}

            {/* Fournisseur */}
            <Input placeholder="Nom fournisseur" value={fournisseurNom} onChange={e => setFournisseurNom(e.target.value)} />
            <Input placeholder="Prénom fournisseur" value={fournisseurPrenom} onChange={e => setFournisseurPrenom(e.target.value)} />
            <Input placeholder="ID fiscale" value={fournisseurID} onChange={e => setFournisseurID(e.target.value)} />
            <Input placeholder="Contact" value={contact} onChange={e => setContact(e.target.value)} />

            <Button onClick={handleNext} className="bg-[#76bc21] hover:bg-[#5cae1b]">Suivant →</Button>
          </div>
        )}

        {currentStep === 2 && (
          <div className="grid gap-4 py-4">
            <Input type="number" placeholder="Poids brut (kg)" value={poidsBrut} onChange={e => setPoidsBrut(e.target.value)} />
            <Input type="number" placeholder="Poids packaging (kg)" value={poidsPackaging} onChange={e => setPoidsPackaging(e.target.value)} />
            <Input type="number" placeholder="Poids net (kg)" value={poidsNet} onChange={e => setPoidsNet(e.target.value)} />
            <Input type="number" placeholder="Poids agréé (kg)" value={poidsAgree} onChange={e => setPoidsAgree(e.target.value)} />
            <Input type="number" placeholder="Unités (kg)" value={unites} onChange={e => setUnites(e.target.value)} />
            <Input type="number" placeholder="Prix unitaire" value={prixUnitaire} onChange={e => setPrixUnitaire(e.target.value)} />
            <Input type="number" placeholder="Taux dessication (%)" value={tauxDessication} onChange={e => setTauxDessication(e.target.value)} />
            <Input type="number" placeholder="Taux humidité (%)" value={tauxHumidite} onChange={e => setTauxHumidite(e.target.value)} />
            <Input type="number" placeholder="Densité" value={densite} onChange={e => setDensite(e.target.value)} />

            <div className="flex gap-4">
              <Button variant="outline" onClick={handleBack}>← Retour</Button>
              <Button onClick={handleSubmit} className="bg-[#76bc21] hover:bg-[#5cae1b]">Ajouter</Button>
            </div>
          </div>
        )}

        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
