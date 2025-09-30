"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

interface FacturationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function FacturationModal({ isOpen, onClose }: FacturationModalProps) {
  const [encaissementType, setEncaissementType] = useState("") // "refMvola" ou "pieceCaisse"
  const [encaissementValue, setEncaissementValue] = useState("")
  const [avance, setAvance] = useState(0)
  const [montantPaye, setMontantPaye] = useState(0)
  const [prixUnitaire, setPrixUnitaire] = useState(0)
  const [quantite, setQuantite] = useState(0)

  const total = prixUnitaire * quantite
  const reste = total - montantPaye - avance

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-[#76bc21]">Payment Facture</DialogTitle>
        </DialogHeader>

        {/* Résumé en haut */}
        <div className="flex justify-between bg-gray-100 p-3 rounded mb-4">
          <div className="flex space-x-2">
            <p>Prix total: <span className="font-bold">{total} Ar</span></p>
            <p>Reste à payer: <span className="font-bold">{reste} Ar</span></p>
            <p>Total payé: <span className="font-bold">{montantPaye + avance} Ar</span></p>
          </div>
        </div>

        {/* Infos facture */}
        <div className="space-y-3">
          {/* Date et N facture */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium">Date de paiement</label>
              <Input type="date" className="mt-2"/>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium">N° facture</label>
              <Input type="text" placeholder="N° facture" className="mt-2" />
            </div>
          </div>

          {/* Designation et Encaissement */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium">Désignation</label>
              <Input type="text" placeholder="Désignation" className="mt-2" />
            </div>
            <div className="flex-1 space-y-2">
              <label className="block text-sm font-medium">Encaissement</label>
              
              {encaissementType ? (
                // Affiche un input si un type est sélectionné
                <Input
                  type="text"
                  placeholder={encaissementType === "refMvola" ? "Réf Mvola" : "Pièce d'entrée en caisse"}
                  className="mt-2"
                  value={encaissementValue}
                  onChange={(e) => setEncaissementValue(e.target.value)}
                  onBlur={() => {
                    // Si l'input est vide quand on clique ailleurs, revenir au select
                    if (!encaissementValue) setEncaissementType("")
                  }}
                  autoFocus
                />
              ) : (
                // Sinon affiche le select
                <select
                  className="border rounded px-2 py-1 w-full mt-2"
                  value={encaissementType}
                  onChange={(e) => {
                    setEncaissementType(e.target.value)
                    setEncaissementValue("") 
                  }}
                >
                  <option value="">Sélectionner</option>
                  <option value="refMvola">Ref Mvola</option>
                  <option value="pieceCaisse">Pièce d'entrée en caisse</option>
                </select>
              )}
            </div>
          </div>

          {/* Prix unitaire et quantité */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium">Prix unitaire</label>
              <Input
                type="number"
                placeholder="Prix unitaire"
                value={prixUnitaire}
                onChange={(e) => setPrixUnitaire(Number(e.target.value))}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium">Quantité (kg)</label>
              <Input
                type="number"
                placeholder="Quantité"
                value={quantite}
                onChange={(e) => setQuantite(Number(e.target.value))}
              />
            </div>
          </div>

          {/* Payment (avance) et Montant payé */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium">Payment (Avance)</label>
              <Input
                type="number"
                placeholder="Avance"
                value={avance}
                onChange={(e) => setAvance(Number(e.target.value))}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium">Montant payé</label>
              <Input
                type="number"
                placeholder="Montant payé"
                value={montantPaye}
                onChange={(e) => setMontantPaye(Number(e.target.value))}
              />
            </div>
          </div>
        </div>

        <DialogFooter className="mt-4">
          <Button onClick={onClose} className="mr-2">Annuler</Button>
          <Button className="bg-[#76bc21] text-white hover:bg-[#5aa017]">Valider</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
