import { defineMiddleware } from 'astro:middleware';
import { defaultLang } from './i18n/config';
import type { Language } from './i18n/config';

export const onRequest = defineMiddleware((context, next) => {
  // Získání jazyka z URL nebo cookies
  const url = new URL(context.request.url);
  const pathname = url.pathname;
  
  // Kontrola, jestli URL začíná s /en/ nebo /de/
  const langMatch = pathname.match(/^\/(en|de)(\/|$)/);
  const lang = (langMatch ? langMatch[1] : defaultLang) as Language;
  
  // Uložení jazyka do locals pro použití v komponentách
  context.locals.lang = lang;
  
  // Ochrana admin stránek
  if (pathname.startsWith('/admin') && !pathname.includes('/login')) {
    const session = context.cookies.get('admin_session')?.value;
    
    if (session !== 'authenticated') {
      return new Response(null, {
        status: 302,
        headers: {
          'Location': '/admin/login',
        },
      });
    }
  }
  
  return next();
});