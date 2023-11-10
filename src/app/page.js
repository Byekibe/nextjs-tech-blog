"use client";

import Image from 'next/image'
import { Inter } from 'next/font/google';

import ScrollUp from '@/components/scrollUp/ScrollUp';
import Card from '@/components/card/Card';
import { useState, useEffect } from 'react';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(`posts: ${posts}`);

  useEffect(() => {
    const fetchPosts = async () => {
      // API ENDPOINT
      const res = await fetch("/api/posts");

      const data = await res.json();
      console.log(`data: ${data.data}`);
      setPosts(data.data);
      setLoading(false);
    }

    fetchPosts();
  }, []);

  return (
    <main className={`main ${inter.className}`}>
      <Card posts={posts} loading={loading}  />
    </main>
  )
}
