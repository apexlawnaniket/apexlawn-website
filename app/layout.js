import localFont from "next/font/local";
import "./globals.css";
import Header from "@/src/sections/Header";
import Footer from "@/src/sections/Footer";
import Script from "next/script";

const OpenSans = localFont({
  src: "./fonts/OpenSans.woff",
  variable: "--font-open-sans",
  weight: "400 600 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Apex Lawn Company</title>

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"  // Ensure the script runs after the page is interactive
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start':
                  new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M6PMBDDZ');
            `,
          }}
        />
        {/* End Google Tag Manager */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Apex Lawn Company",
              url: "https://apexlawncompany.github.io/apexlawn-website/",
              telephone: "+1 919-939-4665",
              address: {
                "@type": "PostalAddress",
                streetAddress: "501 W Williams St Box 1012",
                addressLocality: "Apex",
                addressRegion: "NC",
                postalCode: "27502",
                addressCountry: "US",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.5",
                reviewCount: "123",
              },
            }),
          }}
        />

        <meta
          name="google-site-verification"
          content="Q-h9fQ_yBWCyBHKa6MHkm-ME3RYiWcIHuufxSyVIft0"
        />
        <meta name="description" content="Quality Affordable Lawncare" />
        <meta
          name="keywords"
          content="apex lawn company, lawncare, lawn care, Grass Fertilization, residential lawn maintenance, leaf removal companies, lawn, maintenance service, turf lawn care, Lawn Fertilizer And Weed Control Company, leaf removal services, residential lawn service, Grass Fertilization Service, landscaping companies near me, landscape maintenance contractor, best lawn mowing, fall leaf cleanup, lawn aeration company, lawn aeration costs, lawn services, grass cutting service, lawn maintenance"
        ></meta>
      </head>

      <body className={`${OpenSans.className}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M6PMBDDZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
