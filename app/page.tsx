import Link from "next/link"
import PageLayout from "@/components/layout/page-layout"
import ProductDisplay from "@/components/product-display"

export default function Home() {
  return (
    <PageLayout activePage="HOME">
      {/* Product Shelf */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl px-4">
        <ProductDisplay layout="home" />
      </div>

      {/* Content */}
      <div className="absolute top-1/3 right-16 text-right">
        <h1 className="text-5xl font-bold">CREATIVE</h1>
        <h1 className="text-5xl font-bold">DESIGN</h1>
        <h1 className="text-5xl font-bold text-primary">BRAND</h1>
        <h1 className="text-5xl font-bold text-primary">IDENTITY</h1>

        <div className="mt-8">
          <Link href="/about" className="inline-block px-8 py-2 bg-secondary text-white font-medium text-sm">
            ABOUT
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}

