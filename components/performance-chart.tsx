"use client"

import { Card, CardContent } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from "recharts"

const data = [
  { name: "Vangaindrano", feuilles: 30, griffes: 20, clous: 10 },
  { name: "Manambondro", feuilles: 35, griffes: 25, clous: 15 },
  { name: "Vohipeno", feuilles: 40, griffes: 30, clous: 20 },
  { name: "Manakara", feuilles: 20, griffes: 15, clous: 25 },
  { name: "Matangy", feuilles: 50, griffes: 35, clous: 30 },
  { name: "Ampasimandreva", feuilles: 45, griffes: 40, clous: 35 },
]

export function PerformanceChart() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-foreground">
        PERFORMANCE DES POINTS DE COLLECTE
      </h2>
      <Card>
        <CardContent className="p-6">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6b7280" }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6b7280" }} />
                <Tooltip />
                <Legend />

                {/* Feuilles */}
                <Line
                  type="monotone"
                  dataKey="feuilles"
                  stroke="#76bc21"
                  strokeWidth={3}
                  dot={{ fill: "#76bc21", r: 4 }}
                />

                {/* Griffes */}
                <Line
                  type="monotone"
                  dataKey="griffes"
                  stroke="#124734"
                  strokeWidth={3}
                  dot={{ fill: "#124734", r: 4 }}
                />

                {/* Clous */}
                <Line
                  type="monotone"
                  dataKey="clous"
                  stroke="#089a8d"
                  strokeWidth={3}
                  dot={{ fill: "#089a8d", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
