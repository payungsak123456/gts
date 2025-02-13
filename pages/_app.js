/**
 * Using a custom _app.js with next-seo you can set default SEO
 * that will apply to every page. Full info on how the default works
 * can be found here: https://github.com/garmeeh/next-seo#default-seo-configuration
 */
import { DefaultSeo } from "next-seo";

import SEO from "../next-seo.config";

// Import Swiper styles
import "swiper/swiper.scss";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    /* Here we call NextSeo and pass our default configuration to it  */
    <>
      <Head>
        {/* <!-- bootstrap --> */}
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        {/* <!-- Plugin css --> */}
        <link rel="stylesheet" href="assets/css/plugin.css" />

        {/* <!-- stylesheet --> */}
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" href="assets/css/home.css" />
        {/* <!-- responsive --> */}
        <link rel="stylesheet" href="assets/css/responsive.css"></link>
        <script src="assets/js/jquery.js"></script>
        <script src="assets/js/popper.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/plugin.js"></script>

        <script src="assets/js/TweenMax.js"></script>
        <script src="assets/js/mousemoveparallax.js"></script>
        <script src="assets/js/main.js"></script>
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
