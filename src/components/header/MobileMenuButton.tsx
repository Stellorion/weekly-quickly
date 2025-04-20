import { HiOutlineMenuAlt3 } from 'react-icons/hi'

type Props = {
  onClick: () => void
}

const MobileMenuButton = ({ onClick }: Props) => {
  return (
    <div className="flex lg:hidden">
      <button
        type="button"
        onClick={onClick}
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#634329]"
      >
        <span className="sr-only">Open main menu</span>
        <HiOutlineMenuAlt3 className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  )
}

export default MobileMenuButton