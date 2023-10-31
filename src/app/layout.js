import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/Header';
import { ThemeContextProvider } from '@/context/ThemeContext';
import { MenuContextProvider } from '@/context/MenuContext';
import { Providers } from '@/providers/themeProvider';
import Footer from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pete Blog',
  description: 'Software development technical blog',
}

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={inter.className}>
      <Providers>
        <MenuContextProvider>
              <div className='container'>
                <div className="wrapper">
                  <Header />
                    {children}
                  <Footer />
                </div>
              </div>
        </MenuContextProvider>
        </Providers>
      </body>
    </html>
  )
}
