export function AstraLogo({
  className,
  width = 150,
  height = 28,
}: { className?: string; width?: number; height?: number }) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 150 28" // Adjusted for a wider logo text
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Simple abstract 'A' shape */}
      <path
        d="M12.8061 27.019L0.913086 14.064L12.8061 1.10901L18.1361 1.10901L8.87109 10.429L27.8011 10.429L27.8011 17.699L8.87109 17.699L18.1361 27.019H12.8061Z"
        className="fill-star-white group-hover:fill-electric-blue transition-colors"
      />
      <text
        x="35"
        y="21"
        fontFamily="var(--font-inter), sans-serif"
        fontSize="18"
        fontWeight="bold"
        className="fill-star-white group-hover:fill-electric-blue transition-colors"
      >
        ASTRA GTM
      </text>
    </svg>
  )
}
