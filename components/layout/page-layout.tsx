import Link from "next/link"
import type { ReactNode } from "react"

interface PageLayoutProps {
  children: ReactNode
  activePage: "HOME" | "ABOUT US" | "SERVICES" | "WORK" | "TEAM" | "CONTACT"
}

export default function PageLayout({ children, activePage }: PageLayoutProps) {
  return (
    <main className="relative min-h-screen bg-white bg-grid-pattern overflow-hidden">
      {/* Logo in top right */}
      <div className="absolute top-8 right-8 z-10">
        <div className="relative w-[120px] h-[50px]">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-[40px] h-[40px]">
              <div className="absolute inset-0 border border-primary rotate-0"></div>
              <div className="absolute inset-0 border border-primary rotate-[15deg]"></div>
              <div className="absolute inset-0 border border-primary rotate-[30deg]"></div>
            </div>
            <span className="absolute text-sm font-medium text-primary">stockroompitch</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-8 left-8 z-10">
        <div className="flex flex-col space-y-1">
          <div className="flex space-x-1 mb-4">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <div className="w-2 h-2 bg-black rounded-full"></div>
          </div>
          <Link href="/" className={`text-sm font-medium ${activePage === "HOME" ? "text-primary" : ""}`}>
            HOME
          </Link>
          <Link href="/about" className={`text-sm font-medium ${activePage === "ABOUT US" ? "text-primary" : ""}`}>
            ABOUT US
          </Link>
          <Link href="/services" className={`text-sm font-medium ${activePage === "SERVICES" ? "text-primary" : ""}`}>
            SERVICES
          </Link>
          <Link href="/work" className={`text-sm font-medium ${activePage === "WORK" ? "text-primary" : ""}`}>
            WORK
          </Link>
          <Link href="/team" className={`text-sm font-medium ${activePage === "TEAM" ? "text-primary" : ""}`}>
            TEAM
          </Link>
          <Link href="/contact" className={`text-sm font-medium ${activePage === "CONTACT" ? "text-primary" : ""}`}>
            CONTACT
          </Link>
        </div>
      </nav>

      {/* Website URL */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
        <p className="vertical-text text-xs">www.stockroompitch.com</p>
      </div>

      {/* Page Content */}
      {children}

      {/* Page Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <div className="w-2 h-2 bg-black rounded-full"></div>
        </div>
      </div>
    </main>
  )
}

