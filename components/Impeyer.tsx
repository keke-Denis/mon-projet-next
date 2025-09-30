"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { ChevronUp, ChevronDown, Send } from "lucide-react"

interface ImpeyerModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ImpeyerModal({ isOpen, onClose }: ImpeyerModalProps) {
  const [datePaiement, setDatePaiement] = useState("")
  const [numeroFacture, setNumeroFacture] = useState("149808")
  const [designation, setDesignation] = useState("PV reception clous...")
  const [prixUnitaire, setPrixUnitaire] = useState("2000")
  const [quantite, setQuantite] = useState("50")
  const [montantPayer, setMontantPayer] = useState("100.000")
  const [encaissement, setEncaissement] = useState("Ref:2354679")

  const prixTotal = "100.000 ar"
  const resteAPayer = "50.000 ar"
  const totalPayer = "50.000 ar"

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-white rounded-2xl p-6 shadow-2xl">
        <DialogHeader className="pb-4">
          <DialogTitle className="text-[#76bc21] text-lg font-semibold flex items-center gap-2">
            Ajustement du solde impayé
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-5">
          {/* Date et N° facture */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-2 font-medium">Date de paiement</label>
              <Input 
                placeholder="12/04/2024 : 9h30"
                value={datePaiement}
                onChange={(e) => setDatePaiement(e.target.value)}
                className="text-sm rounded-lg border-gray-300 focus:border-[#76bc21] focus:ring-2 focus:ring-[#76bc21] transition-all"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-2 font-medium">N° facture</label>
              <Input 
                value={numeroFacture}
                onChange={(e) => setNumeroFacture(e.target.value)}
                className="text-sm rounded-lg border-gray-300 focus:border-[#76bc21] focus:ring-2 focus:ring-[#76bc21] transition-all"
              />
            </div>
          </div>

          {/* Designation et Encaissement */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-2 font-medium">Désignation</label>
              <Input 
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                className="text-sm rounded-lg border-gray-300 focus:border-[#76bc21] focus:ring-2 focus:ring-[#76bc21] transition-all"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-2 font-medium">Encaissement</label>
              <Input 
                value={encaissement}
                onChange={(e) => setEncaissement(e.target.value)}
                className="text-sm rounded-lg border-gray-300 focus:border-[#76bc21] focus:ring-2 focus:ring-[#76bc21] transition-all"
              />
            </div>
          </div>

          {/* Prix unitaires et Quantité */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-2 font-medium">Prix unitaires</label>
              <div className="relative">
                <Input 
                  value={prixUnitaire}
                  onChange={(e) => setPrixUnitaire(e.target.value)}
                  className="text-sm rounded-lg border-gray-300 focus:border-[#76bc21] focus:ring-2 focus:ring-[#76bc21] transition-all pr-8"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col">
                  <ChevronUp className="w-3 h-3 text-[#76bc21] cursor-pointer" />
                  <ChevronDown className="w-3 h-3 text-[#76bc21] cursor-pointer" />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-2 font-medium">Quantité (KG)</label>
              <div className="relative">
                <Input 
                  value={quantite}
                  onChange={(e) => setQuantite(e.target.value)}
                  className="text-sm rounded-lg border-gray-300 focus:border-[#76bc21] focus:ring-2 focus:ring-[#76bc21] transition-all pr-8"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col">
                  <ChevronUp className="w-3 h-3 text-[#76bc21] cursor-pointer" />
                  <ChevronDown className="w-3 h-3 text-[#76bc21] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          {/* Montant payer */}
          <div>
            <label className="block text-xs text-gray-600 mb-2 font-medium">Montant payé</label>
            <div className="relative">
              <Input 
                value={montantPayer}
                onChange={(e) => setMontantPayer(e.target.value)}
                className="text-sm rounded-lg border-gray-300 focus:border-[#76bc21] focus:ring-2 focus:ring-[#76bc21] transition-all pr-8"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col">
                <ChevronUp className="w-3 h-3 text-[#76bc21] cursor-pointer" />
                <ChevronDown className="w-3 h-3 text-[#76bc21] cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Totaux */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Prix total : </span>
              <span className="font-semibold">{prixTotal}</span>
            </div>
            <div>
              <span className="text-gray-600">Reste à payer : </span>
              <span className="font-semibold text-red-500">{resteAPayer}</span>
            </div>
          </div>

          <div className="text-sm">
            <span className="text-gray-600">Total payé : </span>
            <span className="font-semibold text-[#76bc21]">{totalPayer}</span>
          </div>

          {/* Ligne pointillée */}
          <div className="border-t border-dotted border-gray-300 my-4"></div>
        </div>

        <DialogFooter className="pt-4">
          <Button 
            className="w-full bg-[#76bc21] hover:bg-[#68a82d] text-white rounded-xl py-3 flex items-center justify-center gap-2 transition-all shadow-md"
            onClick={onClose}
          >
            Valider
            <Send className="w-4 h-4" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
