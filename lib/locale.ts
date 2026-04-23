import { routing } from '@/i18n/routing';

export function getPathnameForLocale(pathname: string, locale: string): string {
  // Remove any existing locale prefix
  const normalizedPathname = `/${pathname}`
    .replace(`/${routing.defaultLocale}/`, '/')
    .replace(`/${routing.defaultLocale}`, '');

  // If it's the default locale and we're switching to default, return the pathname as-is
  if (locale === routing.defaultLocale) {
    return normalizedPathname || '/';
  }

  // Otherwise, prepend the locale
  return `/${locale}${normalizedPathname}` || `/${locale}`;
}

export function getCurrentLocale(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (
    routing.locales.includes(firstSegment as (typeof routing.locales)[number])
  ) {
    return firstSegment;
  }

  return routing.defaultLocale;
}
