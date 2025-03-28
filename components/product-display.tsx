import Image from "next/image"

interface ProductDisplayProps {
  layout: "home" | "about" | "services" | "work" | "team" | "contact"
}

export default function ProductDisplay({ layout }: ProductDisplayProps) {
  // Different product layouts for different pages
  const layouts = {
    home: (
      <div className="absolute bottom-[122px] left-0 w-full flex justify-between items-end px-16">
        <div className="relative w-[100px] h-[220px] -mb-2">
          <Image src="/juice-bottle.png" alt="Juice Bottle" width={100} height={220} className="object-contain" />
        </div>

        <div className="relative w-[120px] h-[150px] -mb-2">
          <Image src="/package.png" alt="Package" width={120} height={150} className="object-contain" />
        </div>

        <div className="relative w-[120px] h-[180px] -mb-2">
          <Image src="/chips-bag.png" alt="Chips Bag" width={120} height={180} className="object-contain" />
        </div>

        <div className="relative w-[100px] h-[150px] -mb-2">
          <Image src="/lego-figure.png" alt="Lego Figure" width={100} height={150} className="object-contain" />
        </div>

        <div className="relative w-[150px] h-[250px] -mb-2">
          <Image src="/phone-shoe.png" alt="Phone with Shoe" width={150} height={250} className="object-contain" />
        </div>
      </div>
    ),
    about: (
      <div className="absolute bottom-[122px] left-0 w-full flex justify-between items-end px-16">
        <div className="relative w-[150px] h-[250px] -mb-2">
          <Image src="/phone-shoe.png" alt="Phone with Shoe" width={150} height={250} className="object-contain" />
        </div>

        <div className="relative w-[100px] h-[220px] -mb-2">
          <Image src="/juice-bottle.png" alt="Juice Bottle" width={100} height={220} className="object-contain" />
        </div>

        <div className="relative w-[100px] h-[150px] -mb-2">
          <Image
            src="/lego-figure.png"
            alt="Lego Figure"
            width={100}
            height={150}
            className="object-contain transform rotate-12"
          />
        </div>

        <div className="relative w-[120px] h-[150px] -mb-2">
          <Image src="/package.png" alt="Package" width={120} height={150} className="object-contain" />
        </div>

        <div className="relative w-[120px] h-[180px] -mb-2">
          <Image
            src="/chips-bag.png"
            alt="Chips Bag"
            width={120}
            height={180}
            className="object-contain transform -rotate-6"
          />
        </div>
      </div>
    ),
    services: (
      <div className="absolute bottom-[122px] left-0 w-full flex justify-between items-end px-16">
        <div className="relative w-[120px] h-[180px] -mb-2">
          <Image src="/chips-bag.png" alt="Chips Bag" width={120} height={180} className="object-contain" />
        </div>

        <div className="relative w-[120px] h-[150px] -mb-2">
          <Image src="/package.png" alt="Package" width={120} height={150} className="object-contain" />
        </div>

        <div className="relative w-[150px] h-[250px] -mb-2">
          <Image src="/phone-shoe.png" alt="Phone with Shoe" width={150} height={250} className="object-contain" />
        </div>

        <div className="relative w-[100px] h-[220px] -mb-2">
          <Image src="/juice-bottle.png" alt="Juice Bottle" width={100} height={220} className="object-contain" />
        </div>

        <div className="relative w-[100px] h-[150px] -mb-2">
          <Image src="/lego-figure.png" alt="Lego Figure" width={100} height={150} className="object-contain" />
        </div>
      </div>
    ),
    work: (
      <div className="absolute bottom-[122px] left-0 w-full flex justify-between items-end px-16">
        <div className="relative w-[100px] h-[150px] -mb-2">
          <Image src="/lego-figure.png" alt="Lego Figure" width={100} height={150} className="object-contain" />
        </div>

        <div className="relative w-[150px] h-[250px] -mb-2">
          <Image src="/phone-shoe.png" alt="Phone with Shoe" width={150} height={250} className="object-contain" />
        </div>

        <div className="relative w-[100px] h-[220px] -mb-2">
          <Image src="/juice-bottle.png" alt="Juice Bottle" width={100} height={220} className="object-contain" />
        </div>

        <div className="relative w-[120px] h-[180px] -mb-2">
          <Image
            src="/chips-bag.png"
            alt="Chips Bag"
            width={120}
            height={180}
            className="object-contain transform rotate-12"
          />
        </div>

        <div className="relative w-[120px] h-[150px] -mb-2">
          <Image src="/package.png" alt="Package" width={120} height={150} className="object-contain" />
        </div>
      </div>
    ),
    team: (
      <div className="absolute bottom-[122px] left-0 w-full flex justify-between items-end px-16">
        <div className="relative w-[120px] h-[150px] -mb-2">
          <Image src="/package.png" alt="Package" width={120} height={150} className="object-contain" />
        </div>

        <div className="relative w-[100px] h-[220px] -mb-2">
          <Image src="/juice-bottle.png" alt="Juice Bottle" width={100} height={220} className="object-contain" />
        </div>

        <div className="relative w-[100px] h-[150px] -mb-2 z-10">
          <Image
            src="/lego-figure.png"
            alt="Lego Figure"
            width={100}
            height={150}
            className="object-contain transform scale-150"
          />
        </div>

        <div className="relative w-[120px] h-[180px] -mb-2">
          <Image src="/chips-bag.png" alt="Chips Bag" width={120} height={180} className="object-contain" />
        </div>

        <div className="relative w-[150px] h-[250px] -mb-2">
          <Image src="/phone-shoe.png" alt="Phone with Shoe" width={150} height={250} className="object-contain" />
        </div>
      </div>
    ),
    contact: (
      <div className="absolute bottom-[122px] left-0 w-full flex justify-between items-end px-16">
        <div className="relative w-[150px] h-[250px] -mb-2">
          <Image src="/phone-shoe.png" alt="Phone with Shoe" width={150} height={250} className="object-contain" />
        </div>

        <div className="relative w-[120px] h-[150px] -mb-2">
          <Image src="/package.png" alt="Package" width={120} height={150} className="object-contain" />
        </div>

        <div className="relative w-[100px] h-[150px] -mb-2">
          <Image src="/lego-figure.png" alt="Lego Figure" width={100} height={150} className="object-contain" />
        </div>

        <div className="relative w-[100px] h-[220px] -mb-2">
          <Image src="/juice-bottle.png" alt="Juice Bottle" width={100} height={220} className="object-contain" />
        </div>

        <div className="relative w-[120px] h-[180px] -mb-2">
          <Image src="/chips-bag.png" alt="Chips Bag" width={120} height={180} className="object-contain" />
        </div>
      </div>
    ),
  }

  return (
    <div className="relative h-[400px]">
      {/* Shelf */}
      <div className="absolute bottom-[120px] left-0 w-full h-2 bg-gradient-to-b from-shelf to-gray-200 shadow-md"></div>

      {/* Products based on layout */}
      {layouts[layout]}
    </div>
  )
}

