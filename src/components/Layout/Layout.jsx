import Head from 'next/head';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { forwardRef, useEffect, useRef } from 'react';

const Layout = forwardRef(
  (
    {
      children,
      headerProps,
      bodyProps = {},
      initialPathname,
      // hasHeaderFooter = true,
      className = '',
    },
    ref
  ) => {
    // const lenis = useLenis(({ scroll }) => {
    //   // called every scroll
    // });

    return (
      <>
        <Head>
          <title>Mariox</title>
        </Head>
        <Header
          {...headerProps}
          initialPathname={initialPathname}
          className={`${className} ${bodyProps?.className}`}
        />
        <main ref={ref} {...bodyProps}>
          {children}
        </main>
        <Footer className={`${className} ${bodyProps?.className}`} />
      </>
    );
  }
);
Layout.displayName = 'Layout';
export default Layout;
