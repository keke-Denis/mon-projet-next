"use client"
import { Sidebar } from "@/components/sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { TransformationCards } from "@/components/transformation-cards"
import { PerformanceChart } from "@/components/performance-chart"
import { CollectionPoints } from "@/components/collection-points"

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar currentPage="dashboard" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-8">
            <TransformationCards />
            <PerformanceChart />
            <CollectionPoints />
          </div>
        </main>
      </div>
    </div>
  )
}
