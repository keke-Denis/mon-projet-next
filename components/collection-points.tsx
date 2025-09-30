import { Card, CardContent } from "@/components/ui/card"

const collectionPoints = [
  { name: "Vangaindrano", feuilles: 30, griffes: 30, clous: 30, total: 90 },
  { name: "Manambondro", feuilles: 35, griffes: 35, clous: 35, total: 105 },
  { name: "Vohipeno", feuilles: 35, griffes: 35, clous: 35, total: 105 },
  { name: "Manakara", feuilles: 20, griffes: 20, clous: 20, total: 60 },
  { name: "Matangy", feuilles: 30, griffes: 30, clous: 30, total: 90 },
  { name: "Ampasimandreva", feuilles: 30, griffes: 30, clous: 30, total: 90 },
]

export function CollectionPoints() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-foreground">POINT DE COLLECTE</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collectionPoints.map((point, index) => (
          <Card
            key={index}
            className="bg-[#76bc21] text-white border-0"
          >
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4 text-center">{point.name}</h3>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm opacity-90">Feuilles en kg :</span>
                  <span className="font-semibold">{point.feuilles}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm opacity-90">Griffes en kg :</span>
                  <span className="font-semibold">{point.griffes}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm opacity-90">Clous en kg :</span>
                  <span className="font-semibold">{point.clous}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
