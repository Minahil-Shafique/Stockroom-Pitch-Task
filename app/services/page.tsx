import Link from "next/link"
import PageLayout from "@/components/layout/page-layout"
import ProductDisplay from "@/components/product-display"

export default function Services() {
  return (
    <PageLayout activePage="SERVICES">
      {/* Product Shelf */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl px-4">
        <ProductDisplay layout="services" />
      </div>

      {/* Content */}
      <div className="absolute top-1/3 right-16 text-right">
        <h1 className="text-5xl font-bold">BRAND</h1>
        <h1 className="text-5xl font-bold">VOICE</h1>
        <h1 className="text-5xl font-bold text-primary">STANDOUT</h1>
        <h1 className="text-5xl font-bold text-primary">DESIGNS</h1>

        <div className="mt-8">
          <Link href="/team" className="inline-block px-8 py-2 bg-secondary text-white font-medium text-sm">
            SERVICES
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}

