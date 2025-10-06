"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface InsertionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function InsertionModal({ isOpen, onClose }: InsertionModalProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [typeMatiere, setTypeMatiere] = useState("")

  // Champs qui changent selon type de matière
  const [dateHeure, setDateHeure] = useState("")
  const [localisation, setLocalisation] = useState("")
  const [designation, setDesignation] = useState("")
  const [poidsBrut, setPoidsBrut] = useState("")
  const [poidsPackaging, setPoidsPackaging] = useState("")
  const [poidsNet, setPoidsNet] = useState("")
  const [poidsAgree, setPoidsAgree] = useState("") // Pour Griffes
  const [unites, setUnites] = useState("")
  const [prixUnitaire, setPrixUnitaire] = useState("")
  const [tauxDessication, setTauxDessication] = useState("")
  const [tauxHumidite, setTauxHumidite] = useState("")
  const [densite, setDensite] = useState("") // Pour Griffes

  const [provenance, setProvenance] = useState("")
  const [autreProvenance, setAutreProvenance] = useState("")

  const handleNext = () => setCurrentStep(2)
  const handleBack = () => setCurrentStep(1)

  // Définir les valeurs par défaut selon type de matière
  useEffect(() => {
    if(typeMatiere === "clous") {
      setDateHeure("")
      setLocalisation("Vohipeno (auto-généré)")
      setDesignation("Pv reception clous")
      setPoidsBrut("")
      setPoidsPackaging("")
      setPoidsNet("")
      setUnites("")
      setPrixUnitaire("")
      setTauxDessication("")
      setTauxHumidite("")
      setPoidsAgree("")
      setDensite("")
    } else if(typeMatiere === "feuilles") {
      setDateHeure("")
      setLocalisation("Localisation feuilles")
      setDesignation("Pv reception feuilles")
      setPoidsBrut("")
      setPoidsPackaging("") // pas utilisé
      setPoidsNet("")
      setUnites("")
      setPrixUnitaire("")
      setTauxDessication("") // pas utilisé
      setTauxHumidite("")
      setPoidsAgree("")
      setDensite("")
    } else if(typeMatiere === "griffes") {
      setDateHeure("")
      setLocalisation("Localisation griffes")
      setDesignation("Pv reception griffes")
      setPoidsBrut("")
      setPoidsPackaging("") // pas utilisé
      setPoidsNet("")
      setPoidsAgree("")
      setUnites("")
      setPrixUnitaire("")
      setTauxDessication("") // pas utilisé
      setTauxHumidite("")
      setDensite("")
    }
  }, [typeMatiere])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95%] max-w-md sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-[#76bc21]">
            PV de réception
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Partie 1 : Généralité → Fournisseur */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="font-semibold text-[#76bc21]">Généralité</h3>

              {/* Type de matière première */}
              <div className="space-y-2 mb-3">
                <Label className="font-semibold text-xl">Type de matière première</Label>
                <Select onValueChange={setTypeMatiere} value={typeMatiere}>
                  <SelectTrigger>
                    <SelectValue placeholder="Clous (FG)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clous">Clous (FG)</SelectItem>
                    <SelectItem value="griffes">Griffes (GG)</SelectItem>
                    <SelectItem value="feuilles">Feuilles (CG)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date et heure réception */}
              <div className="space-y-2">
                <Label className="font-semibold text-xl">Date et heure réception</Label>
                <Input type="datetime-local" placeholder="JJ/MM/AAAA - HH:MM:SS" value={dateHeure} onChange={e=>setDateHeure(e.target.value)} />
              </div>

              {/* Désignation */}
              <div className="space-y-2">
                <Label className="font-semibold text-xl">Désignation</Label>
                <Input placeholder="Pv reception ..." value={designation} onChange={e=>setDesignation(e.target.value)} />
              </div>

              {/* Provenance */}
              <div className="space-y-2">
                <Label className="font-semibold text-xl">Provenance</Label>
                {provenance === "autres" ? (
                  <Input
                    placeholder="Entrer une nouvelle provenance"
                    value={autreProvenance}
                    onChange={(e) => setAutreProvenance(e.target.value)}
                    onBlur={() => { if(!autreProvenance.trim()) setProvenance("") }}
                    autoFocus
                  />
                ) : (
                  <Select onValueChange={setProvenance} value={provenance}>
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
              </div>

              {/* Fournisseur */}
              <div className="space-y-2">
                <div className="font-semibold text-[#76bc21]">Fournisseur</div>
                <Label className="font-semibold text-xl">Nom du fournisseur</Label>
                <Input placeholder="Rakoto Jean Baptiste (Vohipeno / id fiscale)" type="text" />
                <div className="flex mt-3 space-x-4">
                  <div>
                    <Label className="font-semibold text-xl">Nom</Label>
                    <Input placeholder="Rakoto" type="text" />
                  </div>
                  <div>
                    <Label className="font-semibold text-xl">Prenom</Label>
                    <Input placeholder="Jean Baptiste" type="text" />
                  </div>
                </div>
                <div className="flex mt-3 space-x-4">
                  <div>
                    <Label className="font-semibold text-xl">ID fiscale</Label>
                    <Input placeholder="123456789" type="number" />
                  </div>
                  <div>
                    <Label className="font-semibold text-xl">Localisation</Label>
                    <Input placeholder="Adresse de fournisseur" type="text" />
                  </div>
                </div>
                <Label className="font-semibold text-xl">Contact</Label>
                <Input placeholder="+261321234567" type="text" />
              </div>

              <Button className="w-full rounded-xl bg-[#76bc21] text-white hover:bg-[#5aa017]" onClick={handleNext}>
                Suivant →
              </Button>
            </div>
          )}

          {/* Partie 2 : Produit → Spécification */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="font-semibold text-[#76bc21]">Produit</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="mb-3">Poids brut (Kg)</Label>
                  <Input placeholder="XXX" type="number" value={poidsBrut} onChange={e=>setPoidsBrut(e.target.value)} />
                </div>
                {typeMatiere === "clous" && (
                  <div>
                    <Label className="mb-3">Poids de packaging (Kg)</Label>
                    <Input placeholder="XXX" type="number" value={poidsPackaging} onChange={e=>setPoidsPackaging(e.target.value)} />
                  </div>
                )}
                <div>
                  <Label className="mb-3">Poids net (Kg)</Label>
                  <Input placeholder="XXX" type="number" value={poidsNet} onChange={e=>setPoidsNet(e.target.value)} />
                </div>
                {typeMatiere === "griffes" && (
                  <div>
                    <Label className="mb-3">Poids agréé (Kg)</Label>
                    <Input placeholder="XXX" type="number" value={poidsAgree} onChange={e=>setPoidsAgree(e.target.value)} />
                  </div>
                )}
                <div>
                  <Label className="mb-3">Unités (Kg)</Label>
                  <Input placeholder="XXX" type="number" value={unites} onChange={e=>setUnites(e.target.value)} />
                </div>
              </div>

              <h3 className="font-semibold text-[#76bc21]">Spécification</h3>
              <div className="grid grid-cols-2 gap-4">
                {typeMatiere === "clous" && (
                  <div>
                    <Label className="mb-3">Taux de Dèssication %</Label>
                    <Input placeholder="XXX" type="number" value={tauxDessication} onChange={e=>setTauxDessication(e.target.value)} />
                  </div>
                )}
                {(typeMatiere === "clous" || typeMatiere === "feuilles") && (
                  <div>
                    <Label className="mb-3">Taux d’humidité</Label>
                    <Input placeholder="XXX" type="number" value={tauxHumidite} onChange={e=>setTauxHumidite(e.target.value)} />
                  </div>
                )}
                {typeMatiere === "griffes" && (
                  <div>
                    <Label className="mb-3">Densité</Label>
                    <Input placeholder="XXX" type="number" value={densite} onChange={e=>setDensite(e.target.value)} />
                  </div>
                )}
              </div>

              <div className="flex space-x-4">
                <Button className="w-1/2 rounded-xl bg-gray-300 text-black hover:bg-gray-400" onClick={handleBack}>
                  ← Retour
                </Button>
                <Button className="w-1/2 rounded-xl bg-[#76bc21] text-white hover:bg-[#5aa017]">
                  Terminer
                </Button>
              </div>
            </div>
          )}

        </div>
      </DialogContent>
    </Dialog>
  )
}
