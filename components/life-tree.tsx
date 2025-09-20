"use client"

interface LifeTreeProps {
  growth: number // 0-100 percentage
}

export function LifeTree({ growth }: LifeTreeProps) {
  // Calculate tree elements based on growth
  const hasLeaves = growth > 20
  const hasFlowers = growth > 50
  const hasFullCanopy = growth > 80

  return (
    <div className="relative w-24 h-24 mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Tree trunk */}
        <rect x="45" y="70" width="10" height="25" fill="currentColor" className="text-muted-foreground" rx="2" />

        {/* Tree base/roots */}
        <ellipse cx="50" cy="95" rx="15" ry="3" fill="currentColor" className="text-muted-foreground/50" />

        {/* Tree canopy - grows with progress */}
        {growth > 10 && (
          <circle
            cx="50"
            cy="50"
            r={Math.min(25, (growth / 100) * 25)}
            fill="currentColor"
            className={`transition-all duration-1000 ${hasLeaves ? "text-primary" : "text-muted-foreground/30"}`}
          />
        )}

        {/* Additional foliage layers */}
        {hasLeaves && (
          <>
            <circle
              cx="40"
              cy="45"
              r={Math.min(15, ((growth - 20) / 80) * 15)}
              fill="currentColor"
              className="text-primary/80 transition-all duration-1000"
            />
            <circle
              cx="60"
              cy="45"
              r={Math.min(15, ((growth - 20) / 80) * 15)}
              fill="currentColor"
              className="text-primary/80 transition-all duration-1000"
            />
          </>
        )}

        {/* Flowers/fruits for high growth */}
        {hasFlowers && (
          <>
            <circle cx="45" cy="40" r="2" fill="currentColor" className="text-secondary animate-pulse" />
            <circle cx="55" cy="35" r="2" fill="currentColor" className="text-secondary animate-pulse delay-300" />
            <circle cx="50" cy="45" r="2" fill="currentColor" className="text-secondary animate-pulse delay-700" />
          </>
        )}

        {/* Full canopy sparkles */}
        {hasFullCanopy && (
          <>
            <circle cx="35" cy="50" r="1" fill="currentColor" className="text-accent animate-pulse" />
            <circle cx="65" cy="50" r="1" fill="currentColor" className="text-accent animate-pulse delay-500" />
            <circle cx="50" cy="30" r="1" fill="currentColor" className="text-accent animate-pulse delay-1000" />
          </>
        )}
      </svg>

      {/* Growth sparkles around the tree */}
      {growth > 30 && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-2 left-2 w-1 h-1 bg-accent rounded-full animate-ping"></div>
          <div className="absolute top-4 right-3 w-1 h-1 bg-secondary rounded-full animate-ping delay-700"></div>
          <div className="absolute bottom-8 left-4 w-1 h-1 bg-primary rounded-full animate-ping delay-1000"></div>
        </div>
      )}
    </div>
  )
}
