import { cn } from "@/lib/utils"

interface AstraLogoProps {
  className?: string
}

export function AstraLogo({ className }: AstraLogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="text-star-white group-hover:text-electric-blue transition-colors duration-300"
      >
        {/* Rocket body */}
        <path 
          d="M20 4L24 12H16L20 4Z" 
          fill="currentColor"
          className="opacity-90"
        />
        
        {/* Rocket main body */}
        <rect 
          x="16" 
          y="12" 
          width="8" 
          height="16" 
          rx="1"
          fill="currentColor"
        />
        
        {/* Rocket fins */}
        <path 
          d="M14 20L16 24L16 16L14 20Z" 
          fill="currentColor"
          className="opacity-80"
        />
        <path 
          d="M26 20L24 24L24 16L26 20Z" 
          fill="currentColor"
          className="opacity-80"
        />
        
        {/* Rocket flames */}
        <path 
          d="M18 28L20 36L22 28H18Z" 
          fill="#FF6B35"
          className="animate-pulse"
        />
        <path 
          d="M19 30L20 34L21 30H19Z" 
          fill="#FFB800"
          className="animate-pulse"
        />
        
        {/* Window */}
        <circle 
          cx="20" 
          cy="18" 
          r="2" 
          fill="#00D4FF"
          className="animate-pulse opacity-90"
        />
        
        {/* Stars around rocket */}
        <circle cx="8" cy="8" r="1" fill="currentColor" className="opacity-60 animate-pulse" />
        <circle cx="32" cy="12" r="1" fill="currentColor" className="opacity-60 animate-pulse" />
        <circle cx="6" cy="24" r="1" fill="currentColor" className="opacity-60 animate-pulse" />
        <circle cx="34" cy="28" r="1" fill="currentColor" className="opacity-60 animate-pulse" />
      </svg>
      
      <div className="ml-3 flex flex-col">
        <span className="text-xl font-bold text-star-white group-hover:text-electric-blue transition-colors duration-300">
          ASTRA
        </span>
        <span className="text-sm font-semibold text-gradient bg-gradient-to-r from-electric-blue to-purple-400 bg-clip-text text-transparent -mt-1">
          GTM
        </span>
      </div>
    </div>
  )
}
