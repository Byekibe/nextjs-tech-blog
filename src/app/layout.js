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

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "byedev.com Blog",
  description: "Software development technical blog",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        {process.env.NODE_ENV === "production" && (
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6273897210787470"
            crossorigin="anonymous"
          ></script>
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
