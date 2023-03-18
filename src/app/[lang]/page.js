import Image from 'next/image';
import { Inter } from 'next/font/google';
import { getDictionary } from '../../i18n/get-dictionary';

export default async function Home({ params: { lang } }) {
  const t = await getDictionary(lang);
  return (
    <>
      <div className="h-[75vh] ">
        <h1 className="text-gray-700 font-bold">{t.homePage}</h1>
      </div>
    </>
  );
}
