"use client";

import React, { useEffect, useState } from "react";
import SearchBox from "@/components/SearchBox";
import BookCard from "@/components/BookCard";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchBooks = async (searchTerm: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(
          searchTerm
        )}`
      );
      const data = await res.json();
      if (data.docs && data.docs.length > 0) {
        setBooks(data.docs.slice(0, 10));
      } else {
        setError("No results found.");
        setBooks([]);
      }
    } catch (err) {
      setError("Failed to fetch books. Please try again.");
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks("Harry Potter");
  }, []);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;
    fetchBooks(query);
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">
        📚 Book Search App
      </h1>

      <div className="w-full max-w-xl mb-8">
        <SearchBox
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onSubmit={handleSearch}
        />
      </div>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2">
        {books.map((book: any) => (
          <BookCard
            key={book.key}
            title={book.title}
            author={book.author_name}
            coverId={book.cover_i}
          />
        ))}
      </div>
    </main>
  );
};

export default HomePage;
