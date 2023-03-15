import LocaleSwitcher from './LocaleSwitcher';

const Footer = ({ t }) => {
  return (
    <footer className="text-gray-600 body-font bg-gray-100">
      <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 text-xl">{t.copyright.name}</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          {t.copyright.text}
        </p>
        <span className="inline-flex items-center sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <LocaleSwitcher t={t.switcher} />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
