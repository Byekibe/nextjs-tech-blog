import { NextResponse } from "next/server.js";
import clientPromise from "@/config/db.js";

const client = await clientPromise;
const db = client.db("middle-east");
import { ObjectId } from "mongodb";

export const GET = async (req, { params }) => {
  const { id } = params;

  try {
    const post = await db
      .collection("posts")
      .findOne({ _id: new ObjectId(id) });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(`Error: ${err}`);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }, { status: 500 })
    );
  }
  // const client = await clientPromise;
  // const db = client.db("middle-east");

  // const posts = await db.collection("posts").find({}).toArray();

  // return new NextResponse(JSON.stringify({ status: 200, data: posts }));
};
