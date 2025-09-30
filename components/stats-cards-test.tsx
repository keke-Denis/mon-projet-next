import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { title: "Total de H.E des griffes", value: "50 kg", bgColor: "#124734", textColor: "#ffffff" },
  { title: "Total de H.E des feuilles", value: "50 kg", bgColor: "#76bc21", textColor: "#ffffff" },
  { title: "Total de H.E des clous", value: "50 kg", bgColor: "#089a8d", textColor: "#ffffff" },
]
export function StatsCards() {
  return (
    <div className="space-y-6 p-4">
      {/* Titre global */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800">
        Solde actuel : 2000 Ar
      </h1>

      {/* Cartes responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="border-2" style={{ borderColor: stat.bgColor }}>
            <CardContent className="p-4 sm:p-6 text-center">
              {/* Titre matière */}
              <div
                className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-2"
                style={{ backgroundColor: stat.bgColor, color: stat.textColor }}
              >
                {stat.title}
              </div>

              {/* Valeur */}
              <div className="text-xl sm:text-2xl font-bold" style={{ color: stat.bgColor }}>
                {stat.value}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
