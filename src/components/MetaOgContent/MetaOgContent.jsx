import React from 'react'
import Head from "next/head";
import {useRouter} from "next/router";

export default function MetaOgContent({data,imagePath}) {
    const router = useRouter();
    const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`;
    const headerImageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${imagePath}`;
    return (
        <Head>
            <meta property="og:title" content={data?.seoMeta?.title} />
            <meta property="og:description" content={data?.seoMeta?.description} />
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={pageUrl}/>
            <meta property="og:locale" content="en_US"/>
            <meta name="og_site_name" property="og:site_name" content="MarioxSoftware"/>
            <meta name="twitter:widgets:csp" content="on"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content={data?.seoMeta?.title}/>
            <meta name="twitter:description" content={data?.seoMeta?.description}/>
            <meta name="twitter:site" content="@MarioxSoftwares"/>
            <meta name="twitter:image" content={headerImageUrl}/>
        </Head>
    )
}
