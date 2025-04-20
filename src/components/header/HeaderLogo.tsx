import Link from 'next/link'

const Logo = () => {
  return (
    <div className="flex lg:flex-1">
      <Link href="/" className="-m-1.5 p-1.5">
        <span className="text-2xl font-bold text-[#634329]">Logo</span>
      </Link>
    </div>
  )
}

export default Logo