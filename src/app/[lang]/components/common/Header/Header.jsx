'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import PromoBar from './PromoBar';
import Link from 'next/link';
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import RightButton from './RightButton';
import Navlink from './Navlink';

const Header = ({ t }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <PromoBar t={t.promo} />
      <nav className="bg-white border-solid border-b-gray-300 border lg:relative">
        <div className="flex items-center font-normal justify-around">
          <div className="pt-3 pb-3 lg:pb-0 lg:pt-5 z-50 flex justify-between items-center w-full lg:w-auto">
            <div className="lg:hidden ml-3 flex items-center">
              <div className="text-xl" onClick={() => setOpenMenu(!openMenu)}>
                {openMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
              </div>
              <div className="mr-2 text-2xl ml-5">
                <AiOutlineSearch />
              </div>
            </div>
            {/* Logo */}
            <div className="md:cursor-pointer h-3 lg:h-4 w-[220px] relative object-cover">
              <Image src="/logo.svg" fill className="" alt="logo" />
            </div>
            <div className="lg:hidden">
              <RightButton />
            </div>
          </div>
          {/* Mobile Menu */}
          <ul
            className={`
          lg:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 duration-200 z-10
          ${openMenu ? 'left-0' : 'left-[-100%]'}
        `}
          >
            {/* <Navlink props dataMenu={dataMenu} /> */}
            <Navlink />
          </ul>
        </div>
        <div className="lg:flex hidden items-center font-normal justify-between">
          <Link href="/" className="lg:flex py-4 hidden px-3 items-center">
            <AiOutlineSearch className="mr-2 text-xl" />
            Search
          </Link>
          <ul className="lg:flex hidden items-center gap-8">
            {/* <Navlink dataMenu={dataMenu} /> */}
            <Navlink />
          </ul>
          <RightButton />
        </div>
      </nav>
    </div>
  );
};

export default Header;
