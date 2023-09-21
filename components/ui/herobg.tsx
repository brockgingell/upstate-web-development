type Props = {
  className?: string;
};

export function HeroBG({ className, ...props }: Props) {
    return (
    <>
      <svg width="1280" height="758" viewBox="0 0 1280 758" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1280" height="758" fill="url(#paint0_angular_7_338)" fill-opacity="0.8"/>
        <rect width="1280" height="758" fill="url(#paint1_linear_7_338)" fill-opacity="0.1"/>
        <rect width="1280" height="758" fill="url(#paint2_diamond_7_338)" fill-opacity="0.2"/>
        <defs>
          <radialGradient id="paint0_angular_7_338" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(626 789.5) rotate(-163.301) scale(417.612 705.203)">
            <stop offset="0.130208" stop-color="#00284E"/>
            <stop offset="0.98736"/>
          </radialGradient>
          <linearGradient id="paint1_linear_7_338" x1="29" y1="704.5" x2="178" y2="886" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF4E00"/>
            <stop offset="1"/>
            <stop offset="1"/>
          </linearGradient>
          <radialGradient id="paint2_diamond_7_338" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1118.5 277.5) rotate(179.476) scale(218.509 1335.96)">
            <stop stop-color="#FF4E00"/>
            <stop offset="1" stop-color="#3D3939"/>
          </radialGradient>
        </defs>
      </svg>
    </>
  )
}