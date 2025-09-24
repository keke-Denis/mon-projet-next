import { Card, CardContent } from "@/components/ui/card"

export function TransformationCards() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-foreground">TRANSFORMATION</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Distillation Card */}
        <Card className="bg-gradient-to-br from-pink-100 to-pink-200 border-pink-300">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-pink-800 mb-4 text-center">
              Distillation en huile
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <p className="text-sm text-pink-700">Quantité en tonnes :</p>
                <p className="text-2xl font-bold text-pink-900">300</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-sm text-pink-700">Distillat obtenu en L :</p>
                <p className="text-2xl font-bold text-pink-900">200</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stock Card */}
        <Card className="bg-gradient-to-br from-orange-100 to-orange-200 border-orange-300">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-orange-800 mb-4 text-center">
              Eugenol
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <p className="text-sm text-orange-700">Quantité en Litres :</p>
                <p className="text-2xl font-bold text-orange-900">300</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-sm text-orange-700">Eugenol obtenu en L :</p>
                <p className="text-2xl font-bold text-orange-900">200</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Remaining Stock Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-purple-100 to-purple-200 border-purple-300">
          <CardContent className="p-4 text-center">
            <p className="text-sm text-purple-700 mb-2">Feuilles reste en kg :</p>
            <p className="text-3xl font-bold text-purple-900">300</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-100 to-blue-200 border-blue-300">
          <CardContent className="p-4 text-center">
            <p className="text-sm text-blue-700 mb-2">Griffes reste en kg :</p>
            <p className="text-3xl font-bold text-blue-900">300</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-100 to-green-200 border-green-300">
          <CardContent className="p-4 text-center">
            <p className="text-sm text-green-700 mb-2">Clous reste en kg :</p>
            <p className="text-3xl font-bold text-green-900">300</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
