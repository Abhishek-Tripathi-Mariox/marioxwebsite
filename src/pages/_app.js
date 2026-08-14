import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import DefaultLayout from '@/components/Layout/Layout';
import '@/styles/globals.scss';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import localFont from 'next/font/local';
import gsap from 'gsap';
import { SplitText } from 'gsap/dist/SplitText';

import { ReactLenis } from '@studio-freight/react-lenis';
import Transition from '@/components/Transition/Transition';
import OrganizationSchema from '@/components/OrganizationSchema/OrganizationSchema'

gsap.registerPlugin(SplitText);

const swinton = localFont({
  src: [
    {
      path: '../../public/fonts/NNSwintonTRIAL-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NNSwintonTRIAL-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NNSwintonTRIAL-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NNSwintonTRIAL-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NNSwintonTRIAL-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-swinton',
});

function MarioxWebsite({ Component, pageProps }) {
  const router = useRouter();
  const globalAnimations = useRef([]);
  const container = useRef();
  const elements = useRef();
  const { Layout, headerProps } = Component;
  const { lightHead = false } = headerProps || {};
  const AppLayout = Layout || DefaultLayout;
  const lenisRef = useRef();

  return (
      <>
        <OrganizationSchema
            name="Mariox Software"
            url="https://www.marioxsoftware.com"
            logo="https://www.marioxsoftware.com/logo.png"
            telephone="+1-800-555-1212"
            contactType="Customer Service"
            areaServed="Global"
            availableLanguage="English"
            socialLinks={[
              "https://www.facebook.com/marioxsoftware/",
              "https://www.instagram.com/marioxsoftware/",
              "https://www.linkedin.com/company/marioxsoftware",
              "https://www.twitter.com/MarioxSoftwares"
            ]}
            streetAddress="1234 Tech Street"
            addressLocality="Silicon Valley"
            addressRegion="CA"
            postalCode="94000"
            addressCountry="US"
        />
    <Transition>
      <AppLayout
        headerProps={headerProps}
        initialPathname={router.pathname}
        bodyProps={{
          className: `${swinton.variable}`,
        }}
        ref={container}
        key={router.route}
      >
        <ReactLenis ref={lenisRef} root>
          <Component {...pageProps} />
        </ReactLenis>
        <Toaster />
      </AppLayout>
    </Transition>
        </>
  );
}

MarioxWebsite.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}),
};
export default MarioxWebsite;
