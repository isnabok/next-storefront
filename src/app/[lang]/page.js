import Image from 'next/image';
import { Inter } from 'next/font/google';
import { getDictionary } from '../../i18n/get-dictionary';
import { env } from '../../../next.config';
import { fetcher } from '@/libs/api';

export default async function Home({ params: { lang } }) {
  const getData = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/products?locale=${lang}`
  );
  console.log(getData.data);
  const t = await getDictionary(lang);
  return (
    <>
      <div className="h-[75vh] ">
        <h1 className="text-gray-700 font-bold">{t.homePage}</h1>
        <ul>
          {getData.data.map((product) => (
            <li key={product.id}>{product.attributes.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
