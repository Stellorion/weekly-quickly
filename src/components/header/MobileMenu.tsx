import { Dialog } from '@headlessui/react'
import Link from 'next/link'
import { HiOutlineX } from 'react-icons/hi'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu = ({ isOpen, onClose }: Props) => {
  return (
    <Dialog as="div" className="lg:hidden" open={isOpen} onClose={onClose}>
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-[#634329]">Logo</span>
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-[#634329]"
            onClick={onClose}
          >
            <span className="sr-only">Close menu</span>
            <HiOutlineX className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <Link
                href="/menu"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-[#634329] hover:bg-gray-50"
              >
                Menu
              </Link>
              <Link
                href="/about"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-[#634329] hover:bg-gray-50"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-[#634329] hover:bg-gray-50"
              >
                Contact
              </Link>
            </div>
            <div className="py-6">
              <Link
                href="/login"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-[#634329] hover:bg-gray-50"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  )
}

export default MobileMenu