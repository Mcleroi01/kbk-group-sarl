import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, Info, ArrowRight, ExternalLink } from 'lucide-react';
import drcMapData from '../../data/drc_map_data.json';
import { CITIES } from '../../data/companyData';
import { CityHub } from '../../types';

interface DRCMapProps {
  onSelectCity?: (city: CityHub) => void;
  selectedCityId?: string;
}

export const DRCMap: React.FC<DRCMapProps> = ({ onSelectCity, selectedCityId }) => {
  const [activeCityId, setActiveCityId] = useState<string>(selectedCityId || 'kinshasa');
  const [hoveredCityId, setHoveredCityId] = useState<string | null>(null);

  const activeCity = CITIES.find((c) => c.id === activeCityId) || CITIES[0];

  const handleCityClick = (city: CityHub) => {
    setActiveCityId(city.id);
    if (onSelectCity) {
      onSelectCity(city);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, city: CityHub) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCityClick(city);
    }
  };

  return (
    <div className="w-full space-y-8" role="region" aria-label="Carte vectorielle des pôles économiques de la RDC">
      {/* Map + Detail Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Vector SVG Map Container */}
        <div className="lg:col-span-7 bg-[var(--bg-surface)] p-5 sm:p-7 rounded-lg border border-[var(--border-subtle)] shadow-[var(--shadow-soft)] relative overflow-hidden transition-colors">
          
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#821828]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
                Carte Vectorielle Officielle · RDC
              </span>
            </div>
            <span className="text-[11px] font-mono text-[var(--text-muted)]">
              Frontières géographiques COD
            </span>
          </div>

          {/* SVG Frame */}
          <div className="relative aspect-[800/760] w-full bg-[var(--bg-canvas)] rounded-md border border-[var(--border-subtle)] p-2 sm:p-4 flex items-center justify-center transition-colors">
            
            <svg
              viewBox={drcMapData.viewBox}
              preserveAspectRatio="xMidYMid meet"
              className="w-full h-full drop-shadow-sm select-none"
              aria-label="Contours géographiques de la République démocratique du Congo"
            >
              <defs>
                {/* Subtle gradient for territory */}
                <linearGradient id="drcMapGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ebe6dc" />
                  <stop offset="100%" stopColor="#ded8cb" />
                </linearGradient>
                <linearGradient id="drcMapGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#141c2c" />
                  <stop offset="100%" stopColor="#0f1624" />
                </linearGradient>
                {/* Pulse filter */}
                <filter id="glowBordeaux" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* DRC Geographic Boundary Polygon */}
              <path
                d={drcMapData.path}
                className="fill-[url(#drcMapGradLight)] dark:fill-[url(#drcMapGradDark)] stroke-[#821828]/40 dark:stroke-[#821828]/60 transition-colors"
                strokeWidth="2.2"
                strokeLinejoin="round"
                strokeLinecap="round"
              />

              {/* Main River Congo Arterial Indication */}
              <path
                d="M175,390 Q220,310 320,240 T520,260 T640,360"
                fill="none"
                stroke="#0284c7"
                strokeWidth="1.8"
                strokeDasharray="4,3"
                opacity="0.35"
              />

              {/* Strategic Logistics Corridor Connection: Matadi - Kinshasa */}
              <line
                x1={drcMapData.markers.matadi.x}
                y1={drcMapData.markers.matadi.y}
                x2={drcMapData.markers.kinshasa.x}
                y2={drcMapData.markers.kinshasa.y}
                stroke="#821828"
                strokeWidth="1.8"
                strokeDasharray="3,3"
                opacity="0.75"
              />

              {/* Strategic Mining Corridor: Kolwezi - Lubumbashi */}
              <line
                x1={drcMapData.markers.kolwezi.x}
                y1={drcMapData.markers.kolwezi.y}
                x2={drcMapData.markers.lubumbashi.x}
                y2={drcMapData.markers.lubumbashi.y}
                stroke="#821828"
                strokeWidth="1.8"
                strokeDasharray="3,3"
                opacity="0.75"
              />

              {/* Interactive City Hub Markers */}
              {CITIES.map((city) => {
                const markerData = drcMapData.markers[city.id as keyof typeof drcMapData.markers];
                if (!markerData) return null;

                const isSelected = activeCityId === city.id;
                const isHovered = hoveredCityId === city.id;

                return (
                  <g
                    key={city.id}
                    role="button"
                    tabIndex={0}
                    aria-label={`Pôle de ${city.name}, ${city.role}`}
                    aria-pressed={isSelected}
                    onClick={() => handleCityClick(city)}
                    onKeyDown={(e) => handleKeyDown(e, city)}
                    onMouseEnter={() => setHoveredCityId(city.id)}
                    onMouseLeave={() => setHoveredCityId(null)}
                    className="cursor-pointer focus:outline-none transition-transform"
                  >
                    {/* Outer Pulsing Aura when selected */}
                    {isSelected && (
                      <circle
                        cx={markerData.x}
                        cy={markerData.y}
                        r="24"
                        className="fill-[#821828]/25 stroke-[#821828] stroke-1"
                      />
                    )}

                    {/* Marker Ring */}
                    <circle
                      cx={markerData.x}
                      cy={markerData.y}
                      r={isSelected ? "14" : isHovered ? "12" : "9"}
                      className={
                        isSelected
                          ? "fill-[#821828] stroke-white dark:stroke-white stroke-2"
                          : isHovered
                          ? "fill-[#9e2336] stroke-white stroke-1"
                          : "fill-slate-600 dark:fill-slate-400 stroke-white stroke-1"
                      }
                    />

                    {/* Inner Center Dot */}
                    <circle
                      cx={markerData.x}
                      cy={markerData.y}
                      r={isSelected ? "5" : "3.5"}
                      className="fill-white"
                    />

                    {/* City Label Badge */}
                    <g transform={`translate(${markerData.x + (city.id === 'matadi' ? -18 : 16)}, ${markerData.y + 4})`}>
                      <rect
                        x={city.id === 'matadi' ? -76 : -4}
                        y="-14"
                        width="80"
                        height="20"
                        rx="4"
                        className={
                          isSelected
                            ? "fill-[#821828] fill-opacity-95"
                            : "fill-white/90 dark:fill-[#0b0f17]/90 stroke-[var(--border-subtle)] stroke-[0.8]"
                        }
                      />
                      <text
                        x={city.id === 'matadi' ? -36 : 36}
                        y="0"
                        textAnchor="middle"
                        className={`text-[11px] font-sans font-bold tracking-wider select-none ${
                          isSelected ? "fill-white" : "fill-slate-900 dark:fill-slate-100"
                        }`}
                      >
                        {city.name}
                      </text>
                    </g>
                  </g>
                );
              })}
            </svg>

            {/* Map Floating Legend */}
            <div className="absolute bottom-3 left-3 bg-[var(--bg-surface)]/95 backdrop-blur-md p-2.5 sm:p-3 rounded border border-[var(--border-subtle)] text-[10px] sm:text-xs space-y-1.5 shadow-md">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#821828]" />
                <span className="text-[var(--text-primary)] font-medium">Pôle sélectionné</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                <span className="text-[var(--text-muted)]">Pôles économiques initiaux</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-0.5 bg-[#821828] border-dashed border-t" />
                <span className="text-[var(--text-muted)]">Corridors de transport</span>
              </div>
            </div>

          </div>

          {/* City selector pills / tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4">
            {CITIES.map((city) => (
              <button
                key={city.id}
                onClick={() => handleCityClick(city)}
                className={`px-3 py-2 text-xs font-semibold rounded text-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#821828] ${
                  activeCityId === city.id
                    ? 'bg-[#821828] text-white shadow-sm'
                    : 'bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-subtle)]'
                }`}
              >
                {city.name}
              </button>
            ))}
          </div>

        </div>

        {/* Right Column: Detailed Hub Card */}
        <div className="lg:col-span-5 bg-[var(--bg-surface)] p-6 sm:p-8 rounded-lg border border-[var(--border-subtle)] space-y-6 shadow-[var(--shadow-soft)] transition-colors">
          
          <div className="flex items-start justify-between pb-4 border-b border-[var(--border-subtle)]">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#821828] dark:text-[#9e2336]">
                {activeCity.province}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
                {activeCity.name}
              </h3>
            </div>
            <div className="w-10 h-10 rounded bg-[var(--bg-surface-elevated)] flex items-center justify-center text-[#821828] dark:text-[#9e2336] border border-[var(--border-subtle)]">
              <MapPin className="w-5 h-5" />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                Rôle économique stratégique
              </span>
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                {activeCity.role}
              </p>
            </div>

            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                Présentation du pôle
              </span>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {activeCity.description}
              </p>
            </div>

            <div className="p-4 rounded bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] space-y-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#821828] dark:text-[#9e2336] block">
                Intérêt stratégique pour KBK GROUP SARL
              </span>
              <p className="text-xs text-[var(--text-primary)] leading-relaxed">
                {activeCity.strategicImportance}
              </p>
            </div>

            {/* Key Transport Corridors */}
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)] block mb-1.5">
                Corridors & axes de liaison
              </span>
              <ul className="space-y-1">
                {activeCity.keyCorridors.map((corridor, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                    <Navigation className="w-3.5 h-3.5 text-[#821828] shrink-0" />
                    <span>{corridor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)] flex items-start gap-2">
            <Info className="w-4 h-4 text-[#821828] shrink-0 mt-0.5" />
            <span>
              <strong>Note de rigueur :</strong> Villes mentionnées dans les orientations initiales du groupe. Aucune agence permanente ni adresse physique n'est affirmée sans homologation officielle préalable.
            </span>
          </div>

        </div>

      </div>

      {/* Textual City Grid for Screen Readers & High-Accessibility Review */}
      <div className="pt-4">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3">
          Répertoire synthétique des bassins économiques RDC
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CITIES.map((c) => (
            <div
              key={c.id}
              onClick={() => handleCityClick(c)}
              className={`p-4 rounded border transition-all cursor-pointer ${
                activeCityId === c.id
                  ? 'border-[#821828] bg-[#821828]/5 dark:bg-[#821828]/10'
                  : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-slate-400'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-sm text-[var(--text-primary)]">{c.name}</span>
                <span className="text-[10px] text-[var(--text-muted)]">{c.province}</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] line-clamp-2">{c.role}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
