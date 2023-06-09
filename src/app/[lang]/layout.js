import './styles/globals.css';
import { getDictionary } from '../../i18n/get-dictionary';
import { i18n } from '../../i18n/i18n-config';
import Footer from './components/common/Footer';
import Header from './components/common/Header/Header';

export const metadata = {
  icons: {
    icon: ['/favicon.ico'],
    shortcut: ['/favicon-32x32.png'],
  },
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Root({ children, params }) {
  const t = await getDictionary(params.lang);
  return (
    <html lang={params.lang === 'ru' ? 'ru-UA' : params.lang}>
      <body>
        <Header t={t.header} />
        {children}
        <Footer t={t.footer} />
      </body>
    </html>
  );
}
