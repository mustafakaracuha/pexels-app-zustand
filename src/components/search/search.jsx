import React, { useEffect, useState } from "react";
import { useStore } from "../../store/store";

import { FaSearch } from "react-icons/fa";
import { fetchSearchedImages, fetchRandom } from "../../utils/api";

function Search({ setImages }) {
  const { darkMode } = useStore();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm.trim() === "") {
      fetchRandomImages()
    }
    fetchSearchResults()
  }, [searchTerm]);

  const fetchRandomImages = async () => {
    try {
      const randomImages = await fetchRandom();
      setImages(randomImages);
    } catch (error) {
      console.error("Error fetching random images:", error);
    }
  };

  const fetchSearchResults = async () => {
    try {
      const searchResults = await fetchSearchedImages(searchTerm);
      setImages(searchResults);
    } catch (error) {
      console.error("Error fetching searched images:", error);
    }
  };

  return (
    <div className="max-sm:w-full relative">
      <input
        type="text"
        placeholder="Haydi bir şeyler ara"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={
          darkMode
            ? "max-sm:w-full w-[330px] max-sm:pl-12 pl-10 bg-transparent text-start max-sm:py-3 py-2 border-2 border-gray-500 text-gray-400 rounded-full shadow-sm focus:outline-none focus:border-indigo-400"
            : "max-sm:w-full w-[330px] max-sm:pl-12 pl-10 bg-transparent text-start max-sm:py-3 py-2 border-2 rounded-full shadow-sm focus:outline-none focus:border-indigo-400"
        }
      />
      <FaSearch className="absolute max-sm:top-[19px] top-[15px] left-5 right-0 text-gray-400" />
    </div>
  );
}

export default Search;
