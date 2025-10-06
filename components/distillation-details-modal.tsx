
"use client"

import { useState } from "react"
import { X, ZoomIn, Calendar, Users, Clock, Fuel, TreePine, Scale, Factory } from "lucide-react"
import { cn } from "@/lib/utils"

interface DistillationDetailsModalProps {
  distillationId?: string
  triggerButton?: React.ReactNode
}

export function DistillationDetailsModal({ 
  distillationId,
  triggerButton 
}: DistillationDetailsModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Données simulées - à remplacer par vos données réelles
  const distillationData = {
    id: distillationId || "XXXXXX",
    usine: "PK12",
    dateDebut: "15 Jan 2024 - 08:30:00",
    dateFin: "15 Jan 2024 - 11:30:00",
    tempsDistillation: "3 heures",
    quantiteProduite: "5 Kg",
    matierePremiereUtilisee: "5 Kg",
    matierePremiereRestante: "0.3 Kg",
    resultat: "Feuille 17 – 2% Poids",
    mainOeuvre: "3 personnes",
    boisChauffe: "1 unité",
    carburant: "2.5 litres",
    matierePremiere: "Clous",
    machineId: "XXXXXXXXXX"
  }

  const DefaultTriggerButton = () => (
    <button
      onClick={() => setIsModalOpen(true)}
      className="flex items-center space-x-2 px-3 py-2 bg-[#76bc21] text-white rounded-lg hover:bg-[#5aa017] transition-colors duration-200 shadow-sm"
    >
      <ZoomIn className="w-4 h-4" />
      <span className="text-sm font-medium">Détail</span>
    </button>
  )

  return (
    <>
      {/* Bouton pour ouvrir le modal */}
      {triggerButton ? (
        <div onClick={() => setIsModalOpen(true)}>
          {triggerButton}
        </div>
      ) : (
        <DefaultTriggerButton />
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
          <div 
            className="bg-white rounded-xl max-w-4xl w-full max-h-[95vh] overflow-y-auto animate-in slide-in-from-bottom-10 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header du modal */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200 sticky top-0 bg-white rounded-t-xl">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Détails de distillation</h2>
                <p className="text-gray-600 mt-1">ID: {distillationData.id}</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 group"
              >
                <X className="w-6 h-6 text-gray-500 group-hover:text-gray-700" />
              </button>
            </div>

            {/* Contenu du modal */}
            <div className="p-6 space-y-8">
              {/* Section Image */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Fiche technique</h3>
                  <span className="px-3 py-1 bg-[#76bc21] text-white text-sm rounded-full">
                    Complète
                  </span>
                </div>
                <div className="relative">
                  <img 
                    src="/detail.png" 
                    alt="Détails complets de la distillation"
                    className="w-full h-auto rounded-lg border-2 border-gray-300 shadow-sm"
                  />
                  <div className="absolute bottom-4 right-4">
                    <button className="p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <ZoomIn className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Grille d'informations */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Colonne 1: Informations et ressources */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-[#76bc21] to-[#5aa017] rounded-xl p-1">
                    <div className="bg-white rounded-lg p-5">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <Users className="w-5 h-5 mr-2 text-[#76bc21]" />
                        Informations et ressources
                      </h3>
                      <div className="space-y-4">
                        <InfoItem 
                          icon={<TreePine className="w-4 h-4" />}
                          label="Matière première utilisée"
                          value={distillationData.matierePremiere}
                        />
                        <InfoItem 
                          icon={<Users className="w-4 h-4" />}
                          label="Main d'œuvre"
                          value={distillationData.mainOeuvre}
                        />
                        <InfoItem 
                          icon={<Clock className="w-4 h-4" />}
                          label="Temps de distillation"
                          value={distillationData.tempsDistillation}
                        />
                        <InfoItem 
                          icon={<TreePine className="w-4 h-4" />}
                          label="Bois de chauffe"
                          value={distillationData.boisChauffe}
                        />
                        <InfoItem 
                          icon={<Fuel className="w-4 h-4" />}
                          label="Carburant"
                          value={distillationData.carburant}
                        />
                        <InfoItem 
                          icon={<Factory className="w-4 h-4" />}
                          label="ID Machine"
                          value={distillationData.machineId}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Colonne 2: Résultats de distillation */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-1">
                    <div className="bg-white rounded-lg p-5">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <Scale className="w-5 h-5 mr-2 text-blue-500" />
                        Résultats de distillation
                      </h3>
                      <div className="space-y-4">
                        <InfoItem 
                          icon={<Factory className="w-4 h-4" />}
                          label="Usine de distillation"
                          value={distillationData.usine}
                        />
                        <InfoItem 
                          icon={<Calendar className="w-4 h-4" />}
                          label="Date de début"
                          value={distillationData.dateDebut}
                        />
                        <InfoItem 
                          icon={<Calendar className="w-4 h-4" />}
                          label="Date de fin"
                          value={distillationData.dateFin}
                        />
                        <InfoItem 
                          icon={<Clock className="w-4 h-4" />}
                          label="Temps total"
                          value={distillationData.tempsDistillation}
                        />
                        <InfoItem 
                          icon={<Scale className="w-4 h-4" />}
                          label="Quantité produite"
                          value={distillationData.quantiteProduite}
                          highlight
                        />
                        <InfoItem 
                          icon={<Scale className="w-4 h-4" />}
                          label="Matière première utilisée"
                          value={distillationData.matierePremiereUtilisee}
                        />
                        <InfoItem 
                          icon={<Scale className="w-4 h-4" />}
                          label="Matière première restante"
                          value={distillationData.matierePremiereRestante}
                        />
                        <InfoItem 
                          icon={<Scale className="w-4 h-4" />}
                          label="Résultat"
                          value={distillationData.resultat}
                          highlight
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Statistiques de rendement */}
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-1">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Statistiques de rendement</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <StatCard 
                      label="Efficacité"
                      value="85%"
                      description="Rendement global"
                    />
                    <StatCard 
                      label="Durée moyenne"
                      value="3h"
                      description="Par batch"
                    />
                    <StatCard 
                      label="Production"
                      value="5 Kg"
                      description="Quantité finale"
                    />
                    <StatCard 
                      label="Taux conversion"
                      value="92%"
                      description="Matière première"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer du modal */}
            <div className="flex justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50 rounded-b-xl sticky bottom-0">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Fermer
              </button>
              <button
                onClick={() => window.print()}
                className="px-6 py-2 bg-[#76bc21] text-white rounded-lg hover:bg-[#5aa017] transition-colors duration-200"
              >
                Imprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// Composant pour les éléments d'information
function InfoItem({ 
  icon, 
  label, 
  value, 
  highlight = false 
}: { 
  icon: React.ReactNode
  label: string
  value: string
  highlight?: boolean
}) {
  return (
    <div className={cn(
      "flex items-center justify-between py-2 px-3 rounded-lg border",
      highlight 
        ? "border-[#76bc21] bg-green-50" 
        : "border-gray-200 bg-gray-50"
    )}>
      <div className="flex items-center space-x-3">
        <div className={cn(
          "p-1 rounded",
          highlight ? "text-[#76bc21]" : "text-gray-500"
        )}>
          {icon}
        </div>
        <span className="text-sm font-medium text-gray-700">{label}</span>
      </div>
      <span className={cn(
        "text-sm font-semibold",
        highlight ? "text-[#76bc21]" : "text-gray-900"
      )}>
        {value}
      </span>
    </div>
  )
}

// Composant pour les cartes de statistiques
function StatCard({ 
  label, 
  value, 
  description 
}: { 
  label: string
  value: string
  description: string
}) {
  return (
    <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
      <div className="text-2xl font-bold text-[#76bc21] mb-1">{value}</div>
      <div className="text-sm font-semibold text-gray-900 mb-1">{label}</div>
      <div className="text-xs text-gray-600">{description}</div>
    </div>
  )
}