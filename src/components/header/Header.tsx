'use client';

import Link from 'next/link';
import Logo from '@/src/components/header/HeaderLogo';
import MobileMenuButton from '@/src/components/header/MobileMenuButton';
import DesktopNavigation from '@/src/components/header/DesktopNav';
import MobileMenu from '@/src/components/header/MobileMenu';
import { useMobileMenuStore } from '@/src/store/MobileMenuStore';
import { FaArrowRight } from 'react-icons/fa';

const Header = () => {
  const { isOpen, open, close } = useMobileMenuStore();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-300 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex items-center justify-between p-4 lg:px-8">
        <Logo />
        <MobileMenuButton onClick={open} />
        <DesktopNavigation />
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/login"
            className="flex items-center gap-2 text-sm font-semibold text-[#634329] hover:text-[#4e341e]"
          >
            Log in <FaArrowRight className="inline-block" />
          </Link>
        </div>
      </nav>
      <MobileMenu isOpen={isOpen} onClose={close} />
    </header>
  );
};

export default Header;
