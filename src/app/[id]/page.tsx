import React from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import CommentsBox from "../components/CommentsBox";
import Header from "../components/Header";

export default async function Pages({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  const query = `*[_type == "blog"]{
  image{
    asset->{
      url
    },
    alt
  },
  blogdate,
  mainHeading,
  description
}`;
  const data = await client.fetch(query);
  console.log(data);

  return (
    <>
      <Header />
      <div className="p-10 bg-red-950 w-full h-full flex gap-5 flex-col justify-center items-center">
        <div className="w-[350px] md:w-[600px] p-5 flex flex-col gap-10 justify-center items-center bg-[#ececec] rounded-lg text-black">
          <Image
            src={urlFor(data[id].image).url()}
            alt={data[id].image.alt}
            width={600}
            height={600}
          />
          <div className="md:w-[550px] w-[350px] py-5">
            <h1 className="font-extrabold text-[24px]">
              {data[id].mainHeading}
            </h1>
            <h3 className="text-[15px] pb-5 text-stone-500 font-semibold">
              {data[id].blogdate}
            </h3>
            <p className="text-[17px]">{data[id].description}</p>
          </div>
        </div>
        <CommentsBox params={{ id }} />
      </div>
    </>
  );
}
