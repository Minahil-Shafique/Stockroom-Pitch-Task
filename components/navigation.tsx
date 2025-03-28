"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

const navItems = [
  { name: "HOME", path: "/" },
  { name: "ABOUT US", path: "/about" },
  { name: "SERVICES", path: "/services" },
  { name: "WORK", path: "/work" },
  { name: "TEAM", path: "/team" },
  { name: "CONTACT", path: "/contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      <div className="flex items-center justify-between p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col space-y-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="hidden md:flex md:items-center md:space-x-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                item.name === "SERVICES" ? "text-primary" : "text-black"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  item.name === "SERVICES" ? "text-primary" : "text-black"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

