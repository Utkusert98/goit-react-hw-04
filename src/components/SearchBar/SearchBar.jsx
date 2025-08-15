import { toast, Toaster } from "react-hot-toast";
import { FaSearch } from "react-icons/fa";
import style from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const notify = () => {
    toast.error("Please enter a word!", {
      duration: 750,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      notify();
      return;
    }
    onSubmit(inputValue.trim());
    setInputValue("");
  };

  return (
    <header>
      <form className={style.formElem} onSubmit={handleSubmit}>
        <div className={style.inputWrapper}>
          <button type="submit" className={style.iconButton}>
            <FaSearch className={style.searchIcon} />
          </button>
          <input
            value={inputValue}
            type="text"
            className={style.searchInput}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </div>
        <button type="submit" className={style.submitButton}>
          Search
        </button>
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;
