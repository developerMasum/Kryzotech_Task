// components/SearchBox.tsx
import React from "react";

interface SearchBoxProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="mb-6 flex gap-2">
      <input
        type="text"
        placeholder="Search books by title..."
        value={value}
        onChange={onChange}
        className="flex-1 border px-4 py-2 rounded shadow"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded shadow"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
