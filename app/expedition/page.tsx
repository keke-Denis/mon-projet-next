"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { ExpeditionHeader } from "@/components/expedition-header"
import { ExpeditionTable } from "@/components/expedition-table"
import { ExportModal } from "@/components/export-modal"

export default function ExpeditionPage() {
  const [isExportModalOpen, setIsExportModalOpen] = useState(false)

  return (
    <div className="flex h-screen bg-background">
      <div className="hidden md:flex">
        <Sidebar currentPage="expedition" />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <ExpeditionHeader onExportClick={() => setIsExportModalOpen(true)} />
        <main className="flex-1 overflow-auto p-6">
          <ExpeditionTable onExportClick={() => setIsExportModalOpen(true)} />
        </main>
      </div>

      <ExportModal isOpen={isExportModalOpen} onClose={() => setIsExportModalOpen(false)} />
    </div>
  )
}
