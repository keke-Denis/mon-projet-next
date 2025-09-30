import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function TransformationCards() {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  return (
    <div className="space-y-8">
      {/* Titre général */}
      <h1 className="text-xl md:text-xl font-bold text-center text-foreground uppercase">
        Montant Général : 30.000 Ar
      </h1>

      {/* Header avec titre transformation + recherche */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-xl font-bold text-foreground">TRANSFORMATION</h2>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          {/* Date début */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Date de début</span>
            <Input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-40"
              placeholder="JJ/MM/AA"
            />
          </div>

          {/* Date fin */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Date de fin</span>
            <Input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-40"
              placeholder="JJ/MM/AA"
            />
          </div>

          {/* Bouton rechercher */}
          <Button className="bg-[#898a8d] text-white w-full hover:bg-[#76bc21] sm:w-auto cursor-pointer">
            Rechercher
          </Button>
        </div>
      </div>

      {/* Cartes principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Distillation */}
        <Card className="bg-[#76bc21] border-[#76bc21] text-white">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">
              Stock total d'huile essentielle
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <p className="text-sm opacity-90 mb-3">Quantité de matière première à transformer :</p>
                <p className="text-2xl font-bold">300 kg</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-sm opacity-90 mb-3">Huile essentielle obtenue après la distillation :</p>
                <p className="text-2xl font-bold">200 kg</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Eugénol */}
        <Card className="bg-[#76bc21] border-[#76bc21] text-white">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">
              Stock total d’Eugénol
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <p className="text-sm opacity-90 mb-3">Quantité de huile essentielle à transformer :</p>
                <p className="text-2xl font-bold">300 kg</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-sm opacity-90 mb-3">Eugénol obtenu après la transformation :</p>
                <p className="text-2xl font-bold">200 kg</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Autres stocks */}
      <div className="space-y-4">
        {/* Titre Stock matière première */}
        <h2 className="text-xl font-bold text-foreground uppercase">
          Stock total du matière première
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Feuilles de girofle */}
          <Card className="bg-[#76bc21] border-[#76bc21] text-white">
            <CardContent className="p-4 text-center">
              <p className="text-sm mb-10">Stock de feuilles de girofle :</p>
              <p className="text-3xl font-bold">300 kg</p>
            </CardContent>
          </Card>

          {/* Griffes de girofle */}
          <Card className="bg-[#76bc21] border-[#76bc21] text-white">
            <CardContent className="p-4 text-center">
              <p className="text-sm mb-10">Stock de griffes de girofle :</p>
              <p className="text-3xl font-bold">300 kg</p>
            </CardContent>
          </Card>

          {/* Clous de girofle */}
          <Card className="bg-[#76bc21] border-[#76bc21] text-white">
            <CardContent className="p-4 text-center">
              <p className="text-sm mb-10">Stock de clous de girofle :</p>
              <p className="text-3xl font-bold">300 kg</p>
            </CardContent>
          </Card>

          {/* Huile essentielle */}
          <Card className="bg-[#76bc21] border-[#76bc21] text-white">
            <CardContent className="p-4 space-y-2">
              <p className="text-sm font-medium text-center">Stock de Huile essentielle :</p>
              <div className="flex justify-center items-center gap-12">
                <div className="flex flex-col items-center">
                  <p className="text-sm">H.E distillée</p>
                  <p className="text-lg font-bold">100 kg</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-sm">H.E achetée</p>
                  <p className="text-lg font-bold">50 kg</p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm font-semibold">Stock final :</p>
                <p className="text-2xl font-bold">150 kg</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
