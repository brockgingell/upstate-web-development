export default function BackgroundVect() {
  return (
    <>
      <svg className="absolute inset-0 -z-10 h-screen w-screen stroke-foreground/20 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:stroke-foreground/10" aria-hidden="true">
        <defs>
          <pattern
            id="1d4240dd-898f-445f-932d-e2872fd12de3"
            width={150}
            height={150}
            y={0}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg className="overflow-visible fill-none">
          <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" strokeWidth={0}/>
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)" />
      </svg>
    </>
  )
}