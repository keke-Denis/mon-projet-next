"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { StatsCards } from "@/components/stats-cards"
import { DataTable } from "@/components/data-table"
import { InsertionModal } from "@/components/insertion-modal"
import { ExportModal } from "@/components/export-modal"
import { Box, TestTube } from "lucide-react"
import Test from "./test"

export default function CollectePage() {
  const [isInsertionModalOpen, setIsInsertionModalOpen] = useState(false)
  const [isExportModalOpen, setIsExportModalOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<"matiere" | "huile">("matiere")
  const [statusFilter, setStatusFilter] = useState("Tous")
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [startDate, setStartDate] = useState("2024-03-01")
  const [endDate, setEndDate] = useState("2024-03-31")

  
  useEffect(() => {
    const savedOption = localStorage.getItem("selectedOption") as "matiere" | "huile" | null
    if (savedOption) {
      setSelectedOption(savedOption)
    }
  }, [])

  const handleOptionChange = (option: "matiere" | "huile") => {
    setSelectedOption(option)
    localStorage.setItem("selectedOption", option)
  }

  return (
    <div className="flex h-screen bg-background">
      <div className="hidden md:flex">
        <Sidebar currentPage="collecte" />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          onInsertionClick={() => setIsInsertionModalOpen(true)}
          onExportClick={() => setIsExportModalOpen(true)}
        />

        <div className="flex flex-col md:flex-row items-center justify-center mt-4 space-y-2 md:space-y-0 md:space-x-4">
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold ${
              selectedOption === "matiere" ? "bg-[#76bc21] text-white" : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => handleOptionChange("matiere")}
          >
            <Box className="w-5 h-5" />
            Matière première
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold ${
              selectedOption === "huile" ? "bg-[#76bc21] text-white" : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => handleOptionChange("huile")}
          >
            <TestTube className="w-5 h-5" />
            Test Huile essentielle
          </button>
        </div>

        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6 text-center">
            {selectedOption === "matiere" ? (
              <>
                <StatsCards />
                <DataTable
                  onInsertionClick={() => setIsInsertionModalOpen(true)}
                  onExportClick={() => setIsExportModalOpen(true)}
                />
              </>
            ) : (
              <Test /> 
            )}
          </div>
        </main>
      </div>

      <InsertionModal isOpen={isInsertionModalOpen} onClose={() => setIsInsertionModalOpen(false)} />
      <ExportModal isOpen={isExportModalOpen} onClose={() => setIsExportModalOpen(false)} />
    </div>
  )
}
