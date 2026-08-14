// import { NextSeo } from 'next-seo';
// import { useRouter } from 'next/router';
// import dynamic from 'next/dynamic';

// // Dynamically import services and index pages
// const Services = dynamic(() => import('@/pages/services'));
// const Index = dynamic(() => import('@/pages/index'));

// const DynamicPage = ({ isValidService, pageDetails }) => {
//   const router = useRouter();
//   const { serviceCity } = router.query;

//   if (!serviceCity) {
//     return <Index />;
//   }

//   if (!isValidService) {
//     return { notFound: true };
//   }

//   return (
//     <>
//       <Services data={pageDetails.data} serviceCity={serviceCity} />
//       <NextSeo
//         title={pageDetails.data?.seoMeta?.title || 'Default Title'}
//         description={pageDetails.data?.seoMeta?.description || 'Default description for SEO.'}
//       />
//     </>
//   );
// };

// export default DynamicPage;

// export async function getServerSideProps({ params }) {
//   const { serviceCity } = params;

//   if (!serviceCity || serviceCity.trim() === '') {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     };
//   }

//   const controller = new AbortController();
//   const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 seconds

//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/homeScreen/${serviceCity}`, {
//       signal: controller.signal,
//     });

//     clearTimeout(timeoutId);

//     if (!response.ok) {
//       return {
//         redirect: {
//           destination: '/',
//           permanent: false,
//         },
//       };
//     }

//     const data = await response.json();
// console.log("response data",data?.data?.companies)
//     if (!data || !data.data || Object.keys(data.data).length === 0) {
//       return {
//         redirect: {
//           destination: '/',
//           permanent: false,
//         },
//       };
//     }

//     return {
//       props: { isValidService: true, pageDetails: data },
//     };
//   } catch (error) {
//     console.error('Fetch error or timeout:', error.message);

//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     };
//   }
// }


import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

// Dynamic imports
const Services = dynamic(() => import("@/pages/services"));
const Index = dynamic(() => import("@/pages/index"));
const TopCompanies = dynamic(() => import("@/pages/top-companies"));

const DynamicPage = ({ isValidService, pageDetails }) => {
  const router = useRouter();
  const { serviceCity } = router.query;

  // 1️⃣ If no city param, go to home
  if (!serviceCity) return <Index />;

  // 2️⃣ If API invalid
  if (!isValidService) return { notFound: true };

  const isTopCity = pageDetails?.data?.isTopCity === true;
  const companies = pageDetails?.data?.companies || [];

  return (
    <>
      {isTopCity ? (
        // 3️⃣ Show Top Companies Page
        <TopCompanies companies={companies} />
      ) : (
        // 4️⃣ Otherwise show Services Page
        <Services data={pageDetails.data} serviceCity={serviceCity} />
      )}

      <NextSeo
        title={pageDetails?.data?.seoMeta?.title || "Default Title"}
        description={pageDetails?.data?.seoMeta?.description || "Default description for SEO."}
      />
    </>
  );
};

export default DynamicPage;

export async function getServerSideProps({ params }) {
  const { serviceCity } = params;

  if (!serviceCity || serviceCity.trim() === "") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 sec timeout

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/homeScreen/${serviceCity}`,
      { signal: controller.signal }
    );

    clearTimeout(timeoutId);

    if (!response.ok) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    const data = await response.json();

    if (!data || !data.data || Object.keys(data.data).length === 0) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    return {
      props: { isValidService: true, pageDetails: data },
    };
  } catch (error) {
    console.error("Fetch error or timeout:", error.message);
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}

