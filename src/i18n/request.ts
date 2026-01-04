import {getRequestConfig} from 'next-intl/server';
import { notFound } from 'next/navigation';
 
const locales = ["en", "ar"];

export default getRequestConfig(async ({locale="en"}) => {

  if(!locales.includes(locale as any))
  {
    return notFound();
    }
 
  return {
    locale,
    messages: {
      ...(await import(`../messages/${locale}/Navbar.json`)).default,
      ...(await import(`../messages/${locale}/About.json`)).default,
      ...(await import(`../messages/${locale}/Contact.json`)).default,
      ...(await import(`../messages/${locale}/CustomsClearance.json`)).default,
      ...(await import(`../messages/${locale}/DryRefrigeratedTransport.json`)).default,
      ...(await import(`../messages/${locale}/Home.json`)).default,
      ...(await import(`../messages/${locale}/ParcelDelivery.json`)).default,
      ...(await import(`../messages/${locale}/StorageService.json`)).default,
      ...(await import(`../messages/${locale}/Footer.json`)).default,
    }
  };
});