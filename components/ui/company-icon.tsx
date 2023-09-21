type Props = {
  className?: string;
};

export function CompanyIcon({ className, ...props }: Props) {
  return (
    <svg 
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      width="85"
      height="62"
      viewBox="0 0 85 62"
      className={`h-auto w-auto ${className}`}
      {...props}
    >
      <defs>
        <linearGradient id="Sky_7" data-name="Sky 7" x1="1.606" y1="35.047" x2="83.004" y2="35.047" gradientUnits="userSpaceOnUse">
          <stop offset=".006" stop-color="#8fbad9"/>
          <stop offset=".36" stop-color="#95c6e4"/>
          <stop offset="1" stop-color="#5f87ac"/>
        </linearGradient>
        <linearGradient id="Sky_15" data-name="Sky 15" x1="12.488" y1="40.046" x2="76.125" y2="40.046" gradientUnits="userSpaceOnUse">
          <stop offset=".006" stop-color="#ec7d4c"/>
          <stop offset=".802" stop-color="#f5b644"/>
          <stop offset="1" stop-color="#f8c642"/>
        </linearGradient>
      </defs>
      <g id="CompanyIcon">
        <g id="Display">
          <rect id="Background" x="1.606" y="9.896" width="81.397" height="50.302" fill="url(#Sky_7)" stroke="#231f20" stroke-miterlimit="10"/>
          <g id="Forground">
            <path id="Sun" d="m75.185,59.671c.657-2.695.985-5.522.935-8.43-.308-17.932-14.802-32.217-32.371-31.906-17.569.312-31.564,15.102-31.256,33.034.05,2.908.473,5.722,1.224,8.392l61.467-1.09" fill="url(#Sky_15)" stroke="#231f20" stroke-miterlimit="10"/>
            <g id="Birds">
              <path id="Bird1" d="m50.844,33.573l4.555-.033s.356-2.135.645-4.172c-1.814,2.164-1.65,2.993-1.65,2.993l-3.55,1.212Z" fill="#2f272a" stroke-width="0"/>
              <path id="Bird2" d="m39.55,25.212l1.503,4.299s2.137-.352,4.158-.737c-2.635-1.017-3.366-.596-3.366-.596l-2.295-2.966Z" fill="#2f272a" stroke-width="0"/>
              <path id="Bird3" d="m47.941,26.375l2.702.51s.459-1.224.866-2.397c-1.325,1.071-1.325,1.58-1.325,1.58l-2.244.307Z" fill="#2f272a" stroke-width="0"/>
            </g>
            <g id="Mountains">
              <path d="m83.896,60.724c-.047-.449-.042-.902.01-1.351-.012-.133,0-.266-.005-.399-.072-.66-.036-1.33.104-1.981-.035-.176-.075-.351-.096-.53h.005c-.338-1.001-.408-2.082-.217-3.117-.159-.421-.263-.859-.325-1.303-1.704-1.406-3.973-6.468-3.973-6.468l-1.227,1.702-5.519-8.514-1.698,4.373c-1.125-1.733-1.792-1.199-2.005-.939-.047.06-.073.108-.073.108l-6.071-9.59-5.519,8.514-1.227-1.702v.002c-.057.128-3.448,7.696-5.029,6.809-.105-.06-.306-.032-.584.072-1.696-2.805-3.132-6.03-3.132-6.03l-1.801,2.498-8.099-12.492-2.491,6.416c-1.651-2.543-2.629-1.761-2.939-1.378-.073.088-.107.154-.107.154l-8.91-14.071-8.097,12.494-1.801-2.498v.002c-.086.19-7.076,10.39-7.379,9.992-.22.534-.84,1.722-4.375,6.462-.001.026.109,8.245.049,8.101.021.243.038,4.732.031,4.975" fill="#192a2c" stroke="#231f20" stroke-miterlimit="10" stroke-width=".25"/>
              <path d="m55.685,46.454h.002c.729-1.13.517-2.008,1.095-3.615.054-.151.084-.328.097-.524l.867,1.202,4.48-6.899c-.189,1.511-.236,3.268.156,4.878.959,3.941-.916,5.083.202,6.133,1.114,1.048-.539,2.879.498,3.589,1.039.708,2.355-4.64,3.616-3.589.903.753,2.194-2.276,3.25-3.846l1.11,1.71.708-1.118c.026.627.116,1.228.296,1.761.959,2.805-1.678,3.378-.959,4.449.435.645.985,3.159,1.659,4.999l-11.528-1.181c-2.125-2.238-4.956-5.04-6.084-4.407-.494.277-1.107-.021-1.773-.657.865-1.46,1.721-3.171,2.305-2.884" fill="#4c7b6f" stroke="#231f20" stroke-miterlimit="10" stroke-width=".25"/>
              <path d="m6.92,48.81c2.823-4.053,4.795-7.673,6.379-6.901l.631-1.493c1.071-1.656.131-1.449.975-3.809.079-.221.125-.483.148-.771l1.271,1.768,6.572-10.125c-.279,2.219-.345,4.794.23,7.155,1.406,5.783-1.348,7.458.294,8.999,1.64,1.54-.79,4.223.732,5.267,1.524,1.042,3.458-6.806,5.304-5.267,1.327,1.106,3.222-3.338,4.772-5.642l1.629,2.508,1.039-1.64c.036.917.169,1.801.438,2.586,1.406,4.113-2.462,4.952-1.409,6.524.391.58,6.063,3.55,7.104,8.199l-8.562-2.604-7.644-1.425-10.605,1.425-6.621-4.456-5.45,1.423c.852-1.202,1.741-2.583,2.775-1.721" fill="#4c7b6f" stroke="#231f20" stroke-miterlimit="10" stroke-width=".25"/>
            </g>
          </g>
        </g>
        <g id="Screen" fill="currentColor">
          <rect id="Left" y="1.456" width="2.504" height="59.307" stroke-width="0"/>
          <rect id="Right" x="82.471" y="1.499" width="2.504" height="59.411" stroke-width="0"/>
          <g id="ToolBar">
            <g id="Navbar">
              <path id="Searchbar" d="m27.416,4.503h32.157c.509,0,.921.447.921.999h0c0,.553-.412,1.001-.921,1.001H27.416c-.509,0-.921-.447-.921-.999h0c0-.553.412-1.001.921-1.001Z" stroke-width="0"/>
              <g id="Menu">
                <path d="m74.581,4.098h4.164c.231,0,.418.192.418.428v.144c0,.236-.187.428-.418.428h-4.164c-.231,0-.418-.192-.418-.428v-.144c0-.236.187-.428.418-.428Z" stroke-width="0"/>
                <path d="m74.581,6.13h4.164c.231,0,.418.192.418.428v.144c0,.236-.187.428-.418.428h-4.164c-.231,0-.418-.192-.418-.428v-.144c0-.236.187-.428.418-.428Z" stroke-width="0"/>
              </g>
              <g id="Buttons">
                <circle cx="6.303" cy="5.595" r="1.25" stroke-width="0"/>
                <circle cx="11.424" cy="5.595" r="1.25" stroke-width="0"/>
                <circle cx="16.546" cy="5.595" r="1.25" stroke-width="0"/>
              </g>
            </g>
            <path id="Top" d="m1.155,0h82.691c.638,0,1.155.52,1.155,1.162v.23c0,.641-.517,1.162-1.155,1.162H1.155c-.638,0-1.155-.52-1.155-1.162v-.23C0,.52.517,0,1.155,0Z" stroke-width="0"/>
            <path id="Bottom" d="m1.204,8.892h82.788c.518,0,.938.422.938.944h0c0,.521-.42.943-.938.943H1.204c-.518,0-.938-.422-.938-.944h0c0-.521.42-.943.938-.943Z" stroke-width="0"/>
          </g>
          <path id="Bottom-2" data-name="Bottom" d="m1.326,59.378h82.358c.72,0,1.303.587,1.303,1.311h0c0,.725-.583,1.312-1.303,1.312H1.326c-.72,0-1.303-.587-1.303-1.311H.023c0-.725.583-1.312,1.303-1.312Z" stroke-width="0"/>
        </g>
      </g>
    </svg>
  )
}