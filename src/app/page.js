import Image from 'next/image'
import { Inter } from 'next/font/google';

import ScrollUp from '@/components/scrollUp/ScrollUp';
import Card from '@/components/card/Card';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {

  return (
    <main className={`main ${inter.className}`}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </main>
  )
}
