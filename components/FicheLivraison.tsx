"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { Send } from "lucide-react"

interface FicheLivraisonModalProps {
  isOpen: boolean
  onClose: () => void
}

export function FicheLivraisonModal({ isOpen, onClose }: FicheLivraisonModalProps) {
  const [dateLivraison, setDateLivraison] = useState("")
  const [lieuDepart, setLieuDepart] = useState("Vohipeno")
  const [destination, setDestination] = useState("PK 12")
  
  // Livreur
  const [nomLivreur, setNomLivreur] = useState("")
  const [prenomLivreur, setPrenomLivreur] = useState("")
  const [telephone, setTelephone] = useState("")
  const [numeroVehicule, setNumeroVehicule] = useState("")
  
  // Destinataire
  const [nomDestinataire, setNomDestinataire] = useState("")
  const [prenomDestinataire, setPrenomDestinataire] = useState("")
  const [fonction, setFonction] = useState("")
  const [contact, setContact] = useState("")
  
  // Produit
  const [typeProduit, setTypeProduit] = useState("Feuilles (KG)")
  const [poidsNet, setPoidsNet] = useState("")

  // Ristourer
  const [ristourerRegionale, setRistourerRegionale] = useState("")
  const [ristourerCommunale, setRistourerCommunale] = useState("")

  // Fiche de stockage
  const [prixUnitaire, setPrixUnitaire] = useState("")
  const [quantiteALivrer, setQuantiteALivrer] = useState("")
  const [valeurTotale, setValeurTotale] = useState("700.000")

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg bg-white rounded-2xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-4">
          <DialogTitle className="text-[#76bc21] text-lg font-semibold">
            Fiche d'envoi de MP
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">

          <div className="bg-[#76bc21] p-4 rounded-lg">
            {/* Date de livraison */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">Date de livraison</label>
            <Input 
              type="date"
              value={dateLivraison}
              onChange={(e) => setDateLivraison(e.target.value)}
              className="text-sm"
            />
          </div>
          <div className="flex gap-4 mt-4">
            {/* Lieu de départ */}
            <div>
            <label className="block text-sm text-gray-700 mb-2">Lieu de départ</label>
            <Select value={lieuDepart} onValueChange={setLieuDepart}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Vohipeno">Vohipeno</SelectItem>
                <SelectItem value="Manakara">Manakara</SelectItem>
                <SelectItem value="Farafangana">Farafangana</SelectItem>
                <SelectItem value="Manambondro">Manambondro</SelectItem>
                <SelectItem value="Vagaindrano">Vagaindrano</SelectItem>
                <SelectItem value="Matangy">Matangy</SelectItem>
                <SelectItem value="Ampasimandeva">Ampasimandeva</SelectItem>
                <SelectItem value="Autres">Autres</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* Destination */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">Destination</label>
            <Select value={destination} onValueChange={setDestination}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="FM 12">Pk 12</SelectItem>
                <SelectItem value="Autre">Makomby</SelectItem>
              </SelectContent>
            </Select>
          </div>
          </div>
          </div>
          
          {/* Livreur Section */}
          <div className="bg-[#76bc21] p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-3">Livreur</h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm text-black mb-1">Nom du livreur</label>
                <Input 
                  placeholder="Rabemahasoa"
                  value={nomLivreur}
                  onChange={(e) => setNomLivreur(e.target.value)}
                  className="text-sm text-black"
                />
              </div>
              <div>
                <label className="block text-sm text-black mb-1">Prénom du livreur</label>
                <Input 
                  placeholder="Harilala"
                  value={prenomLivreur}
                  onChange={(e) => setPrenomLivreur(e.target.value)}
                  className="text-sm text-black"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-3">
              <div>
                <label className="block text-sm text-black mb-1">Téléphone</label>
                <Input 
                  placeholder="+261 34 44 555 66"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  className="text-sm text-black"
                />
              </div>
              <div>
                <label className="block text-sm text-black mb-1">Numéro de véhicule</label>
                <Input 
                  placeholder="1234 FE"
                  value={numeroVehicule}
                  onChange={(e) => setNumeroVehicule(e.target.value)}
                  className="text-sm"
                />
              </div>
            </div>
          </div>

          {/* Destinataire Section */}
          <div className="bg-[#76bc21] p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-3">Destinataire</h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm text-black mb-1">Nom du Destinataire</label>
                <Input 
                  placeholder="Rakoto"
                  value={nomDestinataire}
                  onChange={(e) => setNomDestinataire(e.target.value)}
                  className="text-sm"
                />
              </div>
              <div>
                <label className="block text-sm text-black mb-1">Prénom du Destinataire</label>
                <Input 
                  placeholder="Jean"
                  value={prenomDestinataire}
                  onChange={(e) => setPrenomDestinataire(e.target.value)}
                  className="text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-3">
              <div>
                <label className="block text-sm text-black mb-1">Fonction</label>
                <Input 
                  placeholder="Réceptionniste"
                  value={fonction}
                  onChange={(e) => setFonction(e.target.value)}
                  className="text-sm"
                />
              </div>
              <div>
                <label className="block text-sm text-black mb-1">Contact</label>
                <Input 
                  placeholder="+261 34 18 023 19"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="text-sm text-black"
                />
              </div>
            </div>
          </div>

          {/* Produit Section */}
          <div className="bg-[#76bc21] p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-3">Produit</h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm text-black mb-1">Type de produit</label>
                <Select value={typeProduit} onValueChange={setTypeProduit}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Feuilles (KG)">Feuilles (KG)</SelectItem>
                    <SelectItem value="Clous (KG)">Clous (KG)</SelectItem>
                    <SelectItem value="Griffes (KG)">Griffes (KG)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm text-black mb-1">Poids net (Kg)</label>
                <Input 
                  placeholder="123"
                  value={poidsNet}
                  onChange={(e) => setPoidsNet(e.target.value)}
                  className="text-sm"
                />
              </div>
            </div>
            {/* Restaurer Section */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div>
              <label className="block text-sm text-black mb-2">Ristourer Régionale</label>
                <Input 
                  placeholder="XXX"
                  value={ristourerRegionale}
                  onChange={(e) => setRistourerRegionale(e.target.value)}
                  className="text-sm"
                />
            </div>
            <div>
              <div>
                <label className="block text-sm text-black mb-2">Ristourer Communale</label>
                <Input 
                  placeholder="XXX"
                  value={ristourerCommunale}
                  onChange={(e) => setRistourerCommunale(e.target.value)}
                  className="text-sm"
                />
              </div>
            </div>
          </div>
          </div>        

          {/* Fiche de stockage Section */}
          <div className="bg-[#76bc21] p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-3">Fiche de stockage (Sortie)</h3>
            <div className="grid grid-cols-2 gap-3 mt-4"> 
                <div>
                   <label className="block text-sm text-black mb-2">Prix unitaire</label>
                   <Input 
                     value={prixUnitaire}
                     onChange={(e) => setPrixUnitaire(e.target.value)}
                     className="text-sm mb-3"
                   />
                </div>
                <div>
                   <label className="block text-sm text-black mb-2">Quantité à livrer</label>
                   <Input 
                     value={quantiteALivrer}
                     onChange={(e) => setQuantiteALivrer(e.target.value)}
                     className="text-sm mb-3"
                   />
                </div>
             </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
              <div className="flex items-end">
                <div className="w-full">
                  <label className="block text-sm text-black mb-2">Valeur totale: {valeurTotale}</label>
                </div>
              </div>
            </div>
        </div>

        <DialogFooter className="pt-4 border-t border-dotted border-gray-300 mt-4">
          <Button 
            className="w-full bg-[#76bc21] hover:bg-[#5cbf1f] text-white rounded-xl py-3 flex items-center justify-center gap-2"
            onClick={onClose}
          >
            Suivant
            <Send className="w-4 h-4" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}