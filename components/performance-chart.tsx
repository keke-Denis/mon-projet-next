"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, AreaChart } from "recharts"

const data = [
  { day: "Vangaindrano", value: 20 },
  { day: "Manambondro", value: 35 },
  { day: "Vohipeno", value: 50 },
  { day: "Manakara", value: 70 },
  { day: "Matangy", value: 25 },
  { day: "Ampasimandreva", value: 60 }
]

export function PerformanceChart() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-foreground">PERFORMANCE DES POINTS DE COLLECTE</h2>

      <Card>
        <CardContent className="p-6">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6b7280" }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6b7280" }} domain={[0, 100]} />
                <Area type="monotone" dataKey="value" stroke="#f97316" strokeWidth={3} fill="url(#colorGradient)" />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#f97316"
                  strokeWidth={3}
                  dot={{ fill: "#f97316", strokeWidth: 2, r: 4 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
