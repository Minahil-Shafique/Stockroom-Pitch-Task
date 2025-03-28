import Image from "next/image"

interface ProductImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function ProductImage({ src, alt, width, height, className = "" }: ProductImageProps) {
  return (
    <div className={`relative ${className}`}>
      <Image src={src || "/placeholder.svg"} alt={alt} width={width} height={height} className="object-contain" />
    </div>
  )
}

