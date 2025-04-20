import Link from 'next/link'

const DesktopNavigation = () => {
  return (
    <div className="hidden lg:flex lg:gap-x-12">
      <Link href="#" className="text-sm font-semibold text-[#634329] hover:text-[#4e341e]">
        Menu
      </Link>
      <Link href="#" className="text-sm font-semibold text-[#634329] hover:text-[#4e341e]">
        About
      </Link>
      <Link href="#" className="text-sm font-semibold text-[#634329] hover:text-[#4e341e]">
        Contact
      </Link>
    </div>
  )
}

export default DesktopNavigation