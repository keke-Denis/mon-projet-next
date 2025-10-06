import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { 
    title: "Griffes", 
    value: "24 kg", 
    bgColor: "#124734",
    icon: "🌿"
  },
  { 
    title: "Feuilles", 
    value: "24 kg", 
    bgColor: "#76bc21",
    icon: "🍃"
  },
  { 
    title: "Clous", 
    value: "24 kg", 
    bgColor: "#089a8d",
    icon: "📍"
  },
]

interface StatsCardsProps {
  showTitle?: boolean
}

export function StatsCards({ showTitle = true }: StatsCardsProps) {
  return (
    <div className="space-y-6 p-4">
      {/* Titre élégant */}
      {showTitle && (
        <div className="text-center space-y-3">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Solde actuel : <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">2000 Ar</span>
          </h1>
          <p className="text-gray-500 text-sm">Stock des matières premières</p>
        </div>
      )}

      {/* Cartes modernes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <Card 
            key={index} 
            className="border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-200 hover:border-gray-300 group backdrop-blur-sm bg-white/50"
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                {/* Icône */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg"
                  style={{ backgroundColor: stat.bgColor }}
                >
                  <span className="text-xl">{stat.icon}</span>
                </div>

                {/* Contenu */}
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">
                    {stat.title}
                  </h3>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {stat.value}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-xs text-gray-500">En stock</span>
                  </div>
                </div>
              </div>

              {/* Indicateur visuel */}
              <div className="mt-4 flex items-center gap-2">
                <div 
                  className="h-1.5 rounded-full flex-1 bg-gray-200 overflow-hidden"
                >
                  <div 
                    className="h-full rounded-full transition-all duration-300 group-hover:scale-105"
                    style={{ 
                      backgroundColor: stat.bgColor,
                      width: '75%'
                    }}
                  />
                </div>
                <span className="text-xs text-gray-500 font-medium">75%</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}