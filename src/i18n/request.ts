import { getRequestConfig } from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from '@/i18n/routing';
 
export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
 
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