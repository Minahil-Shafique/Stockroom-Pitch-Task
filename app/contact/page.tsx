import Link from "next/link"
import PageLayout from "@/components/layout/page-layout"
import ProductDisplay from "@/components/product-display"

export default function Contact() {
  return (
    <PageLayout activePage="CONTACT">
      {/* Product Shelf */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl px-4">
        <ProductDisplay layout="contact" />
      </div>

      {/* Content */}
      <div className="absolute top-1/3 right-16 text-right">
        <h1 className="text-5xl font-bold">GET IN</h1>
        <h1 className="text-5xl font-bold">TOUCH</h1>
        <h1 className="text-5xl font-bold text-primary">START</h1>
        <h1 className="text-5xl font-bold text-primary">CREATING</h1>

        <div className="mt-8">
          <Link href="/" className="inline-block px-8 py-2 bg-secondary text-white font-medium text-sm">
            CONTACT
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}

