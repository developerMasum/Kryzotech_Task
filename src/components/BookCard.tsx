"use client";

import React from "react";
import Link from "next/link";
import { TBook } from "@/types/types";

const BookCard = ({
  title,
  author,
  author_name,
  coverId,
  first_publish_year,
  has_fulltext,
  edition_count,
  ia_collection_s,
}: TBook) => {
  const displayAuthor = author?.[0] || author_name?.[0] || "N/A";

  const query = new URLSearchParams({
    title,
    author: (author?.length ? author : author_name)?.join(", ") || "Unknown",
    coverId: coverId?.toString() || "0",
    first_publish_year: first_publish_year?.toString() || "",
    has_fulltext: has_fulltext ? "true" : "false",
    edition_count: edition_count?.toString() || "0",
    ia_collection_s: ia_collection_s || "",
  }).toString();

  return (
    <li className="text-sm leading-relaxed list-disc ml-6">
      <Link
        href={`/details?${query}`}
        className="hover:underline text-blue-600"
      >
        <strong>{title}</strong>
      </Link>{" "}
      by <span className="italic">{displayAuthor}</span>
      {first_publish_year && ` — ${first_publish_year}`}
    </li>
  );
};

export default BookCard;
