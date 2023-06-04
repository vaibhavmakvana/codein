// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

// const ScrollRestoration = ({ children }) => {
//   const router = useRouter();
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const handleRouteChangeStart = () => {
//       setScrollPosition(window.pageYOffset);
//     };

//     const handleRouteChangeComplete = () => {
//       window.scrollTo(0, scrollPosition);
//     };

//     router.events.on('routeChangeStart', handleRouteChangeStart);
//     router.events.on('routeChangeComplete', handleRouteChangeComplete);

//     return () => {
//       router.events.off('routeChangeStart', handleRouteChangeStart);
//       router.events.off('routeChangeComplete', handleRouteChangeComplete);
//     };
//   }, [router.events, scrollPosition]);

//   return <>{children}</>;
// };

// export default ScrollRestoration;





// in _app.js paste it

// import React from 'react';
// import { AppProps } from 'next/app';
// import ScrollRestoration from '../components/ScrollRestoration';

// const MyApp = ({ Component, pageProps }: AppProps) => {
//   return (
//     <ScrollRestoration>
//       <Component {...pageProps} />
//     </ScrollRestoration>
//   );
// };

// export default MyApp;
