import Link from "next/link";
import React from "react";

interface BookCardProps {
  title: string;
  author?: string[];
  coverId?: number;
}

const BookCard: React.FC<BookCardProps> = ({ title, author, coverId }) => {
  const imageUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  return (
    <Link href={`/${coverId}`}>
      <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2">
        <img
          className="object-cover w-full h-48 md:h-64 xl:h-80"
          src={imageUrl}
          alt="book cover"
        />

        <div className="bg-black px-4 py-4  bg-opacity-75 opacity-0 hover:opacity-90 text-white absolute inset-0 transition-opacity duration-200 rounded shadow-lg hover:shadow-2xl flex flex-col ">
          <p className="text-2xl font-semibold">{title}</p>
          <br />
          <p>{title.substring(0, 45)}....</p>
          <br />
          <p className="mt-auto font-semibold">Price:{author}</p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
