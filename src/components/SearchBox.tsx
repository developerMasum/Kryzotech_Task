import React from "react";

interface SearchBoxProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
}

const SearchBox = ({ value, onChange, onSubmit, inputRef }: SearchBoxProps) => {
  return (
    <form onSubmit={onSubmit} className="flex items-center space-x-2">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={onChange}
        className="p-2 w-full rounded border"
        placeholder="Search books..."
      />
      <button
        type="submit"
        disabled={!value.trim()}
        className="bg-teal-700 text-white px-4 py-2 rounded 
             cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
