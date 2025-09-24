"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X } from "lucide-react"

interface ExportModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ExportModal({ isOpen, onClose }: ExportModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>Exportation de données</DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Date de début</Label>
            <Input type="date" defaultValue="2024-03-01" placeholder="JJ / MM / AA" />
          </div>

          <div className="space-y-2">
            <Label>Date de fin</Label>
            <Input type="date" defaultValue="2024-03-31" placeholder="JJ / MM / AA" />
          </div>

          <div className="space-y-2">
            <Label>Format du document à exporter</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Tous les formats" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="excel">Excel</SelectItem>
                <SelectItem value="csv">CSV</SelectItem>
                <SelectItem value="all">Tous les formats</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Statut à inclure</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Non livré" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="non-livre">Non livré</SelectItem>
                <SelectItem value="livre">Livré (archive)</SelectItem>
                <SelectItem value="tous">Tous</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className="w-full bg-primary text-primary-foreground">Valider l'insertion</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
