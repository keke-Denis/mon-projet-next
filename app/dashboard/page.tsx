"use client"
import { Sidebar } from "@/components/sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { TransformationCards } from "@/components/transformation-cards"
import { PerformanceChart } from "@/components/performance-chart"
import { CollectionPoints } from "@/components/collection-points"
import { Header } from "@/components/header"

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-background">
      <div className="md:flex">
        <Sidebar currentPage="dashboard" />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Tableau de bord" />
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
