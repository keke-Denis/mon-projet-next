
"use client"
import { useState } from "react"
import { StatsCards } from "@/components/stats-cards-test"
import { DataTable } from "@/components/data-table-test"

export default function Test() {
  return (
    <div className="space-y-6 text-center">
      <StatsCards />
      <DataTable
      />
    </div>
  )
}
