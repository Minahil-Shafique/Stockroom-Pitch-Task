import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="inline-block">
      <div className="relative w-[120px] h-[50px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[40px] h-[40px]">
            <div className="absolute inset-0 border-2 border-white rotate-0"></div>
            <div className="absolute inset-0 border-2 border-white rotate-[15deg]"></div>
            <div className="absolute inset-0 border-2 border-white rotate-[30deg]"></div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-white">stockroompitch</span>
        </div>
      </div>
    </Link>
  )
}

