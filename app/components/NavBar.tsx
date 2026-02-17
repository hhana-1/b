export default function NavBar() {
  return (
    // Original color nav version:
    // <nav className="shadow-lg sticky top-0 z-50 bg-[#666666] mt-0 pb-4">
    //   <div className="nav-container max-w-7xl mx-auto flex flex-col items-start gap-0 relative bg-[#666666]">
    //     ...existing code...
    //   </div>
    // </nav>

    // Nav with background image instead of color:
    <nav
      className="shadow-lg sticky top-0 z-50 mt-0 pb- relative"
      style={{
        backgroundImage: 'url(/warehouse.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 65%',
      }}
    >
      {/* Dark overlay to restore dark look */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none z-0"></div>
      <div className="nav-container max-w-7xl mx-auto flex flex-col items-start gap-0 relative z-10">
        <div className="flex w-full items-center justify-between pt-4 py-4">
          <div className="nav-logo-wrapper flex justify-start pt-2">
            <a href="/" className="hover:opacity-80 transition opacity-100 logo px-4">
              <img src="/banana_2.svg" alt="Banana Picker Logo" className="h-36 w-auto" />
            </a>
          </div>
          <a
            href="/user/dashboard"
            className="px-6 h-12 bg-black text-[#FFC107] font-bold rounded-lg border border-gray-800 hover:border-bg-gray-800 hover:bg-black hover:text-white transition-colors duration-300 inline-flex items-center justify-center text-center text-base whitespace-nowrap mr-[1em]"
          >
            User Dashboard
          </a>
        </div>
        <div className="-mt-2 flex flex-nowrap w-full justify-start text-base font-semibold text-white whitespace-nowrap border-t border-b border-white/30 divide-x divide-white/30 bg-black">
          <a
            href="/#sales"
            className="text-[#FFC107] cursor-pointer px-4 py-2 transition-colors duration-300 hover:bg-gray-800 hover:bg-white hover:text-black"
          >
            Solutions
          </a>
          <a
            href="/#pricing"
            className="text-[#FFC107] cursor-pointer px-4 py-2 transition-colors duration-300 hover:bg-gray-800 hover:bg-white hover:text-black"
          >
            Pricing
          </a>
          <a
            href="/#contact"
            className="text-[#FFC107] cursor-pointer px-4 py-2 transition-colors duration-300 hover:bg-gray-800 hover:bg-white hover:text-black"
          >
            Contact
          </a>
          <span className="ml-auto w-px bg-white/30 self-stretch" aria-hidden="true"></span>
        </div>
      </div>
    </nav>
  );
}