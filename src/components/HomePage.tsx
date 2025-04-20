"use client";

import React, { useState, useRef } from "react";
import axios from "axios";
import SearchBox from "@/components/SearchBox";
import BookCard from "@/components/BookCard";
import LoadingSpinner from "./LoadingSpinner";
import { TBook } from "@/types/types";

const HomePage = () => {
  const [query, setQuery] = useState<string>("");
  const [books, setBooks] = useState<TBook[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const fetchBooks = async (searchTerm: string) => {
    setBooks([]);
    setError("");
    setLoading(true);
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(
          searchTerm
        )}`
      );
      const data = response.data;

      if (data?.docs?.length > 0) {
        setBooks(data.docs);
      } else {
        setError("No results found.");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Failed to fetch books. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;
    fetchBooks(query);
  };

  const handleRetrySearch = () => {
    setError("");
    setQuery("");
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <main className="bg-gray-900">
      <div className="min-h-screen text-white flex flex-col justify-center items-center px-4 py-10">
        <div className="w-full max-w-xl mb-8">
          <SearchBox
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onSubmit={handleSearch}
            inputRef={inputRef}
          />
        </div>

        {loading && <LoadingSpinner />}

        {error && !loading && (
          <p className="text-center text-red-500">
            {error}
            {error === "No results found." && (
              <span
                onClick={handleRetrySearch}
                className="cursor-pointer text-teal-500 underline ml-2"
              >
                Click here to search again.
              </span>
            )}
          </p>
        )}

        {!loading && books.length > 0 && (
          <ul className="space-y-2 text-left w-full max-w-2xl">
            {books.map((book: TBook) => (
              <BookCard
                key={book.key}
                title={book.title}
                author_name={book.author_name}
                edition_count={book.edition_count}
                first_publish_year={book.first_publish_year}
                author={book.author_name}
                coverId={book.cover_i}
              />
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};

export default HomePage;
