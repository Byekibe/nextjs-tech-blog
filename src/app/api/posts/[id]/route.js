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
};

export const POST = async (req, { params }) => {
  const { id } = params;

  try {
    const post = await db
      .collection("posts")
      .deleteOne({ _id: new ObjectId(id) });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (error) {
    console.log(`Error: ${error}`);

    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }, { status: 500 })
    );
  }
};

export const PUT = async (req, { params }) => {
  const { id } = params;
  const { title, slug, text, author } = await req.json();

  // console.log(
  //   `TITLE: -------------------${title} ${slug}-----------------------------`
  // );

  try {
    const post = await db
      .collection("posts")
      .updateOne(
        { _id: new ObjectId(id) },
        { $set: { title: title, slug: slug, text: text, author: author } }
      );
    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (error) {
    console.log(
      `Error: -----------------------------------------------------${error}------------------------------------`
    );

    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }, { status: 500 })
    );
  }
};
