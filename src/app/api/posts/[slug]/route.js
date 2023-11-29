import { NextResponse } from "next/server.js";
import clientPromise from "@/config/db.js";

const client = await clientPromise;
const db = client.db("middle-east");
import { ObjectId } from "mongodb";

export const GET = async (req, res) => {
  const { slug } = params;

  console.log(
    `-----------------------${slug}---------------------------------`
  );

  try {
    const post = await db.collection("posts").findOne({ slug });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(`Error: ${err}`);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }, { status: 500 })
    );
  }
};
