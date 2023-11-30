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

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "byedev.com Blog",
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
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-8XTLLSMSJ7"
            ></script>
            <script>
              window.dataLayer = window.dataLayer || []; function gtag()
              {dataLayer.push(arguments)}
              gtag('js', new Date()); gtag('config', 'G-8XTLLSMSJ7');
            </script>
          </>
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
