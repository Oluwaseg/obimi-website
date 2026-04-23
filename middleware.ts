import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    '/',
    '/(de|en)/:path*',
    // Also match locale-less paths that aren't static files
    '/((?!api|_next|.*\\..*).*)',
  ],
};
