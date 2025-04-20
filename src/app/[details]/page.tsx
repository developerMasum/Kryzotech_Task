"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import dummyImg from "../../../public/nocover.jpg";
const Details = () => {
  const params = useSearchParams();

  const title = params.get("title") || "No title";
  const author = params.get("author") || "Unknown";
  //   const coverId = params.get("coverId");
  const publishYear = params.get("first_publish_year") || "N/A";
  const fullText = params.get("has_fulltext") === "true" ? "Yes" : "No";
  const editionCount = params.get("edition_count") || "0";

  const [fold, setFold] = useState(true);
  const handleBuyNow = () => {
    alert("This feature is not available yet. Thanks for your patience.");
  };

  //   const image =
  //     coverId && coverId !== "0"
  //       ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
  //       : "https://via.placeholder.com/300x400?text=No+Cover";
  // not working due to IMAGE property in openlibrary

  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec. Vestibulum vel velit nec ipsum sollicitudin scelerisque. Proin malesuada orci at erat consectetur, sed sagittis massa facilisis.";

  return (
    <div className="flex justify-center items-center mt-16">
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        {/* Image section */}
        <div className="lg:w-1/2 h-full">
          <Image
            src={dummyImg}
            alt="book cover"
            width={300}
            height={400}
            className="object-cover w-full lg:h-full"
          />
        </div>

        <div className="p-8  lg:p-16 lg:pl-10 lg:w-1/2">
          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl text-teal-700 opacity-50">
            {title}
          </h5>
          <p className="text-gray-900 ">
            Author: <span className="font-semibold">{author}</span>{" "}
          </p>
          <p className="text-gray-900 ">
            Publish Year: <span className="font-semibold">{publishYear}</span>
          </p>
          <p className="text-gray-900 ">
            Full Text Available:{" "}
            <span className="font-semibold">{fullText}</span>
          </p>
          <p className="text-gray-900 ">
            Edition Count: <span className="font-semibold">{editionCount}</span>
          </p>

          <div className="mt-4 text-gray-700">
            {fold ? (
              <>
                <p>{description.substring(0, 100)}...</p>
                <span
                  className="cursor-pointer text-blue-600"
                  onClick={() => setFold(false)}
                >
                  Read More
                </span>
              </>
            ) : (
              <>
                <p>{description}</p>
                <span
                  className="cursor-pointer text-blue-600"
                  onClick={() => setFold(true)}
                >
                  Read Less
                </span>
              </>
            )}
          </div>

          <div className="flex gap-5 mt-8 items-center">
            <button
              onClick={handleBuyNow}
              className="bg-teal-800 text-white px-4 py-2 rounded"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
