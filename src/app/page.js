"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import ScrollUp from "@/components/scrollUp/ScrollUp";
import Card from "@/components/card/Card";
import { useState, useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export const baseUrl = "http://localhost:3000";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      // const post_url =
      //   process.env.NODE_ENV === "development"
      //     ? "http://localhost:3000/api/posts"
      //     : "/api/posts";

      // const post_url = `${baseUrl}/api/posts`;
      const post_url = "/api/posts";
      const res = await fetch(post_url, {
        cache: "no-store",
      });

      const data = await res.json();

      setPosts(data.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <main className={`main ${inter.className}`}>
      <Card posts={posts} loading={loading} />
    </main>
  );
}
