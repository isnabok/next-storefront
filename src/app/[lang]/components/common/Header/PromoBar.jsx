'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const PromoBar = ({ t }) => {
  const [openPromo, setOpenPromo] = useState(false);
  return (
    <>
      <div className="bg-gray-100 text-center">
        <div className="flex items-center justify-center">
          <span
            className="p-3 text-xs text-zinc-700 inline-block hover:underline cursor-pointer"
            onClick={() => setOpenPromo(!openPromo)}
          >
            {t.title}
          </span>
          <span className="inline-block cursor-pointer duration-200">
            {openPromo ? (
              <AiOutlineUp className="text-zinc-500" />
            ) : (
              <AiOutlineDown className="text-zinc-500" />
            )}
          </span>
        </div>
        <div
          className={`${
            openPromo ? 'flex' : 'hidden'
          } p-2 flex-col items-center text-black border-t border-gray-400`}
        >
          <p className="uppercase font-bold p-5">{t.titleText}</p>
          <p className="text-xs max-w-[40%] text-center pb-5 m-auto">
            {t.text}
          </p>
          <Link href={'/'} className="uppercase text-xs mb-5">
            {t.linkText}
          </Link>
        </div>
      </div>
    </>
  );
};

export default PromoBar;
