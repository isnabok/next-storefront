'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { i18n } from '@/i18n/i18n-config';
import { GB, UA, RU } from 'country-flag-icons/react/3x2';

const LocaleSwitcher = ({ t }) => {
  const pathName = usePathname();
  const redirectedPathName = (locale) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <>
      <p className="px-2 text-sm text-gray-500">{t.selectLanguage}</p>
      {i18n.locales.map((locale) => {
        return (
          <Link
            key={locale}
            href={redirectedPathName(locale)}
            className="px-[2px]"
          >
            {locale === 'en' ? (
              <GB title={t.english} className="w-7 h-auto" />
            ) : locale === 'uk' ? (
              <UA title={t.ukrainian} className="w-7 h-auto" />
            ) : (
              <RU title={t.russian} className="w-7 h-auto" />
            )}
          </Link>
        );
      })}
    </>
  );
};

export default LocaleSwitcher;
