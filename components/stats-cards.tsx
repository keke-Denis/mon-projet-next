import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { title: "Total des feuilles", value: "24 kg", color: "bg-blue-100 text-blue-800" },
  { title: "Total des griffes", value: "24 kg", color: "bg-purple-100 text-purple-800" },
  { title: "Total des clous", value: "24 kg", color: "bg-pink-100 text-pink-800" },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="border-2">
          <CardContent className="p-6">
            <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${stat.color} mb-2`}>
              {stat.title}
            </div>
            <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
