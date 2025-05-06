import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async ({ request, locals }, next) => {
  const hostname = new URL(request.url).hostname;

  if (hostname.startsWith('nl.')) {
    locals.lang = 'nl';
  } else if (hostname.startsWith('en.')) {
    locals.lang = 'en';
  } else if (hostname.startsWith('de.')) {
    locals.lang = 'de';
  } else {
    locals.lang = 'default';
  }

  return next();
};