import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import { ThemeContextProvider } from "@/context/ThemeContext";
import { MenuContextProvider } from "@/context/MenuContext";
import { Providers } from "@/providers/themeProvider";
import Footer from "@/components/footer/Footer";
// import { SessionProvider } from "next-auth/react";
import AuthProvider from "../providers/AuthProvider.jsx";
// import Head from "next/head";
import GoogleAnalytics from "../components/googleAnalytics/GoogleAnalytics.jsx";
import CookieBanner from "../components/cookieBanner/CookieBanner.jsx";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const GA_MEASUREMENT_ID = "G-8XTLLSMSJ7";

export const metadata = {
  title: "Byedev Blog",
  description: "Software development technical blog",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics GA_MEASUREMENT_ID="G-8XTLLSMSJ7" />
      )}
      <head>
        {process.env.NODE_ENV === "production" && (
          <div className="container">
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-8XTLLSMSJ7" />
            <Script id="google-analytics">
              {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', ${GA_MEASUREMENT_ID});
        `}
            </Script>
          </div>
        )}
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <Providers>
            <MenuContextProvider>
              <div className="container">
                <div className="wrapper">
                  <Header />
                  {children}
                  <CookieBanner />
                  <Footer />
                </div>
              </div>
            </MenuContextProvider>
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
