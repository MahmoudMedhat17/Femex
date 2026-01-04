import { createNavigation } from "next-intl/navigation";
 
export const {Link, useRouter, usePathname} = createNavigation({
  // A list of all locales that are supported
  locales: ['en', 'ar'],
 
  // Used when no locale matches
  defaultLocale: 'ar'
});