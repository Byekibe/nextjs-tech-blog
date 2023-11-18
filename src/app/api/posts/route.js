import { NextResponse } from "next/server.js";
import clientPromise from "@/config/db.js";
import { ObjectId } from "mongodb";

export const GET = async (req, res) => {
  const client = await clientPromise;
  const db = client.db("middle-east");

  const posts = await db.collection("posts").find({}).toArray();

  return new NextResponse(JSON.stringify({ status: 200, data: posts }));
};

export const POST = async (req, res) => {
  const { title, slug, text, author } = await req.json();
  const client = await clientPromise;
  const db = client.db("middle-east");

  const myPost = await db.collection("posts").insertOne({
    title: title,
    slug: slug,
    text: text,
    author: author,
    createdAt: new Date(),
  });

  return NextResponse.json(myPost);
};
