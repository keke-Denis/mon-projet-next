"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, Plus, Send } from "lucide-react"

interface InsertionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function InsertionModal({ isOpen, onClose }: InsertionModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg rounded-2xl shadow-lg p-6">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-semibold text-primary">
              Insertion de collecte
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="space-y-5">
          {/* Lieu de collecte */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Lieu de collecte</Label>
            <Select>
              <SelectTrigger className="rounded-lg border-muted focus:ring-2 focus:ring-primary">
                <SelectValue placeholder="Choisir un lieu" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="manambondro">Manambondro</SelectItem>
                <SelectItem value="manakara">Manakara</SelectItem>
                <SelectItem value="vangaindrano">Vangaindrano</SelectItem>
                <SelectItem value="maroantsetra">Maroantsetra</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Élément collecté + Quantité */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Élément collecté</Label>
              <Select>
                <SelectTrigger className="rounded-lg border-muted focus:ring-2 focus:ring-primary">
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="feuilles">Feuille de girofle</SelectItem>
                  <SelectItem value="griffes">Griffe de girofle</SelectItem>
                  <SelectItem value="clous">Clous de girofle</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Quantité en Kilogramme</Label>
              <Select>
                <SelectTrigger className="rounded-lg border-muted focus:ring-2 focus:ring-primary">
                  <SelectValue placeholder="10" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="15">15</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Rendement */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Élément collecté</Label>
              <Select>
                <SelectTrigger className="rounded-lg border-muted focus:ring-2 focus:ring-primary">
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="griffes">Griffe de girofle</SelectItem>
                  <SelectItem value="clous">Clous de girofle</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Quantité en Kilogramme</Label>
              <Select>
                <SelectTrigger className="rounded-lg border-muted focus:ring-2 focus:ring-primary">
                  <SelectValue placeholder="10" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="15">15</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Boutons */}
          <div className="space-y-3 pt-2">
            {/* Ajouter un item */}
            <Button
              variant="outline"
              className="w-full flex items-center justify-center space-x-2 rounded-xl border-dashed"
            >
              <Plus className="w-4 h-4" />
              <span>Ajouter un item</span>
            </Button>

            {/* Valider */}
            <Button className="w-full rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center space-x-2">
              <span>Valider l'insertion</span>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
