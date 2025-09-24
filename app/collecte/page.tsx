"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { StatsCards } from "@/components/stats-cards"
import { DataTable } from "@/components/data-table"
import { InsertionModal } from "@/components/insertion-modal"
import { ExportModal } from "@/components/export-modal"

export default function CollectePage() {
  const [isInsertionModalOpen, setIsInsertionModalOpen] = useState(false)
  const [isExportModalOpen, setIsExportModalOpen] = useState(false)

  return (
    <div className="flex h-screen bg-background">
      <Sidebar currentPage="collecte" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          onInsertionClick={() => setIsInsertionModalOpen(true)}
          onExportClick={() => setIsExportModalOpen(true)}
        />
        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <StatsCards />
            <DataTable
              onInsertionClick={() => setIsInsertionModalOpen(true)}
              onExportClick={() => setIsExportModalOpen(true)}
            />
          </div>
        </main>
      </div>

      <InsertionModal isOpen={isInsertionModalOpen} onClose={() => setIsInsertionModalOpen(false)} />
      <ExportModal isOpen={isExportModalOpen} onClose={() => setIsExportModalOpen(false)} />
    </div>
  )
}
