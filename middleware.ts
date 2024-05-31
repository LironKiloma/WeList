import { NextResponse } from "next/server";
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

let locales = ['en', 'he'];
 
// Get the preferred locale, similar to the above or using a library
function getLocale(request: any) {
  
  const userBrowserLang = request.headers.get('Accept-Language')  // console.log('language from headers', headers);
  let headers = { 'accept-language': userBrowserLang };
  let languages = new Negotiator({ headers }).languages();
  let locales = ['en', 'he'];
  let defaultLocale = 'en';
  return match(languages, locales, defaultLocale);
 }
 
export function middleware(request: any) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
 
  if (pathnameHasLocale) return
 
  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
    // ["/mylists"]
  ],
}



// import { withAuth } from "next-auth/middleware"



// export default withAuth(
//   // `withAuth` augments your `Request` with the user's token.
//   function middleware(req) {
//     console.log('im in middleware yay!!!!!')
//     console.log(req.nextauth.token)
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => {
//         console.log('token in authorized', token);
//         return token?.role === "admin"
//     },
//   },
// });

// export const config = { matcher: ["/mylists"] }